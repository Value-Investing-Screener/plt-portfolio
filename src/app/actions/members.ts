"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { ActionResult } from "./publications";

const guard = async <T>(
  run: (adminId: string) => Promise<T>
): Promise<T | { ok: false; error: string }> => {
  try {
    const admin = await requireAdmin();
    return await run(admin.id);
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Action impossible.",
    };
  }
};

const siteUrl = () => process.env.NEXT_PUBLIC_SITE_URL ?? "";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Ajoute un contact : crée le compte Supabase et lui envoie une invitation.
 * Le profil `plt_member` est créé par le trigger `plt_on_auth_user_created`,
 * on ne fait que compléter le nom.
 */
export const inviteMember = async (
  fullName: string,
  email: string
): Promise<ActionResult> =>
  guard(async () => {
    const name = fullName.trim();
    const address = email.trim().toLowerCase();

    if (!name || !address) {
      return { ok: false as const, error: "Nom et e-mail requis." };
    }
    if (!isEmail(address)) {
      return { ok: false as const, error: "Adresse e-mail invalide." };
    }

    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase.auth.admin.inviteUserByEmail(
      address,
      {
        data: { full_name: name },
        redirectTo: `${siteUrl()}/auth/confirm?next=/auth/reset`,
      }
    );

    if (error) {
      return {
        ok: false as const,
        error:
          error.message.includes("already been registered") ||
          error.message.includes("already exists")
            ? "Cette adresse a déjà un accès."
            : error.message,
      };
    }

    if (data.user) {
      await supabase
        .from("plt_member")
        .update({ full_name: name, email: address })
        .eq("id", data.user.id);
    }

    revalidatePath("/");
    return { ok: true as const, message: `Invitation envoyée à ${address}.` };
  });

export const sendPasswordReset = async (
  email: string
): Promise<ActionResult> =>
  guard(async () => {
    const supabase = createSupabaseAdminClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl()}/auth/confirm?next=/auth/reset`,
    });

    if (error) return { ok: false as const, error: error.message };

    return {
      ok: true as const,
      message: `Lien de réinitialisation envoyé à ${email}.`,
    };
  });

/**
 * Désactive un accès sans supprimer le compte : l'historique reste lisible et
 * l'accès peut être rétabli. `plt_is_member()` renvoie alors `false`.
 */
export const setMemberActive = async (
  memberId: string,
  isActive: boolean
): Promise<ActionResult> =>
  guard(async (adminId) => {
    if (memberId === adminId && !isActive) {
      return {
        ok: false as const,
        error: "Vous ne pouvez pas désactiver votre propre accès.",
      };
    }

    const { error } = await createSupabaseAdminClient()
      .from("plt_member")
      .update({ is_active: isActive })
      .eq("id", memberId);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return {
      ok: true as const,
      message: isActive ? "Accès rétabli." : "Accès suspendu.",
    };
  });

/** Suppression définitive du compte et de son profil. */
export const deleteMember = async (memberId: string): Promise<ActionResult> =>
  guard(async (adminId) => {
    if (memberId === adminId) {
      return {
        ok: false as const,
        error: "Vous ne pouvez pas supprimer votre propre compte.",
      };
    }

    const { error } = await createSupabaseAdminClient().auth.admin.deleteUser(
      memberId
    );

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return { ok: true as const, message: "Contact retiré." };
  });

export const setMemberRole = async (
  memberId: string,
  role: "admin" | "user"
): Promise<ActionResult> =>
  guard(async (adminId) => {
    if (memberId === adminId && role !== "admin") {
      return {
        ok: false as const,
        error: "Vous ne pouvez pas retirer votre propre rôle administrateur.",
      };
    }

    const { error } = await createSupabaseAdminClient()
      .from("plt_member")
      .update({ role })
      .eq("id", memberId);

    if (error) return { ok: false as const, error: error.message };

    revalidatePath("/");
    return {
      ok: true as const,
      message:
        role === "admin"
          ? "Rôle administrateur accordé."
          : "Rôle administrateur retiré.",
    };
  });
