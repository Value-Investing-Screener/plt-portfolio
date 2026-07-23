/**
 * Codes désignant le penny britannique (1/100 de livre). Les fournisseurs de
 * données ne s'accordent pas : « GBX » chez les uns, « GBp » chez les autres.
 * Attention, la comparaison ne peut pas être insensible à la casse : « GBP »
 * en capitales désigne la livre, pas le penny.
 */
const PENCE_CODES = new Set(["GBX", "GBx", "gbx", "GBp"]);

const isPence = (currency: string) => PENCE_CODES.has(currency);

/** Devise de cotation effective : le penny se convertit via la livre. */
const majorCurrency = (currency: string) =>
  isPence(currency) ? "GBP" : currency;

/**
 * Code affiché lorsqu'on agrège des montants par devise : « GBX » et « GBp »
 * désignent la même unité, un seul ordre de change est à passer.
 */
export const normalizeCurrencyCode = (currency: string) =>
  isPence(currency) ? "GBX" : currency;

export const convertCurrency = ({
  from,
  to,
  amount,
  rates,
}: {
  from: string;
  to: string;
  amount: number;
  rates: { [currency: string]: number };
}) => {
  const fromRate = rates[majorCurrency(from)];
  const toRate = rates[majorCurrency(to)];

  // Ramené à l'unité principale de la devise source (pence → livres),
  // converti, puis re-décliné dans l'unité de la devise cible.
  const amountInMajorUnit = isPence(from) ? amount * 0.01 : amount;
  const converted = (toRate / fromRate) * amountInMajorUnit;

  return isPence(to) ? converted / 0.01 : converted;
};
