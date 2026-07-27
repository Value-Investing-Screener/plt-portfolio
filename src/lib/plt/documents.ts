import "server-only";

import { PDFDocument } from "pdf-lib";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { DOCUMENTS_BUCKET } from "./constants";

export { DOCUMENTS_BUCKET, MAX_DOCUMENT_BYTES, MAX_DOCUMENT_LABEL } from "./constants";

/**
 * Métadonnées d'un document déjà téléversé dans le bucket : sa taille et son
 * nombre de pages, affichés côté client (« 48 pages · 12,4 Mo »).
 *
 * Le fichier est lu depuis le stockage (téléversé directement par le navigateur
 * pour contourner la limite de corps de requête des fonctions Vercel), donc le
 * serveur ne l'a jamais eu en mémoire au moment de l'upload.
 */
export const readDocumentMeta = async (
  storagePath: string
): Promise<{ sizeBytes: number; pageCount: number | null }> => {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase.storage
    .from(DOCUMENTS_BUCKET)
    .download(storagePath);

  if (error || !data) return { sizeBytes: 0, pageCount: null };

  const bytes = new Uint8Array(await data.arrayBuffer());

  let pageCount: number | null = null;
  try {
    pageCount = (
      await PDFDocument.load(bytes, { updateMetadata: false })
    ).getPageCount();
  } catch {
    // PDF chiffré ou exotique : on garde le fichier, sans le nombre de pages.
    pageCount = null;
  }

  return { sizeBytes: bytes.byteLength, pageCount };
};
