"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth";
import { DOCUMENTS_BUCKET, readDocumentMeta } from "@/lib/plt/documents";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { ActionResult, UploadUrlResult } from "./publications";

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

const parseYear = (value: string | number) => {
  const year = Number(value);
  return Number.isInteger(year) && year >= 2000 && year <= 2100 ? year : null;
};

/** Crée l'exercice s'il n'existe pas, avec des textes par défaut modifiables. */
const ensureAnnualReview = async (year: number) => {
  const supabase = createSupabaseAdminClient();

  const { data: existing } = await supabase
    .from("plt_annual_review")
    .select("year")
    .eq("year", year)
    .maybeSingle();

  if (existing) return;

  const { error } = await supabase.from("plt_annual_review").insert({
    year,
    title: `Revue annuelle ${year}`,
    tag: `Exercice ${year}`,
    blurb:
      "Revue approfondie de chacune des entreprises en portefeuille : thèse d'investissement, résultats et perspectives.",
  });

  if (error) throw new Error(error.message);
};

export const saveAnnualReview = async (draft: {
  year: string | number;
  title: string;
  tag: string;
  blurb: string;
}): Promise<ActionResult> =>
  guard(async () => {
    const year = parseYear(draft.year);
    if (!year) return { ok: false as const, error: "Exercice invalide." };

    await ensureAnnualReview(year);

    const { error } = await createSupabaseAdminClient()
      .from("plt_annual_review")
      .update({
        title: draft.title.trim() || `Revue annuelle ${year}`,
        tag: draft.tag.trim(),
        blurb: draft.blurb.trim(),
      })
      .eq("year", year);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Revue annuelle enregistrée." };
  });

/** URL signée pour téléverser la revue directement du navigateur. */
export const createAnnualUploadUrl = async (
  yearValue: string | number
): Promise<UploadUrlResult> => {
  try {
    await requireAdmin();
    const year = parseYear(yearValue);
    if (!year) return { ok: false, error: "Exercice invalide." };

    await ensureAnnualReview(year);

    const storagePath = `revues-annuelles/${year}.pdf`;
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

/** Enregistre la revue téléversée (taille + pages lues depuis le stockage). */
export const registerAnnualReview = async (
  yearValue: string | number,
  storagePath: string
): Promise<ActionResult> =>
  guard(async () => {
    const year = parseYear(yearValue);
    if (!year) return { ok: false as const, error: "Exercice invalide." };

    const meta = await readDocumentMeta(storagePath);

    const { error } = await createSupabaseAdminClient()
      .from("plt_annual_review")
      .update({
        storage_path: storagePath,
        file_size_bytes: meta.sizeBytes,
        page_count: meta.pageCount,
      })
      .eq("year", year);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: `Revue ${year} chargée.` };
  });

export const removeAnnualReviewFile = async (
  year: string | number
): Promise<ActionResult> =>
  guard(async () => {
    const parsed = parseYear(year);
    if (!parsed) return { ok: false as const, error: "Exercice invalide." };

    const supabase = createSupabaseAdminClient();

    await supabase.storage
      .from(DOCUMENTS_BUCKET)
      .remove([`revues-annuelles/${parsed}.pdf`]);

    const { error } = await supabase
      .from("plt_annual_review")
      .update({ storage_path: null, file_size_bytes: null, page_count: null })
      .eq("year", parsed);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Fichier retiré." };
  });

/**
 * Publier une revue annuelle sans fichier est volontairement permis : c'est
 * ainsi qu'on annonce l'exercice « en préparation » côté client.
 */
export const publishAnnualReview = async (
  year: string | number
): Promise<ActionResult> =>
  guard(async () => {
    const parsed = parseYear(year);
    if (!parsed) return { ok: false as const, error: "Exercice invalide." };

    await ensureAnnualReview(parsed);

    const { error } = await createSupabaseAdminClient()
      .from("plt_annual_review")
      .update({ published_at: new Date().toISOString() })
      .eq("year", parsed);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: `Revue annuelle ${parsed} publiée.` };
  });

export const unpublishAnnualReview = async (
  year: string | number
): Promise<ActionResult> =>
  guard(async () => {
    const parsed = parseYear(year);
    if (!parsed) return { ok: false as const, error: "Exercice invalide." };

    const { error } = await createSupabaseAdminClient()
      .from("plt_annual_review")
      .update({ published_at: null })
      .eq("year", parsed);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Revue retirée de l'espace client." };
  });
