/**
 * Design tokens de l'espace client PLT Insider (dashboard institutionnel dark).
 * Toute valeur de couleur / typo utilisée dans l'UI doit venir d'ici.
 */

export const colors = {
  /** Fond de page */
  bg: "#0E1214",
  /** Barre supérieure, en-têtes de tableaux */
  bar: "#11161A",
  /** Fond des panneaux */
  panel: "#14181B",
  /** Fond des en-têtes de portefeuille */
  panelHead: "#161B1F",

  border: "rgba(255,255,255,0.06)",
  borderStrong: "rgba(255,255,255,0.08)",
  borderRow: "rgba(255,255,255,0.04)",
  borderSoft: "rgba(255,255,255,0.05)",
  borderInput: "rgba(255,255,255,0.1)",

  textHi: "#F2F5F6",
  text: "#E6EAEC",
  textSoft: "#C5CBCF",
  text2: "#B4BBC0",
  text3: "#9BA3A8",
  muted: "#8A9298",
  muted2: "#6B7378",
  faint: "#5A6167",

  accent: "#C08A4E",
  accentHover: "#D9A972",
  amber: "#C9A15E",
  positive: "#6FB58A",
  negative: "#D98080",
} as const;

/**
 * Couleurs identitaires des trois portefeuilles — Efficient · Dividende ·
 * Antifragile. On reste dans la famille cuivre / gris du thème : elles se
 * distinguent par la luminance (clair → foncé) et par la température
 * (chaud → froid), pas par la saturation. Aucune n'est l'accent `#C08A4E`,
 * qui reste réservé au chrome de l'interface.
 */
export const PORTFOLIO_COLORS = ["#D2AE80", "#8A98A0", "#7E8A80"] as const;

/** Mêmes couleurs sur les graphiques de performance — une identité par portefeuille. */
export const PERF_COLORS = PORTFOLIO_COLORS;

/**
 * Rampe catégorielle des graphiques (secteurs, pays, capitalisations).
 *
 * Elle ne sort pas de l'axe cuivre → gris du thème : douze tons désaturés,
 * du sable clair à l'ardoise foncée. La lisibilité vient de l'alternance
 * chaud / froid et clair / foncé — deux segments voisins d'un donut ne
 * partagent donc jamais ni la température ni le niveau de gris. Aucun n'est
 * l'accent `#C08A4E`.
 */
export const PALETTE = [
  "#D9B98C", // sable clair
  "#93A0A8", // gris moyen
  "#B08A5E", // bronze
  "#C6CDD2", // gris clair
  "#8C6B4A", // brun tabac
  "#6B7A83", // ardoise
  "#E3D3B4", // crème
  "#5A686F", // ardoise foncée
  "#A8968A", // taupe
  "#7E8A80", // gris vert
  "#BFB093", // grège
  "#48545B", // gris profond
] as const;

export const MONO = "var(--font-mono), 'IBM Plex Mono', ui-monospace, monospace";
export const SANS = "var(--font-sans), 'IBM Plex Sans', system-ui, sans-serif";

/** Padding horizontal du conteneur principal */
export const GUTTER = "clamp(18px,4vw,56px)";

/** Style commun à tous les panneaux */
export const panel = {
  background: colors.panel,
  border: `1px solid ${colors.border}`,
  borderRadius: 8,
} as const;

/** Libellé de section : 10.5px uppercase très espacé */
export const sectionLabel = {
  fontSize: 10.5,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: colors.muted2,
  fontWeight: 600,
} as const;
