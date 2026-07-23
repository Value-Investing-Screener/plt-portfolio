import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Point d'entrée des liens envoyés par e-mail (invitation, réinitialisation).
 *
 * Deux formats coexistent selon le gabarit d'e-mail configuré dans Supabase :
 * - `?token_hash=…&type=invite|recovery` — gabarit recommandé avec `@supabase/ssr`
 * - `?code=…` — flux PKCE par défaut
 *
 * Les deux échangent le jeton contre une session, puis renvoient vers `next`.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const next = searchParams.get("next") ?? "/auth/reset";

  const supabase = createSupabaseServerClient();

  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const code = searchParams.get("code");

  const { error } = tokenHash && type
    ? await supabase.auth.verifyOtp({ type, token_hash: tokenHash })
    : code
    ? await supabase.auth.exchangeCodeForSession(code)
    : { error: { message: "Lien invalide." } };

  if (error) {
    const login = new URL("/login", origin);
    login.searchParams.set("erreur", "lien");
    return NextResponse.redirect(login);
  }

  return NextResponse.redirect(new URL(next, origin));
}
