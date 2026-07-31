import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { INSIDER_BASE, PUBLIC_INSIDER_PREFIXES, routes } from "@/lib/routes";
import {
  isSupabaseConfigured,
  SUPABASE_ANON_KEY,
  SUPABASE_URL,
} from "@/lib/supabase/config";

/**
 * Routes de l'espace client accessibles sans session (connexion, liens
 * d'invitation et de réinitialisation).
 */
const isPublic = (pathname: string) =>
  PUBLIC_INSIDER_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isSupabaseConfigured()) {
    // En production, mieux vaut refuser que servir un espace « confidentiel »
    // sans authentification. En développement on laisse passer pour pouvoir
    // travailler l'interface avant d'avoir créé le projet Supabase.
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Supabase n'est pas configuré.", { status: 503 });
    }
    return NextResponse.next();
  }

  // `response` est réassigné par `setAll` lorsqu'un token est rafraîchi : les
  // cookies mis à jour doivent repartir avec la réponse.
  let response = NextResponse.next({ request });

  const supabase = createServerClient(SUPABASE_URL(), SUPABASE_ANON_KEY(), {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user || isPublic(pathname)) return response;

  // Les appels de données répondent en JSON : une redirection HTML casserait
  // le client react-query.
  if (pathname.startsWith("/api")) {
    return NextResponse.json({ error: "Session requise." }, { status: 401 });
  }

  const login = request.nextUrl.clone();
  login.pathname = routes.login;
  login.search = "";
  if (pathname !== INSIDER_BASE) login.searchParams.set("suite", pathname);

  return NextResponse.redirect(login);
}

export const config = {
  /*
   * Seuls l'espace client et l'API sont protégés : le site vitrine occupe la
   * racine du domaine et doit rester public — et statique, ce qui suppose que
   * le middleware ne s'exécute pas dessus.
   */
  matcher: ["/insider/:path*", "/api/:path*"],
};
