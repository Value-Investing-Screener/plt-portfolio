import "server-only";

import { PDFDocument } from "pdf-lib";

/** Bucket privé — voir `supabase/migrations/*_plt_publications.sql`. */
export const DOCUMENTS_BUCKET = "plt-documents";

export const MAX_DOCUMENT_BYTES = 25 * 1024 * 1024;

export type DocumentUpload = {
  bytes: Uint8Array;
  sizeBytes: number;
  pageCount: number | null;
};

/**
 * Valide un PDF déposé dans le backoffice et en extrait le nombre de pages —
 * affiché tel quel dans l'espace client (« 48 pages · 12,4 Mo »).
 */
export const readPdfUpload = async (
  file: File | null
): Promise<{ upload: DocumentUpload } | { error: string }> => {
  if (!file || file.size === 0) return { error: "Aucun fichier sélectionné." };

  if (file.type && file.type !== "application/pdf") {
    return { error: "Le fichier doit être un PDF." };
  }

  if (file.size > MAX_DOCUMENT_BYTES) {
    return {
      error: `Le fichier dépasse ${Math.round(
        MAX_DOCUMENT_BYTES / 1024 / 1024
      )} Mo.`,
    };
  }

  const bytes = new Uint8Array(await file.arrayBuffer());

  let pageCount: number | null = null;
  try {
    pageCount = (
      await PDFDocument.load(bytes, { updateMetadata: false })
    ).getPageCount();
  } catch {
    // PDF chiffré ou exotique : on stocke quand même, sans le nombre de pages.
    pageCount = null;
  }

  return { upload: { bytes, sizeBytes: file.size, pageCount } };
};
