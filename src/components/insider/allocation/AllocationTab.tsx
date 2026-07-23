import { useMemo } from "react";

import { useGetConversionsQuery } from "@/app/api/useGetConversion";
import { useGetPortofliosQuery } from "@/app/api/useGetPortfolios";
import {
  getCompaniesWithConversions,
  getConversionRows,
  type Holding,
} from "@/lib/allocation";
import {
  portfolioDisplayName,
  type PortfolioKey,
  type PortfolioMeta,
} from "@/lib/portfolios";
import { ConversionTable } from "./ConversionTable";
import { PortfolioSection } from "./PortfolioSection";
import { RepartitionPanel, type AllocationRow } from "./RepartitionPanel";
import { SettingsPanel } from "./SettingsPanel";

export type Exposures = Record<PortfolioKey, number>;

type AllocationTabProps = {
  /** Portefeuilles modèles (nom, tagline, couleur) — table `plt_portfolio`. */
  portfolios: PortfolioMeta[];
  capital: number;
  onCapitalChange: (capital: number) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  exposures: Exposures;
  onExposureChange: (key: PortfolioKey, value: number) => void;
};

export const AllocationTab = ({
  portfolios,
  capital,
  onCapitalChange,
  currency,
  onCurrencyChange,
  exposures,
  onExposureChange,
}: AllocationTabProps) => {
  const {
    data: hasuraPortfolios,
    isLoading: portfoliosLoading,
    error: portfoliosError,
  } = useGetPortofliosQuery();
  const {
    data: rates,
    isLoading: ratesLoading,
    error: ratesError,
  } = useGetConversionsQuery();

  const loading = portfoliosLoading || ratesLoading;

  // Un message concret vaut mieux qu'un « aucune position » trompeur.
  const failure =
    portfoliosError instanceof Error
      ? portfoliosError.message
      : ratesError instanceof Error
      ? `Taux de change indisponibles : ${ratesError.message}`
      : null;

  /** Les trois portefeuilles modèles, valorisés pour le capital courant. */
  const valued = useMemo(
    () =>
      portfolios.map((meta, index) => {
        // Appariement par identifiant Hasura quand il est renseigné, sinon on
        // retombe sur l'ordre d'affichage.
        const source =
          hasuraPortfolios?.find(
            (item) => item.id === meta.hasuraPortfolioId
          ) ?? hasuraPortfolios?.[index];

        const companies: Holding[] =
          source?.companies && rates
            ? getCompaniesWithConversions(
                capital,
                currency,
                exposures[meta.key],
                rates,
                source.companies
              )
            : [];

        return {
          ...meta,
          name: portfolioDisplayName(source?.name, meta.name),
          exposure: exposures[meta.key],
          companies,
          value: companies.reduce(
            (total, company) => total + company.shareInChosenCurrency,
            0
          ),
          dividend:
            companies.reduce(
              (total, company) =>
                total + company.dividendYieldTTM * company.allocation,
              0
            ) / 100,
        };
      }),
    [capital, currency, exposures, hasuraPortfolios, portfolios, rates]
  );

  const totalExposure = portfolios.reduce(
    (total, meta) => total + exposures[meta.key],
    0
  );

  const allocationRows: AllocationRow[] = valued.map((portfolio) => ({
    key: portfolio.key,
    name: portfolio.name,
    tag: portfolio.tagline,
    color: portfolio.color,
    value: portfolio.value,
    exposure: portfolio.exposure,
    width: `${(totalExposure
      ? (portfolio.exposure / totalExposure) * 100
      : 0
    ).toFixed(2)}%`,
  }));

  /** Rendement dividende consolidé, pondéré par les montants alloués. */
  const globalDividend = useMemo(() => {
    const total = valued.reduce((sum, portfolio) => sum + portfolio.value, 0);
    if (!total) return 0;
    return (
      valued.reduce(
        (sum, portfolio) => sum + portfolio.value * portfolio.dividend,
        0
      ) / total
    );
  }, [valued]);

  const conversionRows = useMemo(
    () => getConversionRows(valued.flatMap((portfolio) => portfolio.companies)),
    [valued]
  );

  return (
    <div
      className="plt-fade"
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <section className="plt-hero">
        <SettingsPanel
          capital={capital}
          onCapitalChange={onCapitalChange}
          currency={currency}
          onCurrencyChange={onCurrencyChange}
          totalExposure={totalExposure}
          exposures={valued.map((portfolio) => ({
            key: portfolio.key,
            name: portfolio.name,
            color: portfolio.color,
            value: portfolio.exposure,
            onChange: (value: number) => onExposureChange(portfolio.key, value),
          }))}
        />
        <RepartitionPanel
          rows={allocationRows}
          currency={currency}
          globalDividend={globalDividend}
        />
      </section>

      {conversionRows.length > 0 && (
        <ConversionTable rows={conversionRows} currency={currency} />
      )}

      {valued.map((portfolio) => (
        <PortfolioSection
          key={portfolio.key}
          name={portfolio.name}
          tag={portfolio.tagline}
          color={portfolio.color}
          exposure={portfolio.exposure}
          currency={currency}
          companies={portfolio.companies}
          loading={loading}
          failure={failure}
        />
      ))}
    </div>
  );
};
