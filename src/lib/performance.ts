import { colors } from "@/design/tokens";
import {
  fmt,
  monthLabelShort,
  parseMonthKey,
  pct,
  sgn,
  sgn2,
} from "@/lib/format";
import type { PortfolioKey, PortfolioMeta } from "@/lib/portfolios";

/** Capital de référence de la simulation affichée dans l'onglet Performances. */
export const BASE = 1_000_000;

/** Une ligne de performance mensuelle telle que saisie dans le backoffice. */
export type MonthlyReturn = {
  /** « 2026-06 » */
  month: string;
  /** Rendement du mois en %, par portefeuille — 1.45 = +1,45 %. */
  returns: Partial<Record<PortfolioKey, number>>;
};

/* ------------------------------------------------------------------ */
/* Géométrie du graphique (viewBox 1000×380)                           */
/* ------------------------------------------------------------------ */

const PAD_LEFT = 78;
const PAD_TOP = 24;
const PLOT_W = 804;
const PLOT_H = 314;

const previousMonthKey = (monthKey: string) => {
  const { year, monthIndex } = parseMonthKey(monthKey);
  const date = new Date(Date.UTC(year, monthIndex - 1, 1));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

export type PerfSeries = {
  key: PortfolioKey;
  name: string;
  color: string;
  values: number[];
  points: string;
  endX: number;
  endLabelX: number;
  endY: number;
  endValue: number;
  endValueStr: string;
  endValueShort: string;
  returnStr: string;
  returnColor: string;
  cagrStr: string;
};

export type YearRow = {
  label: string;
  bars: {
    key: PortfolioKey;
    name: string;
    color: string;
    change: number;
    str: string;
    height: string;
  }[];
};

export type Performance = {
  /** Nombre de mois de performance réellement publiés. */
  months: number;
  firstMonth: string;
  lastMonth: string;
  monthLabels: string[];
  series: PerfSeries[];
  monthlyRows: { label: string; cells: { str: string; color: string }[] }[];
  yearRows: YearRow[];
  metricsRows: { label: string; cells: { str: string; color: string }[] }[];
  chartGeometry: {
    left: number;
    right: number;
    baselineY: number;
    yTicks: { y: number; label: string }[];
    xTicks: { x: number; label: string }[];
  };
};

const millions = (value: number) =>
  `${(value / 1e6).toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} M€`;

const signedCell = (value: number) => ({
  str: sgn(value),
  color: value >= 0 ? colors.positive : colors.negative,
});

/** Deux décimales — utilisé pour le tableau des performances mensuelles. */
const signedCell2 = (value: number) => ({
  str: sgn2(value),
  color: value >= 0 ? colors.positive : colors.negative,
});

/**
 * Transforme les performances mensuelles saisies au backoffice en tout ce
 * qu'affiche l'onglet Performances : courbes, tableau mensuel, barres par
 * année civile et indicateurs de risque.
 *
 * Renvoie `null` tant qu'il n'y a pas au moins deux mois publiés — une courbe
 * à un seul point n'a rien à montrer.
 *
 * Un mois sans valeur pour un portefeuille est compté comme 0 % : la série
 * reste continue plutôt que de créer un trou.
 */
export const buildPerformance = (
  history: MonthlyReturn[],
  portfolios: PortfolioMeta[]
): Performance | null => {
  const months = [...history].sort((a, b) => a.month.localeCompare(b.month));
  if (months.length < 2 || portfolios.length === 0) return null;

  const pointCount = months.length + 1;

  // Le point de départ précède le premier mois publié : la courbe part de la
  // base avant d'encaisser la première performance.
  const monthLabels = [
    monthLabelShort(previousMonthKey(months[0].month)),
    ...months.map((entry) => monthLabelShort(entry.month)),
  ];

  const raw = portfolios.map((portfolio) => {
    const values = [BASE];
    months.forEach((entry, index) => {
      const change = entry.returns[portfolio.key] ?? 0;
      values.push(values[index] * (1 + change / 100));
    });
    return { portfolio, values };
  });

  const allValues = raw.flatMap((serie) => serie.values);
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  // Une série parfaitement plate donnerait une échelle nulle.
  const pad = (max - min || max * 0.02 || 1) * 0.08;
  const yMin = min - pad;
  const yMax = max + pad;

  const px = (index: number) =>
    PAD_LEFT + index * (PLOT_W / Math.max(1, pointCount - 1));
  const py = (value: number) =>
    PAD_TOP + (1 - (value - yMin) / (yMax - yMin)) * PLOT_H;

  const series: PerfSeries[] = raw.map(({ portfolio, values }) => {
    const end = values[values.length - 1];
    const totalReturn = end / BASE - 1;
    const cagr = Math.pow(end / BASE, 12 / months.length) - 1;
    const endX = px(pointCount - 1);

    return {
      key: portfolio.key,
      name: portfolio.name,
      color: portfolio.color,
      values,
      points: values
        .map((value, index) => `${px(index).toFixed(1)},${py(value).toFixed(1)}`)
        .join(" "),
      endX: Number(endX.toFixed(1)),
      endLabelX: Number((endX + 8).toFixed(1)),
      endY: Number(py(end).toFixed(1)),
      endValue: end,
      endValueStr: `${fmt(end)} €`,
      endValueShort: millions(end),
      returnStr: sgn(totalReturn),
      returnColor: totalReturn >= 0 ? colors.positive : colors.negative,
      cagrStr: sgn(cagr),
    };
  });

  /* Tableau mensuel — du plus récent au plus ancien. */
  const monthlyRows = months
    .map((entry) => ({
      label: monthLabelShort(entry.month),
      cells: portfolios.map((portfolio) =>
        signedCell2((entry.returns[portfolio.key] ?? 0) / 100)
      ),
    }))
    .reverse();

  /* Barres par année civile — les années se déduisent des mois publiés. */
  const years = Array.from(
    new Set(months.map((entry) => parseMonthKey(entry.month).year))
  ).sort();

  const lastYear = years[years.length - 1];

  const rawYears = years.map((year) => {
    const inYear = months.filter(
      (entry) => parseMonthKey(entry.month).year === year
    );
    const partial = inYear.length < 12 && year === lastYear;

    return {
      label: partial ? `${year} · YTD` : String(year),
      bars: portfolios.map((portfolio) => {
        const change =
          inYear.reduce(
            (cumulative, entry) =>
              cumulative * (1 + (entry.returns[portfolio.key] ?? 0) / 100),
            1
          ) - 1;

        return {
          key: portfolio.key,
          name: portfolio.name,
          color: portfolio.color,
          change,
          str: sgn(change),
        };
      }),
    };
  });

  const maxAbsChange = Math.max(
    ...rawYears.flatMap((year) => year.bars.map((bar) => Math.abs(bar.change))),
    0
  );

  const yearRows: YearRow[] = rawYears.map((year) => ({
    ...year,
    bars: year.bars.map((bar) => ({
      ...bar,
      height: `${(maxAbsChange
        ? Math.max(3, (Math.abs(bar.change) / maxAbsChange) * 100)
        : 0
      ).toFixed(1)}%`,
    })),
  }));

  /* Indicateurs de risque & performance */
  const stats = raw.map(({ values }) => {
    const monthly = values.slice(1).map((value, i) => value / values[i] - 1);
    const mean = monthly.reduce((a, b) => a + b, 0) / monthly.length;
    const volatility =
      Math.sqrt(
        monthly.reduce((a, b) => a + (b - mean) ** 2, 0) / monthly.length
      ) * Math.sqrt(12);

    let peak = values[0];
    let drawdown = 0;
    values.forEach((value) => {
      if (value > peak) peak = value;
      const gap = (value - peak) / peak;
      if (gap < drawdown) drawdown = gap;
    });

    const end = values[values.length - 1];

    return {
      total: end / BASE - 1,
      cagr: Math.pow(end / BASE, 12 / months.length) - 1,
      volatility,
      drawdown,
      best: Math.max(...monthly),
      worst: Math.min(...monthly),
    };
  });

  const metricsRows = [
    {
      label: "Performance totale",
      cells: stats.map((s) => signedCell(s.total)),
    },
    {
      label: "Performance annualisée",
      cells: stats.map((s) => signedCell(s.cagr)),
    },
    {
      label: "Volatilité annualisée",
      cells: stats.map((s) => ({
        str: pct(s.volatility * 100),
        color: colors.text2,
      })),
    },
    {
      label: "Perte maximale",
      cells: stats.map((s) => ({ str: sgn(s.drawdown), color: colors.negative })),
    },
    {
      label: "Meilleur mois",
      cells: stats.map((s) => ({ str: sgn(s.best), color: colors.positive })),
    },
    { label: "Pire mois", cells: stats.map((s) => signedCell(s.worst)) },
  ];

  /* Repères du graphique */
  const yTicks = Array.from({ length: 5 }, (_, i) => {
    const value = yMax - ((yMax - yMin) * i) / 4;
    return { y: Number(py(value).toFixed(1)), label: millions(value) };
  });

  // Une graduation tous les ~6 points, sans jamais dépasser 8 étiquettes.
  const step = Math.max(1, Math.ceil(pointCount / 7));
  const xTicks = Array.from(
    { length: Math.ceil(pointCount / step) },
    (_, k) => ({
      x: Number(px(k * step).toFixed(1)),
      label: monthLabels[k * step],
    })
  );

  return {
    months: months.length,
    firstMonth: months[0].month,
    lastMonth: months[months.length - 1].month,
    monthLabels,
    series,
    monthlyRows,
    yearRows,
    metricsRows,
    chartGeometry: {
      left: PAD_LEFT,
      right: PAD_LEFT + PLOT_W,
      baselineY: Number(py(BASE).toFixed(1)),
      yTicks,
      xTicks,
    },
  };
};
