const FR = "fr-FR";

export const MONTHS_SHORT = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

export const MONTHS_FULL = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

/** « 2026-06 » → { year: 2026, monthIndex: 5 }. */
export const parseMonthKey = (monthKey: string) => {
  const [year, month] = monthKey.split("-").map(Number);
  return { year, monthIndex: Math.min(11, Math.max(0, (month || 1) - 1)) };
};

/** « 2026-06 » → « Juin 2026 ». */
export const monthLabelLong = (monthKey: string) => {
  const { year, monthIndex } = parseMonthKey(monthKey);
  return `${MONTHS_FULL[monthIndex]} ${year}`;
};

/** « 2026-06 » → « juin 26 ». */
export const monthLabelShort = (monthKey: string) => {
  const { year, monthIndex } = parseMonthKey(monthKey);
  return `${MONTHS_SHORT[monthIndex]} ${String(year).slice(2)}`;
};

const isNum = (n: unknown): n is number =>
  typeof n === "number" && Number.isFinite(n);

/** Entier formaté à la française — « 1 234 567 ». */
export const fmt = (n: number) => (isNum(n) ? Math.round(n).toLocaleString(FR) : "—");

/** Deux décimales — « 1 234,56 ». */
export const fmt2 = (n: number) =>
  isNum(n)
    ? n.toLocaleString(FR, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : "—";

/** Pourcentage à une décimale — « 12,4 % ». */
export const pct = (n: number) =>
  isNum(n)
    ? n.toLocaleString(FR, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }) + " %"
    : "—";

/** Pourcentage à deux décimales — « 12,45 % ». */
export const pct2 = (n: number) =>
  isNum(n)
    ? n.toLocaleString(FR, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + " %"
    : "—";

/** Pourcentage signé à partir d'un ratio — 0.124 → « +12,4 % ». */
export const sgn = (ratio: number) =>
  isNum(ratio) ? (ratio >= 0 ? "+" : "") + pct(ratio * 100) : "—";

/** Idem, à deux décimales — les performances mensuelles sont trop fines pour une. */
export const sgn2 = (ratio: number) =>
  isNum(ratio) ? (ratio >= 0 ? "+" : "") + pct2(ratio * 100) : "—";

/** Montant + symbole de la devise de référence. */
export const money = (n: number, currency: string) =>
  `${fmt(n)} ${currencySymbol(currency)}`;

export const money2 = (n: number, currency: string) =>
  `${fmt2(n)} ${currencySymbol(currency)}`;

/** « 12,4 Mo » — métadonnée de document. */
export const fileSize = (bytes: number) =>
  isNum(bytes)
    ? `${(bytes / 1024 / 1024).toLocaleString(FR, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })} Mo`
    : "—";

/** « 8 pages · 1,2 Mo », en omettant ce qui manque. */
export const documentMeta = (
  pageCount: number | null,
  bytes: number | null
) =>
  [
    pageCount ? `${pageCount} page${pageCount > 1 ? "s" : ""}` : null,
    bytes ? fileSize(bytes) : null,
  ]
    .filter(Boolean)
    .join(" · ") || "Document PDF";

export const currencySymbol = (currency: string) =>
  ({ EUR: "€", USD: "$", CHF: "CHF", GBP: "£" } as Record<string, string>)[
    currency
  ] ?? currency;
