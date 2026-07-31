"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getSiteUrl } from "@/lib/siteUrl";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { routes } from "@/lib/routes";

export type AuthResult = { error: string } | null;

/** Messages Supabase (anglais, techniques) → messages lisibles par un client. */
const humanize = (message: string) => {
  const known: Record<string, string> = {
    "Invalid login credentials": "Adresse e-mail ou mot de passe incorrect.",
    "Email not confirmed":
      "Cette adresse n'a pas encore été confirmée. Ouvrez le lien reçu par e-mail.",
    "New password should be different from the old password.":
      "Le nouveau mot de passe doit être différent de l'ancien.",
    "Auth session missing!":
      "Le lien a expiré. Demandez un nouvel envoi à l'équipe ParlonsLongTerme.",
  };
  return known[message] ?? message;
};

export const signIn = async (
  email: string,
  password: string
): Promise<AuthResult> => {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return { error: humanize(error.message) };

  revalidatePath("/", "layout");
  return null;
};

export const signOut = async () => {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect(routes.login);
};

/** Définition du mot de passe après invitation ou réinitialisation. */
export const updatePassword = async (password: string): Promise<AuthResult> => {
  if (password.length < 10) {
    return { error: "Le mot de passe doit contenir au moins 10 caractères." };
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error) return { error: humanize(error.message) };

  revalidatePath("/", "layout");
  return null;
};

/** Envoi d'un lien de réinitialisation (demandé depuis l'écran de connexion). */
export const requestPasswordReset = async (
  email: string
): Promise<AuthResult> => {
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${getSiteUrl()}${routes.authConfirm}?next=${routes.authReset}`,
  });

  if (error) return { error: humanize(error.message) };
  return null;
};
