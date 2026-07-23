import { maxBy } from "lodash";

import { callDatabase } from ".";
import {
  ContinentCode_Enum,
  CountryCode_Enum,
  GetPortfolioQuery,
  MarketCapSize_Enum,
} from "./generated-hasura-types";
import { getPortfoliosQuery } from "./queries";
import { getExtraHoldings } from "@/lib/plt/extraHoldings";

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
  /** Identifiant Hasura, utilisé pour apparier avec `plt_portfolio`. */
  id: number;
  name: string;
  companies: PortfolioAllocation[];
};

/**
 * Dernier cours coté, via EODHD. Un cours nul signifie « pas de cotation »
 * (cas du cash) : la quantité de titres s'affiche alors « — ».
 */
const getStockPrice = async (ticker: string) => {
  const token = process.env.EODHD_API_TOKEN;
  if (!token) {
    console.error("EODHD_API_TOKEN manquant : cours indisponible.");
    return 0;
  }

  try {
    const response = await fetch(
      `https://eodhd.com/api/eod/${ticker}?api_token=${token}&fmt=json`
    );
    const prices = (await response.json()) as {
      [key: string]: number | string;
    }[];
    return (maxBy(prices, "date")?.adjusted_close as number) ?? 0;
  } catch {
    return 0;
  }
};

export const getPortfolios = async (): Promise<Portfolio[]> => {
  const ownerEmail = process.env.PLT_PORTFOLIO_OWNER_EMAIL;

  if (!ownerEmail) {
    throw new Error(
      "PLT_PORTFOLIO_OWNER_EMAIL manquant : impossible d'identifier les portefeuilles modèles côté Hasura."
    );
  }

  const { data } = await callDatabase<{ data: GetPortfolioQuery }>({
    query: getPortfoliosQuery,
    variables: { ownerEmail },
  });

  // Lignes hors référentiel screener (ETF obligataires, cash) : elles vivent
  // dans `plt_extra_holding` et sont réinjectées dans leur portefeuille.
  const groups = await Promise.all(
    (await getExtraHoldings()).map(async (group) => ({
      ...group,
      holdings: await Promise.all(
        group.holdings.map(async (holding) => ({
          ...holding,
          stockPrice:
            holding.stockPrice ?? (await getStockPrice(holding.ticker)),
        }))
      ),
    }))
  );

  return data.portfolio.map((portfolio, index) => {
    // Appariement par identifiant Hasura, avec repli sur l'ordre d'affichage
    // tant que `hasura_portfolio_id` n'est pas renseigné.
    const group =
      groups.find((item) => item.hasuraPortfolioId === portfolio.id) ??
      groups.find((item) => item.position === index + 1);

    const companies = portfolio.portfolioAllocations.map(
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
    );

    return {
      id: portfolio.id,
      name: portfolio.name,
      companies: [...companies, ...(group?.holdings ?? [])],
    };
  });
};
