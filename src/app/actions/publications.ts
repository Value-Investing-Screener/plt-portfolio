"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth";
import { DOCUMENTS_BUCKET, readPdfUpload } from "@/lib/plt/documents";
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

export const uploadReport = async (
  formData: FormData
): Promise<ActionResult> =>
  guard(async () => {
    const month = String(formData.get("month") ?? "");
    const portfolioKey = String(formData.get("portfolioKey") ?? "");
    const file = formData.get("file");

    if (!MONTH_PATTERN.test(month)) {
      return { ok: false as const, error: "Mois invalide." };
    }
    if (!isPortfolioKey(portfolioKey)) {
      return { ok: false as const, error: "Portefeuille inconnu." };
    }

    const read = await readPdfUpload(file instanceof File ? file : null);
    if ("error" in read) return { ok: false as const, error: read.error };

    const supabase = createSupabaseAdminClient();
    const publicationId = await ensurePublication(month);
    const storagePath = `publications/${month}/${portfolioKey}.pdf`;

    const { error: uploadError } = await supabase.storage
      .from(DOCUMENTS_BUCKET)
      .upload(storagePath, read.upload.bytes, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) {
      return { ok: false as const, error: uploadError.message };
    }

    const { error } = await supabase.from("plt_publication_report").upsert({
      publication_id: publicationId,
      portfolio_key: portfolioKey,
      storage_path: storagePath,
      file_size_bytes: read.upload.sizeBytes,
      page_count: read.upload.pageCount,
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
  replayDurationMin: number | null;
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

    const { error } = await supabase
      .from("plt_publication")
      .update({
        has_alert: draft.hasAlert,
        replay_url: draft.replayUrl?.trim() || null,
        replay_duration_min: draft.replayDurationMin ?? null,
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

/* ------------------------------------------------------------------ */
/* Reprise d'historique                                                */
/* ------------------------------------------------------------------ */

/**
 * Import CSV des performances passées — une ligne par mois :
 *
 *     mois,efficient,dividende,antifragile
 *     2024-01,2.10,1.05,0.80
 *
 * L'en-tête est facultatif. Les mois importés sont publiés directement : ils
 * n'ont ni rapport ni replay, seulement des performances, ce qui suffit à
 * reconstituer les courbes.
 */
export const importPerformanceCsv = async (
  csv: string
): Promise<ActionResult> =>
  guard(async () => {
    const rows = csv
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => line.split(/[,;\t]/).map((cell) => cell.trim()))
      .filter((cells) => MONTH_PATTERN.test(cells[0]));

    if (!rows.length) {
      return {
        ok: false as const,
        error:
          "Aucune ligne exploitable. Format attendu : mois,efficient,dividende,antifragile",
      };
    }

    const supabase = createSupabaseAdminClient();
    let imported = 0;

    for (const cells of rows) {
      const [month, ...values] = cells;
      const publicationId = await ensurePublication(month);

      const perfs = PORTFOLIO_KEYS.map((key, index) => ({
        publication_id: publicationId,
        portfolio_key: key,
        // La virgule décimale est acceptée : les tableurs français l'exportent.
        return_pct: Number(String(values[index] ?? "").replace(",", ".")),
      })).filter((row) => Number.isFinite(row.return_pct));

      if (!perfs.length) continue;

      const { error } = await supabase
        .from("plt_publication_perf")
        .upsert(perfs);
      if (error) return { ok: false as const, error: error.message };

      await supabase
        .from("plt_publication")
        .update({ published_at: new Date().toISOString() })
        .eq("id", publicationId)
        .is("published_at", null);

      imported += 1;
    }

    revalidatePath("/");
    return {
      ok: true as const,
      message: `${imported} mois importé${imported > 1 ? "s" : ""}.`,
    };
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
