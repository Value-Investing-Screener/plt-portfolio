"use server";

import { requireAdmin } from "@/lib/auth";
import { getSiteUrl } from "@/lib/siteUrl";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { ActionResult } from "./publications";
import { routes } from "@/lib/routes";

/** Durée de validité d'un lien de définition de mot de passe. */
const VALIDITY_HOURS = 48;

export type ResetLink = {
  url: string;
  /** ISO — fin de validité, affichée dans la modale. */
  expiresAt: string;
  validityHours: number;
};

export type ResetLinkResult =
  | { ok: true; link: ResetLink }
  | { ok: false; error: string };

/**
 * Génère un lien de définition de mot de passe à usage unique, valable 48 h.
 *
 * L'administrateur le remet lui-même au client — aucun e-mail n'est envoyé.
 * Le jeton est un UUID stocké côté serveur ; il ne transite jamais par une
 * table lisible depuis le navigateur (RLS sans politique).
 */
export const createPasswordResetLink = async (
  memberId: string
): Promise<ResetLinkResult> => {
  try {
    await requireAdmin();

    const supabase = createSupabaseAdminClient();

    const { data: member, error: memberError } = await supabase
      .from("plt_member")
      .select("id, email")
      .eq("id", memberId)
      .maybeSingle();

    if (memberError) return { ok: false, error: memberError.message };
    if (!member) return { ok: false, error: "Contact introuvable." };

    const expiresAt = new Date(
      Date.now() + VALIDITY_HOURS * 60 * 60 * 1000
    ).toISOString();

    // Un seul lien actif à la fois : les jetons non utilisés du contact sont
    // périmés, pour qu'un ancien lien ne circule plus.
    await supabase
      .from("plt_password_reset_token")
      .update({ used_at: new Date().toISOString() })
      .eq("member_id", memberId)
      .is("used_at", null);

    const { data, error } = await supabase
      .from("plt_password_reset_token")
      .insert({ member_id: memberId, email: member.email, expires_at: expiresAt })
      .select("token")
      .single();

    if (error) return { ok: false, error: error.message };

    return {
      ok: true,
      link: {
        url: `${getSiteUrl()}${routes.setPassword}?token=${data.token}`,
        expiresAt,
        validityHours: VALIDITY_HOURS,
      },
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Action impossible.",
    };
  }
};

export type TokenCheck =
  | { valid: true; email: string }
  | { valid: false; reason: "unknown" | "used" | "expired" };

/** Valide un jeton sans le consommer — pour l'affichage de la page. */
export const inspectPasswordResetToken = async (
  token: string
): Promise<TokenCheck> => {
  const supabase = createSupabaseAdminClient();

  const { data } = await supabase
    .from("plt_password_reset_token")
    .select("email, expires_at, used_at")
    .eq("token", token)
    .maybeSingle();

  if (!data) return { valid: false, reason: "unknown" };
  if (data.used_at) return { valid: false, reason: "used" };
  if (new Date(data.expires_at).getTime() < Date.now()) {
    return { valid: false, reason: "expired" };
  }

  return { valid: true, email: data.email };
};

/**
 * Consomme le jeton et définit le mot de passe. La validité est revérifiée ici :
 * la vérification d'affichage ne fait pas foi.
 */
export const setPasswordWithToken = async (
  token: string,
  password: string
): Promise<ActionResult> => {
  if (password.length < 10) {
    return {
      ok: false,
      error: "Le mot de passe doit contenir au moins 10 caractères.",
    };
  }

  const supabase = createSupabaseAdminClient();

  const { data: row } = await supabase
    .from("plt_password_reset_token")
    .select("member_id, expires_at, used_at")
    .eq("token", token)
    .maybeSingle();

  if (!row || row.used_at) {
    return { ok: false, error: "Ce lien n'est plus valide." };
  }
  if (new Date(row.expires_at).getTime() < Date.now()) {
    return { ok: false, error: "Ce lien a expiré. Demandez-en un nouveau." };
  }

  const { error: updateError } = await supabase.auth.admin.updateUserById(
    row.member_id,
    { password }
  );

  if (updateError) return { ok: false, error: updateError.message };

  await supabase
    .from("plt_password_reset_token")
    .update({ used_at: new Date().toISOString() })
    .eq("token", token);

  return { ok: true, message: "Mot de passe défini." };
};
