/**
 * Constantes de stockage partagées client / serveur (aucun import serveur ici,
 * ce fichier est importable depuis un composant « use client »).
 */

/**
 * Ancien bucket privé — voir `supabase/migrations/*_plt_publications.sql`.
 * Les documents sont désormais sur Google Drive ; le bucket ne sert plus qu'aux
 * documents chargés avant la migration, tant qu'ils n'ont pas été remplacés.
 */
export const DOCUMENTS_BUCKET = "plt-documents";

/**
 * Lien à ouvrir pour un document : le lien Google Drive tel quel, ou la route
 * qui signe l'URL d'un ancien document du bucket.
 */
export const documentHref = (documentUrl: string) =>
  /^https?:\/\//.test(documentUrl)
    ? documentUrl
    : `/api/documents/${documentUrl}`;
