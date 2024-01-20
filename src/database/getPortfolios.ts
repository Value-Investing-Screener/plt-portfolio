import { maxBy } from "lodash";
import { callDatabase } from ".";
import {
  ContinentCode_Enum,
  CountryCode_Enum,
  GetPortfolioQuery,
  MarketCapSize_Enum,
} from "./generated-hasura-types";
import { getPortfoliosQuery } from "./queries";

export type PortfolioAllocation = {
  allocation: number;
  name: string | null | undefined;
  ticker: string;
  currency: string | null | undefined;
  sector: string | null | undefined;
  countryCode: CountryCode_Enum | undefined;
  continentCode: ContinentCode_Enum | undefined;
  dividendYieldTTM: number | null | undefined;
  stockPrice?: number | null | undefined;
  marketCapSize?: MarketCapSize_Enum | null | undefined;
};

export type Portfolio = {
  name: string;
  companies: PortfolioAllocation[];
};

const bondsAndCash: PortfolioAllocation[] = [
  {
    allocation: 13.4,
    name: "iShares 3-7 Year Treasury Bond ETF ",
    ticker: "IEI.US",
    currency: "USD",
    sector: "Bonds IT",
    countryCode: "US" as CountryCode_Enum,
    continentCode: "AM" as ContinentCode_Enum,
    dividendYieldTTM: 3.88,
  },
  {
    allocation: 8.93,
    name: "Ishare china bonds",
    ticker: "CBND.SW",
    currency: "USD",
    sector: "Bonds LT",
    countryCode: "CN" as CountryCode_Enum,
    continentCode: "AS" as ContinentCode_Enum,
    dividendYieldTTM: 0,
  },
  {
    allocation: 8.95,
    name: "Cash Franc Suisse",
    ticker: "CHFEUR=X",
    currency: "CHF",
    sector: "Cash",
    countryCode: "CH" as CountryCode_Enum,
    continentCode: "EU" as ContinentCode_Enum,
    dividendYieldTTM: 0,
  },
];

const getStockPrice = async (ticker: string) => {
  if (ticker === "CHFEUR=X") {
    return 0;
  }
  return fetch(
    `https://eodhd.com/api/eod/AAPL?api_token=63a427fee55743.17582228&fmt=json`
  ).then(async (response) => {
    const prices = (await response.json()) as { [key: string]: number | string }[];
    return maxBy(prices, "date")?.adjusted_close as number;
  });
};

export const getPortfolios = async (): Promise<Portfolio[]> => {
  const { data } = await callDatabase<{ data: GetPortfolioQuery }>({
    query: getPortfoliosQuery,
  });
  const otherData = await Promise.all(
    bondsAndCash.map(async (b) => ({
      ...b,
      stockPrice: await getStockPrice(b.ticker),
    }))
  );

  const portfolios = data.portfolio;
  return portfolios.flatMap((portfolio, i) => {
    if (i === 2) {
      return {
        name: portfolio.name,
        companies: [...portfolio.portfolioAllocations.map(
          ({ allocation, company }) => ({
            allocation,
            name: company.name,
            ticker: company.ticker,
            currency: company.currency,
            sector: company.sector,
            countryCode: company.country?.continent?.countryCode,
            continentCode: company.country?.continent?.continentCode,
            dividendYieldTTM: company.dividendYieldTTM,
            stockPrice: company.stockPrice,
            marketCapSize: company.marketCapSize,
          })
        ), ...otherData],
      }
    }
    return {
      name: portfolio.name,
      companies: portfolio.portfolioAllocations.map(
        ({ allocation, company }) => ({
          allocation,
          name: company.name,
          ticker: company.ticker,
          currency: company.currency,
          sector: company.sector,
          countryCode: company.country?.continent?.countryCode,
          continentCode: company.country?.continent?.continentCode,
          dividendYieldTTM: company.dividendYieldTTM,
          stockPrice: company.stockPrice,
          marketCapSize: company.marketCapSize,
        })
      ),
    };
  });
};
