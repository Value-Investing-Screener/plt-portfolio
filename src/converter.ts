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

  if (from === "GBX") {
    const amountInGBPCurrency = amount * 0.01

    const fromRate = rates["GBP"]
    const toRate = rates[to];

    return (toRate / fromRate) * amountInGBPCurrency;
  }

  if (to === "GBX") {
    const fromRate = rates[from]
    const toRate = rates["GBP"];

    const amountInGBPCurrency = (toRate / fromRate) * amount

    return amountInGBPCurrency / 0.01
  }

  const fromRate = rates[from];
  const toRate = rates[to];

  return (toRate / fromRate) * amount;
};
