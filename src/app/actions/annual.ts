"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth";
import { DOCUMENTS_BUCKET, resolveDriveDocument } from "@/lib/plt/documents";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { ActionResult } from "./publications";

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

/** Enregistre le lien Google Drive de la revue (taille + pages lues sur Drive). */
export const registerAnnualReview = async (
  yearValue: string | number,
  driveUrl: string
): Promise<ActionResult> =>
  guard(async () => {
    const year = parseYear(yearValue);
    if (!year) return { ok: false as const, error: "Exercice invalide." };

    const resolved = await resolveDriveDocument(driveUrl);
    if (!resolved.ok) return resolved;
    const { document } = resolved;

    await ensureAnnualReview(year);

    const { error } = await createSupabaseAdminClient()
      .from("plt_annual_review")
      .update({
        document_url: document.url,
        file_size_bytes: document.sizeBytes,
        page_count: document.pageCount,
      })
      .eq("year", year);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: `Revue ${year} enregistrée.` };
  });

export const removeAnnualReviewFile = async (
  year: string | number
): Promise<ActionResult> =>
  guard(async () => {
    const parsed = parseYear(year);
    if (!parsed) return { ok: false as const, error: "Exercice invalide." };

    const supabase = createSupabaseAdminClient();

    // Libère l'éventuel fichier chargé avant le passage à Google Drive.
    await supabase.storage
      .from(DOCUMENTS_BUCKET)
      .remove([`revues-annuelles/${parsed}.pdf`]);

    const { error } = await supabase
      .from("plt_annual_review")
      .update({ document_url: null, file_size_bytes: null, page_count: null })
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
