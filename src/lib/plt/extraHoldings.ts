import "server-only";

import type { PortfolioAllocation } from "@/database/getPortfolios";
import type {
  ContinentCode_Enum,
  CountryCode_Enum,
  MarketCapSize_Enum,
} from "@/database/generated-hasura-types";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ExtraHoldingGroup = {
  portfolioKey: string;
  position: number;
  hasuraPortfolioId: number | null;
  holdings: PortfolioAllocation[];
};

/**
 * Lignes qui n'existent pas dans le référentiel du screener — ETF obligataires,
 * cash — regroupées par portefeuille. Un `stockPrice` nul signifie « à
 * interroger auprès d'EODHD » ; 0 signifie « pas de cotation » (cash).
 */
export const getExtraHoldings = async (): Promise<ExtraHoldingGroup[]> => {
  if (!isSupabaseConfigured()) return [];

  const supabase = createSupabaseServerClient();

  const [{ data: portfolios }, { data: holdings }] = await Promise.all([
    supabase
      .from("plt_portfolio")
      .select("key, position, hasura_portfolio_id")
      .order("position"),
    supabase
      .from("plt_extra_holding")
      .select(
        "portfolio_key, name, ticker, currency, sector, country_code, continent_code, allocation, dividend_yield_ttm, market_cap_size, stock_price, position"
      )
      .order("position"),
  ]);

  if (!portfolios?.length) return [];

  return portfolios.map((portfolio) => ({
    portfolioKey: portfolio.key,
    position: portfolio.position,
    hasuraPortfolioId: portfolio.hasura_portfolio_id,
    holdings: (holdings ?? [])
      .filter((holding) => holding.portfolio_key === portfolio.key)
      .map(
        (holding): PortfolioAllocation => ({
          allocation: Number(holding.allocation),
          name: holding.name,
          ticker: holding.ticker,
          currency: holding.currency,
          sector: holding.sector,
          countryCode: (holding.country_code ?? undefined) as
            | CountryCode_Enum
            | undefined,
          continentCode: (holding.continent_code ?? undefined) as
            | ContinentCode_Enum
            | undefined,
          dividendYieldTTM: Number(holding.dividend_yield_ttm),
          stockPrice:
            holding.stock_price === null ? null : Number(holding.stock_price),
          marketCapSize: (holding.market_cap_size ?? undefined) as
            | MarketCapSize_Enum
            | undefined,
        })
      ),
  }));
};
