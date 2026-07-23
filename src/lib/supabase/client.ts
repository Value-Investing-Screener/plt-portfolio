import { createBrowserClient } from "@supabase/ssr";

import { requireSupabaseConfig } from "./config";

/** Client Supabase côté navigateur (clé anon, soumis à la RLS). */
export const createSupabaseBrowserClient = () => {
  const { url, anonKey } = requireSupabaseConfig();
  return createBrowserClient(url, anonKey);
};
