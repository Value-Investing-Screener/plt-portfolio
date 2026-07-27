/**
 * Constantes de stockage partagées client / serveur (aucun import serveur ici,
 * ce fichier est importable depuis un composant « use client »).
 */

/** Bucket privé — voir `supabase/migrations/*_plt_publications.sql`. */
export const DOCUMENTS_BUCKET = "plt-documents";

/** Taille maximale d'un document téléversé. */
export const MAX_DOCUMENT_BYTES = 50 * 1024 * 1024;

export const MAX_DOCUMENT_LABEL = `${Math.round(
  MAX_DOCUMENT_BYTES / 1024 / 1024
)} Mo`;
