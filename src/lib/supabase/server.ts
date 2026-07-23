import "server-only";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { requireSupabaseConfig } from "./config";

/**
 * Client Supabase pour Server Components, Server Actions et Route Handlers.
 * Toujours en créer un par requête — ne jamais le mettre en cache module.
 */
export const createSupabaseServerClient = () => {
  const { url, anonKey } = requireSupabaseConfig();
  const cookieStore = cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Un Server Component ne peut pas écrire de cookie : le rafraîchisse-
          // ment de session est assuré par le middleware.
        }
      },
    },
  });
};
