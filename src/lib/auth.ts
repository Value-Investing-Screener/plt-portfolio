import "server-only";

import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** `admin` : accès au Backoffice. `user` : espace client seul. */
export type MemberRole = "admin" | "user";

export type Member = {
  id: string;
  email: string;
  fullName: string;
  role: MemberRole;
  isActive: boolean;
};

/**
 * Tant que Supabase n'est pas configuré, on ne peut pas authentifier :
 * en développement on rend l'espace complet pour pouvoir travailler l'UI,
 * en production on refuse l'accès.
 */
const DEV_FALLBACK_MEMBER: Member = {
  id: "dev",
  email: "dev@local",
  fullName: "Développement local",
  role: "admin",
  isActive: true,
};

let warned = false;

const warnOnce = () => {
  if (warned) return;
  warned = true;
  console.warn(
    "[PLT] Supabase n'est pas configuré — authentification désactivée (développement uniquement)."
  );
};

/** Membre connecté, ou `null` si la session est absente / le compte désactivé. */
export const getCurrentMember = async (): Promise<Member | null> => {
  if (!isSupabaseConfigured()) {
    if (process.env.NODE_ENV === "production") return null;
    warnOnce();
    return DEV_FALLBACK_MEMBER;
  }

  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("plt_member")
    .select("id, email, full_name, role, is_active")
    .eq("id", user.id)
    .maybeSingle();

  // Compte authentifié mais sans profil (trigger non joué) ou désactivé :
  // pas d'accès, plutôt qu'un accès à moitié valide.
  if (!data || !data.is_active) return null;

  return {
    id: data.id,
    email: data.email,
    fullName: data.full_name,
    role: data.role === "admin" ? "admin" : "user",
    isActive: data.is_active,
  };
};

/** Membre connecté, sinon erreur — pour les Server Actions. */
export const requireMember = async (): Promise<Member> => {
  const member = await getCurrentMember();
  if (!member) throw new Error("Session requise.");
  return member;
};

/** Administrateur connecté, sinon erreur — pour les actions du backoffice. */
export const requireAdmin = async (): Promise<Member> => {
  const member = await requireMember();
  if (member.role !== "admin") throw new Error("Accès administrateur requis.");
  return member;
};
