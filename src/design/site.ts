/**
 * Design tokens du site vitrine « Parlons Long Terme » (racine du domaine).
 *
 * Volontairement séparés de `tokens.ts`, qui décrit l'espace client PLT
 * Insider : les deux surfaces ne partagent ni la palette, ni la typographie,
 * ni le rythme. Toute valeur employée par les composants de `components/site`
 * doit venir d'ici.
 */

export const site = {
  /** Fonds sombres — du plus profond au plus chaud. */
  ink: "#090807",
  inkSoft: "#0b0908",
  inkCool: "#0c0a08",

  /** Panneaux et aplats sombres. */
  panel: "#211d1a",
  panelDeep: "#171310",

  /** Crème du parcours et blanc des cartes. */
  cream: "#f4efe9",
  white: "#ffffff",

  /** Accent cuivre. */
  accent: "#e8863c",
  accentHover: "#f2a763",
  /** Déclinaison lisible sur fond clair (contraste insuffisant sinon). */
  accentInk: "#c07a34",
  /** Kickers et italiques sur fond sombre. */
  accentWarm: "#c99a6e",
  accentLight: "#e6a468",
  /** Italiques sur fond crème. */
  accentDeep: "#8a5c26",

  /** Texte sur fond sombre. */
  onDark: "#ece7e1",
  onDarkSoft: "#cfc6ba",
  onDarkHi: "#f0e9df",
  onDarkFaint: "#8a7a68",

  /** Texte sur fond clair. */
  onLight: "#171310",
  onLightSoft: "#3a342d",
  onLightBody: "#4a443c",
  onLightMuted: "#5a5148",
  onLightFaint: "#8a8175",

  /** Filets. */
  ruleLight: "#c8bdb0",
  ruleCream: "#cfc4b6",
  ruleDark: "rgba(255,255,255,.2)",
  ruleDarkSoft: "rgba(255,255,255,.14)",
} as const;

/** Dégradés de fond, un par section sombre. */
export const gradients = {
  hero: "radial-gradient(120% 90% at 78% 8%, #3a2c1f 0%, #1b140f 42%, #090807 78%)",
  book: "radial-gradient(120% 120% at 22% 15%, #2f2318 0%, #17110c 55%, #0b0908 100%)",
  level2:
    "radial-gradient(120% 100% at 15% 30%, #2a2018 0%, #16110d 60%, #0c0a08 100%)",
  level4:
    "radial-gradient(130% 110% at 85% 20%, #3a2a1c 0%, #1a130d 55%, #090807 100%)",
} as const;

export const SERIF = "var(--font-serif), 'Cormorant Garamond', Georgia, serif";
export const SITE_SANS = "'Helvetica Neue', Arial, sans-serif";
export const CAPTION = "'Courier New', monospace";

/** Padding horizontal commun aux sections. */
export const SITE_GUTTER = "clamp(24px,6vw,80px)";

/** Kicker : 12px capitales très espacées, cuivre. */
export const kicker = {
  fontSize: 12,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  fontWeight: 600,
} as const;
