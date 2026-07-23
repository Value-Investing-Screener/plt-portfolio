import { sum, uniq } from "lodash";

import { convertCurrency, normalizeCurrencyCode } from "@/converter";
import type { PortfolioAllocation } from "@/database/getPortfolios";
import { PALETTE } from "@/design/tokens";
import { continentLabel, countryLabel } from "@/lib/countries";

export type Rates = { [currency: string]: number };

/** Une ligne de portefeuille, convertie et valorisée. */
export type Holding = {
  allocation: number;
  name: string;
  ticker: string;
  currency: string;
  sector: string;
  countryCode: string;
  continentCode: string;
  marketCapSize: string;
  dividendYieldTTM: number;
  stockPrice: number;
  /** Montant investi dans la devise de référence choisie par l'utilisateur */
  shareInChosenCurrency: number;
  /** Montant investi dans la devise de cotation du titre */
  shareInStockCurrency: number;
  /** Nombre de titres entiers achetables (null si le cours est inconnu / nul) */
  nbStocks: number | null;
};

/**
 * Valorise les lignes d'un portefeuille modèle pour un capital, une devise de
 * référence et une exposition donnés. (Logique historique de l'application.)
 */
export const getCompaniesWithConversions = (
  capital: number,
  currency: string,
  portfolioPercentage: number,
  rates: Rates,
  companies: PortfolioAllocation[]
): Holding[] =>
  companies.map((company) => {
    const shareInChosenCurrency =
      (((capital * company.allocation) / 100) * portfolioPercentage) / 100;
    const shareInStockCurrency = convertCurrency({
      from: currency,
      to: company.currency!,
      amount: shareInChosenCurrency,
      rates,
    });
    const stockPrice = company.stockPrice ?? 0;

    return {
      allocation: company.allocation,
      name: company.name || "",
      ticker: company.ticker,
      currency: company.currency || "",
      sector: company.sector || "",
      countryCode: company.countryCode || "",
      continentCode: company.continentCode || "",
      marketCapSize: company.marketCapSize || "",
      dividendYieldTTM: company.dividendYieldTTM || 0,
      stockPrice,
      shareInChosenCurrency,
      shareInStockCurrency,
      nbStocks:
        stockPrice > 0 ? Math.floor(shareInStockCurrency / stockPrice) : null,
    };
  });

/** Rendement dividende moyen pondéré du portefeuille (en %). */
export const averageDividend = (companies: Holding[]) =>
  sum(
    companies.map(
      ({ dividendYieldTTM, allocation }) => dividendYieldTTM * allocation
    )
  ) / 100;

/* ------------------------------------------------------------------ */
/* Agrégations pour les graphiques                                     */
/* ------------------------------------------------------------------ */

export type Slice = { label: string; pct: number };

/** Agrège les allocations par clé et renvoie des parts en % du portefeuille. */
export const aggregate = (
  companies: Holding[],
  getKey: (c: Holding) => string
): Slice[] => {
  const buckets = new Map<string, number>();
  let total = 0;

  companies.forEach((company) => {
    const key = getKey(company) || "N.C.";
    buckets.set(key, (buckets.get(key) ?? 0) + company.allocation);
    total += company.allocation;
  });

  return Array.from(buckets, ([label, weight]) => ({
    label,
    pct: total ? (weight / total) * 100 : 0,
  })).sort((a, b) => b.pct - a.pct);
};

const MARKET_CAP_LABELS: Record<string, string> = {
  large: "Grandes capitalisations",
  medium: "Moyennes capitalisations",
  small: "Petites capitalisations",
};

/** « Real_Estate » → « Real Estate » (les secteurs arrivent en snake_case). */
export const sectorLabel = (sector?: string | null) =>
  sector ? sector.replace(/_/g, " ") : "N.C.";

export const bySector = (companies: Holding[]) =>
  aggregate(companies, (c) => sectorLabel(c.sector));

export const byCountry = (companies: Holding[]) =>
  aggregate(companies, (c) => countryLabel(c.countryCode));

export const byContinent = (companies: Holding[]) =>
  aggregate(companies, (c) => continentLabel(c.continentCode));

export const byMarketCap = (companies: Holding[]) =>
  aggregate(companies, (c) => MARKET_CAP_LABELS[c.marketCapSize] ?? "N.C.");

/* ------------------------------------------------------------------ */
/* Géométrie des donuts                                                */
/* ------------------------------------------------------------------ */

/** Rayon et circonférence du donut (viewBox 120×120, stroke-width 11). */
export const DONUT_RADIUS = 52;
export const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

export type DonutSegment = Slice & {
  color: string;
  /** `stroke-dasharray` du segment */
  dash: string;
  /** `stroke-dashoffset` du segment */
  offset: number;
  /** largeur en % (rendu « Barres ») */
  width: string;
};

export const toDonut = (slices: Slice[]): DonutSegment[] => {
  let acc = 0;
  return slices.map((slice, i) => {
    const length = (slice.pct / 100) * DONUT_CIRCUMFERENCE;
    const segment: DonutSegment = {
      ...slice,
      color: PALETTE[i % PALETTE.length],
      dash: `${length.toFixed(2)} ${(DONUT_CIRCUMFERENCE - length).toFixed(2)}`,
      offset: Number(((-acc / 100) * DONUT_CIRCUMFERENCE).toFixed(2)),
      width: `${slice.pct.toFixed(2)}%`,
    };
    acc += slice.pct;
    return segment;
  });
};

/* ------------------------------------------------------------------ */
/* Ordres de change                                                    */
/* ------------------------------------------------------------------ */

export type ConversionRow = {
  currency: string;
  /** Montant à obtenir dans la devise locale */
  local: number;
  /** Équivalent dans la devise de référence */
  reference: number;
  /** Poids dans le total à convertir (en %) */
  pct: number;
};

/**
 * Agrège les montants à convertir par devise, sur les trois portefeuilles.
 * Les codes équivalents (GBX / GBp) sont fusionnés : un seul ordre à passer.
 */
export const getConversionRows = (companies: Holding[]): ConversionRow[] => {
  const currencies = uniq(
    companies.map(({ currency }) => normalizeCurrencyCode(currency))
  );

  const rows = currencies.map((currency) => {
    const lines = companies.filter(
      (c) => normalizeCurrencyCode(c.currency) === currency
    );
    return {
      currency,
      local: sum(lines.map(({ shareInStockCurrency }) => shareInStockCurrency)),
      reference: sum(
        lines.map(({ shareInChosenCurrency }) => shareInChosenCurrency)
      ),
      pct: 0,
    };
  });

  const total = sum(rows.map(({ reference }) => reference));

  return rows
    .map((row) => ({
      ...row,
      pct: total ? (row.reference / total) * 100 : 0,
    }))
    .sort((a, b) => b.pct - a.pct);
};
