/**
 * Variables d'environnement Supabase, lues au plus tard (jamais au chargement
 * du module) : le build Next évalue les modules sans que l'environnement soit
 * nécessairement renseigné.
 */

/**
 * Le dashboard expose plusieurs URL voisines : la *Project URL* attendue ici,
 * mais aussi les points d'entrée REST / Auth / Storage. Copier l'une de ces
 * dernières est une erreur banale, sans ambiguïté — on la corrige.
 */
export const normalizeSupabaseUrl = (value: string) =>
  value.trim().replace(/\/+$/, "").replace(/\/(rest|auth|storage)\/v1$/, "");

export const SUPABASE_URL = () =>
  normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "");

export const SUPABASE_ANON_KEY = () =>
  (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

/**
 * Une clé collée dans le champ URL est une erreur de configuration fréquente :
 * on la détecte ici plutôt que de laisser `createClient` lever à chaque requête.
 */
const isValidUrl = (value: string) => {
  try {
    const { protocol } = new URL(value);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
};

let warnedInvalid = false;

/** Tant que ce n'est pas vrai, l'application tourne sans authentification. */
export const isSupabaseConfigured = () => {
  const url = SUPABASE_URL();
  const anonKey = SUPABASE_ANON_KEY();

  if (!url || !anonKey) return false;

  if (!isValidUrl(url)) {
    if (!warnedInvalid) {
      warnedInvalid = true;
      console.error(
        "[PLT] NEXT_PUBLIC_SUPABASE_URL n'est pas une URL valide — attendu « https://<ref>.supabase.co » (Project Settings → API → Project URL)."
      );
    }
    return false;
  }

  return true;
};

export const requireSupabaseConfig = () => {
  if (!isSupabaseConfigured()) {
    throw new Error(
      "Supabase n'est pas configuré : renseignez NEXT_PUBLIC_SUPABASE_URL (https://<ref>.supabase.co) et NEXT_PUBLIC_SUPABASE_ANON_KEY (voir .env.example)."
    );
  }

  return { url: SUPABASE_URL(), anonKey: SUPABASE_ANON_KEY() };
};
