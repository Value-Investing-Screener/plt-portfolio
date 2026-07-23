import "server-only";

import { createClient } from "@supabase/supabase-js";

import { requireSupabaseConfig } from "./config";

/**
 * Client à privilèges (clé `service_role`) : il contourne la RLS.
 *
 * Réservé aux Server Actions du backoffice — invitations, uploads, écritures.
 * **Toujours vérifier le rôle de l'appelant avant de s'en servir** (voir
 * `requireAdmin` dans `src/lib/auth.ts`). Ne jamais l'importer depuis un
 * fichier `"use client"` : `server-only` fait échouer le build le cas échéant.
 */
export const createSupabaseAdminClient = () => {
  const { url } = requireSupabaseConfig();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY manquant : les opérations d'administration sont indisponibles (voir .env.example)."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};
