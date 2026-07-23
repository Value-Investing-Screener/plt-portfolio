import { PORTFOLIO_COLORS } from "@/design/tokens";

/** Les trois portefeuilles modèles, dans leur ordre d'affichage. */
export const PORTFOLIO_KEYS = ["efficient", "dividende", "antifragile"] as const;

export type PortfolioKey = (typeof PORTFOLIO_KEYS)[number];

export type PortfolioMeta = {
  key: PortfolioKey;
  name: string;
  tagline: string;
  /** Couleur identitaire — design, pas donnée : elle vient des tokens. */
  color: string;
  position: number;
  /** Portefeuille correspondant dans le Hasura Value Investing Screener. */
  hasuraPortfolioId: number | null;
};

/**
 * Repli utilisé tant que `plt_portfolio` n'est pas lisible (Supabase non
 * configuré). La source de vérité est la table, pas ce tableau.
 */
export const PORTFOLIO_FALLBACK: PortfolioMeta[] = [
  {
    key: "efficient",
    name: "Portefeuille Efficient",
    tagline:
      "Croissance de qualité, valorisation stricte et discipline de sélection.",
    color: PORTFOLIO_COLORS[0],
    position: 1,
    hasuraPortfolioId: null,
  },
  {
    key: "dividende",
    name: "Portefeuille Dividende",
    tagline: "Revenu récurrent, rendement élevé et distributions régulières.",
    color: PORTFOLIO_COLORS[1],
    position: 2,
    hasuraPortfolioId: null,
  },
  {
    key: "antifragile",
    name: "Portefeuille Antifragile",
    tagline: "Résilience, décorrélation et protection en régime de stress.",
    color: PORTFOLIO_COLORS[2],
    position: 3,
    hasuraPortfolioId: null,
  },
];

/** Couleur d'un portefeuille d'après son rang d'affichage. */
export const portfolioColor = (position: number) =>
  PORTFOLIO_COLORS[(position - 1) % PORTFOLIO_COLORS.length];

/**
 * La base stocke les noms courts (« Efficient »). L'espace client les affiche
 * sous leur forme longue (« Portefeuille Efficient »).
 */
export const portfolioDisplayName = (
  name: string | undefined,
  fallback: string
) => {
  const trimmed = name?.trim();
  if (!trimmed) return fallback;
  return /^portefeuille/i.test(trimmed) ? trimmed : `Portefeuille ${trimmed}`;
};

export const REFERENCE_CURRENCIES = ["EUR", "CHF", "USD"] as const;
