import { routes } from "@/lib/routes";

/**
 * Destinations des appels à l'action du site vitrine.
 *
 * Réunies ici pour n'avoir qu'un fichier à ouvrir quand une URL change. Les
 * `#` restants sont les liens encore à câbler : PLT Insider et les pages
 * légales.
 */
export const SITE_LINKS = {
  /** Inscription à la newsletter (Mailchimp). */
  newsletter: "https://mailchi.mp/a5c1645c80dd/parlons-long-terme",
  /** « Surperformez en bourse avec les small caps » sur Amazon. */
  book: "https://amzn.eu/d/07ims1Zi",
  screener: "https://www.value-investing-screener.com/",
  familyOffice: "https://www.plt-family-office.com/",
  youtube: "https://www.youtube.com/@parlons-long-terme",

  /** À câbler : page de présentation du mastermind. */
  insider: "#",

  /** Connexion des membres — l'espace client, sous /insider. */
  memberArea: routes.insider,

  terms: "/conditions-utilisation",
  privacy: "/confidentialite",
  legal: "/mentions-legales",
} as const;

/** Ancres internes de la page. */
export const ANCHORS = {
  bio: "presentation",
  level1: "niveau1",
} as const;
