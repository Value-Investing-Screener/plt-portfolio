import "server-only";

import { PDFDocument } from "pdf-lib";

export { DOCUMENTS_BUCKET } from "./constants";

/** Au-delà, on ne télécharge pas le fichier pour en lire les pages. */
const MAX_INSPECTED_BYTES = 100 * 1024 * 1024;

/**
 * Identifiant d'un fichier Drive, quel que soit le format du lien collé :
 * `/file/d/<id>/view`, `open?id=<id>`, `uc?id=<id>&export=download`…
 */
const driveFileId = (input: string): string | null => {
  let url: URL;
  try {
    url = new URL(input.trim());
  } catch {
    return null;
  }

  if (!/(^|\.)google\.com$/.test(url.hostname)) return null;

  const id =
    url.pathname.match(/\/d\/([\w-]{10,})/)?.[1] ?? url.searchParams.get("id");

  return id && /^[\w-]{10,}$/.test(id) ? id : null;
};

export type DriveDocument = {
  url: string;
  sizeBytes: number | null;
  pageCount: number | null;
};

/**
 * Vérifie un lien de partage Google Drive et en lit la taille et le nombre de
 * pages, affichés côté client (« 48 pages · 12,4 Mo »).
 *
 * Le fichier est téléchargé comme le ferait un membre sans compte Google : s'il
 * n'arrive pas en PDF, c'est qu'il n'est pas partagé « Tous les utilisateurs
 * disposant du lien » — on refuse plutôt que d'afficher un lien mort.
 */
export const resolveDriveDocument = async (
  input: string
): Promise<{ ok: true; document: DriveDocument } | { ok: false; error: string }> => {
  const id = driveFileId(input);
  if (!id) {
    return { ok: false, error: "Lien Google Drive invalide." };
  }

  const url = `https://drive.google.com/file/d/${id}/view`;

  let response: Response;
  try {
    // `confirm=t` saute la page « Virus scan warning » que Drive intercale
    // devant les fichiers de plus de ~100 Mo.
    response = await fetch(
      `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`,
      { cache: "no-store", signal: AbortSignal.timeout(20_000) }
    );
  } catch {
    return { ok: false, error: "Google Drive ne répond pas, réessayez." };
  }

  const inaccessible = {
    ok: false as const,
    error:
      "Fichier inaccessible : vérifiez qu'il s'agit d'un PDF partagé « Tous les utilisateurs disposant du lien ».",
  };

  // Un fichier non partagé revient en page HTML (connexion Google, 404…).
  if (
    !response.ok ||
    response.headers.get("content-type")?.includes("text/html")
  ) {
    await response.body?.cancel();
    return inaccessible;
  }

  const declared = Number(response.headers.get("content-length")) || null;
  if (declared && declared > MAX_INSPECTED_BYTES) {
    await response.body?.cancel();
    return { ok: true, document: { url, sizeBytes: declared, pageCount: null } };
  }

  const bytes = new Uint8Array(await response.arrayBuffer());

  // Drive sert souvent les PDF en `application/octet-stream` : on vérifie la
  // signature du fichier plutôt que l'en-tête.
  if (new TextDecoder().decode(bytes.subarray(0, 5)) !== "%PDF-") {
    return inaccessible;
  }

  let pageCount: number | null = null;
  try {
    pageCount = (
      await PDFDocument.load(bytes, { updateMetadata: false })
    ).getPageCount();
  } catch {
    // PDF chiffré ou exotique : on garde le lien, sans le nombre de pages.
    pageCount = null;
  }

  return {
    ok: true,
    document: { url, sizeBytes: bytes.byteLength, pageCount },
  };
};
