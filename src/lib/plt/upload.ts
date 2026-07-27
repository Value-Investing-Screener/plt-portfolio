import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  DOCUMENTS_BUCKET,
  MAX_DOCUMENT_BYTES,
  MAX_DOCUMENT_LABEL,
} from "./constants";

/**
 * Téléverse un document directement du navigateur vers Supabase Storage, via
 * une URL signée obtenue du serveur.
 *
 * Le fichier ne transite pas par la fonction Vercel — ce qui contourne la
 * limite de taille du corps de requête des fonctions (les gros PDF échouaient
 * sinon). Renvoie un message d'erreur lisible, ou `null` en cas de succès.
 */
export const uploadToSignedUrl = async (
  path: string,
  token: string,
  file: File
): Promise<string | null> => {
  const supabase = createSupabaseBrowserClient();

  const { error } = await supabase.storage
    .from(DOCUMENTS_BUCKET)
    .uploadToSignedUrl(path, token, file, { contentType: "application/pdf" });

  if (error) {
    return `Échec du transfert : ${error.message}`;
  }
  return null;
};

/** Validation locale avant transfert (taille + type). */
export const validateDocument = (file: File): string | null => {
  if (file.type && file.type !== "application/pdf") {
    return "Le fichier doit être un PDF.";
  }
  if (file.size > MAX_DOCUMENT_BYTES) {
    return `Le fichier fait ${(file.size / 1024 / 1024).toLocaleString("fr-FR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })} Mo — maximum ${MAX_DOCUMENT_LABEL}.`;
  }
  return null;
};
