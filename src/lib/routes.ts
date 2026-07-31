/**
 * Plan de routage du domaine.
 *
 * La racine (`/`) est occupée par le site vitrine « Parlons Long Terme » ;
 * l'espace client vit sous `/insider`. Le préfixe est déclaré une seule fois
 * ici pour qu'un déplacement futur ne se joue pas à coups de chaînes
 * littérales dispersées dans les redirections, les onglets et les e-mails.
 */
export const INSIDER_BASE = "/insider";

/** Sous-domaine historique de l'application, redirigé vers `/insider`. */
export const LEGACY_INSIDER_HOST = "insider.parlons-long-terme.com";

/** Domaine canonique du site. */
export const SITE_HOST = "www.parlons-long-terme.com";

export const routes = {
  /** Site vitrine */
  site: "/",

  /** Espace client — allocation & portefeuilles */
  insider: INSIDER_BASE,
  performances: `${INSIDER_BASE}/performances`,
  review: `${INSIDER_BASE}/review`,
  annual: `${INSIDER_BASE}/revue-annuelle`,
  backoffice: `${INSIDER_BASE}/backoffice`,
  config: `${INSIDER_BASE}/config`,

  /** Authentification */
  login: `${INSIDER_BASE}/login`,
  authConfirm: `${INSIDER_BASE}/auth/confirm`,
  authReset: `${INSIDER_BASE}/auth/reset`,
  setPassword: `${INSIDER_BASE}/auth/set-password`,
} as const;

/** Préfixes de l'espace client accessibles sans session. */
export const PUBLIC_INSIDER_PREFIXES = [
  routes.login,
  `${INSIDER_BASE}/auth`,
] as const;
