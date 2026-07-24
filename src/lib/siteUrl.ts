import "server-only";

import { headers } from "next/headers";

/**
 * Origine publique du site, pour les liens envoyés par e-mail.
 *
 * On privilégie l'en-tête réel de la requête : le lien pointe ainsi toujours
 * sur le domaine effectivement visité, même si `NEXT_PUBLIC_SITE_URL` n'est pas
 * renseigné. La variable ne sert que de repli (contextes sans requête HTTP).
 *
 * Un `redirectTo` doit être **absolu** — un chemin relatif est rejeté par
 * Supabase, qui retombe alors sur son « Site URL » et casse le parcours de
 * réinitialisation.
 */
export const getSiteUrl = (): string => {
  const list = headers();
  const host = list.get("x-forwarded-host") ?? list.get("host");

  if (host) {
    const protocol = list.get("x-forwarded-proto") ?? "https";
    return `${protocol}://${host}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
};
