"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth";
import { DOCUMENTS_BUCKET, readDocumentMeta } from "@/lib/plt/documents";
import { fetchVimeoDurationMin } from "@/lib/plt/vimeo";
import { PORTFOLIO_KEYS, type PortfolioKey } from "@/lib/portfolios";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type ActionResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

const MONTH_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;

const isPortfolioKey = (value: string): value is PortfolioKey =>
  (PORTFOLIO_KEYS as readonly string[]).includes(value);

/** Toutes les actions du backoffice passent par ce garde-fou. */
const guard = async <T>(
  run: () => Promise<T>
): Promise<T | { ok: false; error: string }> => {
  try {
    await requireAdmin();
    return await run();
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Action impossible.",
    };
  }
};

/** Crée la publication du mois si elle n'existe pas, et renvoie son id. */
const ensurePublication = async (month: string) => {
  const supabase = createSupabaseAdminClient();

  const { data: existing } = await supabase
    .from("plt_publication")
    .select("id")
    .eq("month", `${month}-01`)
    .maybeSingle();

  if (existing) return existing.id as string;

  const { data, error } = await supabase
    .from("plt_publication")
    .insert({ month: `${month}-01` })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return data.id as string;
};

/* ------------------------------------------------------------------ */
/* Rapports PDF                                                        */
/* ------------------------------------------------------------------ */

export type UploadUrlResult =
  | { ok: true; path: string; token: string }
  | { ok: false; error: string };

/**
 * Prépare le transfert d'un rapport : renvoie une URL signée vers laquelle le
 * navigateur téléverse directement le PDF (contourne la limite de corps des
 * fonctions Vercel). Le fichier ne passe jamais par le serveur.
 */
export const createReportUploadUrl = async (
  month: string,
  portfolioKey: string
): Promise<UploadUrlResult> => {
  try {
    await requireAdmin();
    if (!MONTH_PATTERN.test(month)) return { ok: false, error: "Mois invalide." };
    if (!isPortfolioKey(portfolioKey)) {
      return { ok: false, error: "Portefeuille inconnu." };
    }

    await ensurePublication(month);

    const storagePath = `publications/${month}/${portfolioKey}.pdf`;
    const { data, error } = await createSupabaseAdminClient()
      .storage.from(DOCUMENTS_BUCKET)
      .createSignedUploadUrl(storagePath, { upsert: true });

    if (error || !data) {
      return { ok: false, error: error?.message ?? "URL de transfert indisponible." };
    }
    return { ok: true, path: data.path, token: data.token };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Action impossible.",
    };
  }
};

/**
 * Enregistre un rapport déjà téléversé : lit sa taille et son nombre de pages
 * depuis le stockage, crée la ligne, puis publie le mois.
 */
export const registerReport = async (
  month: string,
  portfolioKey: string,
  storagePath: string
): Promise<ActionResult> =>
  guard(async () => {
    if (!MONTH_PATTERN.test(month)) {
      return { ok: false as const, error: "Mois invalide." };
    }
    if (!isPortfolioKey(portfolioKey)) {
      return { ok: false as const, error: "Portefeuille inconnu." };
    }

    const supabase = createSupabaseAdminClient();
    const publicationId = await ensurePublication(month);
    const meta = await readDocumentMeta(storagePath);

    const { error } = await supabase.from("plt_publication_report").upsert({
      publication_id: publicationId,
      portfolio_key: portfolioKey,
      storage_path: storagePath,
      file_size_bytes: meta.sizeBytes,
      page_count: meta.pageCount,
      uploaded_at: new Date().toISOString(),
    });

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Rapport chargé." };
  });

export const removeReport = async (
  month: string,
  portfolioKey: string
): Promise<ActionResult> =>
  guard(async () => {
    if (!isPortfolioKey(portfolioKey)) {
      return { ok: false as const, error: "Portefeuille inconnu." };
    }

    const supabase = createSupabaseAdminClient();
    const publicationId = await ensurePublication(month);

    await supabase.storage
      .from(DOCUMENTS_BUCKET)
      .remove([`publications/${month}/${portfolioKey}.pdf`]);

    const { error } = await supabase
      .from("plt_publication_report")
      .delete()
      .eq("publication_id", publicationId)
      .eq("portfolio_key", portfolioKey);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Rapport retiré." };
  });

/* ------------------------------------------------------------------ */
/* Replay, alerte et performances                                      */
/* ------------------------------------------------------------------ */

export type PublicationDraft = {
  month: string;
  hasAlert: boolean;
  replayUrl: string | null;
  returns: Partial<Record<PortfolioKey, number | null>>;
};

export const savePublication = async (
  draft: PublicationDraft
): Promise<ActionResult> =>
  guard(async () => {
    if (!MONTH_PATTERN.test(draft.month)) {
      return { ok: false as const, error: "Mois invalide." };
    }

    const supabase = createSupabaseAdminClient();
    const publicationId = await ensurePublication(draft.month);

    // La durée du replay est déduite du lien Vimeo — plus de saisie manuelle.
    const replayUrl = draft.replayUrl?.trim() || null;
    const replayDurationMin = replayUrl
      ? await fetchVimeoDurationMin(replayUrl)
      : null;

    const { error } = await supabase
      .from("plt_publication")
      .update({
        has_alert: draft.hasAlert,
        replay_url: replayUrl,
        replay_duration_min: replayDurationMin,
      })
      .eq("id", publicationId);

    if (error) return { ok: false as const, error: error.message };

    // Une performance renseignée est enregistrée, une performance effacée est
    // supprimée : pas de zéro fantôme dans les séries.
    const provided = PORTFOLIO_KEYS.filter(
      (key) => typeof draft.returns[key] === "number"
    );
    const cleared = PORTFOLIO_KEYS.filter(
      (key) => typeof draft.returns[key] !== "number"
    );

    if (provided.length) {
      const { error: perfError } = await supabase
        .from("plt_publication_perf")
        .upsert(
          provided.map((key) => ({
            publication_id: publicationId,
            portfolio_key: key,
            return_pct: draft.returns[key] as number,
          }))
        );
      if (perfError) return { ok: false as const, error: perfError.message };
    }

    if (cleared.length) {
      await supabase
        .from("plt_publication_perf")
        .delete()
        .eq("publication_id", publicationId)
        .in("portfolio_key", cleared);
    }

    revalidatePath("/");
    return { ok: true as const, message: "Brouillon enregistré." };
  });

/* ------------------------------------------------------------------ */
/* Publication                                                         */
/* ------------------------------------------------------------------ */

export const publishMonth = async (
  draft: PublicationDraft
): Promise<ActionResult> =>
  guard(async () => {
    const saved = await savePublication(draft);
    if (!saved.ok) return saved;

    const supabase = createSupabaseAdminClient();
    const publicationId = await ensurePublication(draft.month);

    const { count } = await supabase
      .from("plt_publication_report")
      .select("portfolio_key", { count: "exact", head: true })
      .eq("publication_id", publicationId);

    if (!count) {
      return {
        ok: false as const,
        error: "Chargez au moins un rapport avant de publier ce mois.",
      };
    }

    const { error } = await supabase
      .from("plt_publication")
      .update({ published_at: new Date().toISOString() })
      .eq("id", publicationId);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: `Publication de ${draft.month} en ligne.` };
  });

export const unpublishMonth = async (month: string): Promise<ActionResult> =>
  guard(async () => {
    const supabase = createSupabaseAdminClient();

    const { error } = await supabase
      .from("plt_publication")
      .update({ published_at: null })
      .eq("month", `${month}-01`);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Publication retirée de l'espace client." };
  });
