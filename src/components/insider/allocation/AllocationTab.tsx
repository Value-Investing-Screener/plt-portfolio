"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { saveAllocation } from "@/app/actions/allocation";
import { useGetConversionsQuery } from "@/app/api/useGetConversion";
import { useGetPortofliosQuery } from "@/app/api/useGetPortfolios";
import {
  getCompaniesWithConversions,
  getConversionRows,
  type Holding,
} from "@/lib/allocation";
import type { AllocationSettings } from "@/lib/plt/types";
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

/** Délai sans modification avant l'enregistrement : un glissé de curseur = une écriture. */
const SAVE_DELAY_MS = 600;

/**
 * Derniers réglages de la session, par membre. Le cache de navigation de
 * Next.js réaffiche la page avec les réglages chargés à la première visite :
 * en revenant sur l'onglet, on repart de ceux-ci plutôt que de cette version
 * périmée. Remis à zéro à chaque rechargement complet de la page.
 */
let sessionSettings: { memberId: string; settings: AllocationSettings } | null =
  null;

/**
 * Enregistre les réglages en base après chaque modification, une fois le
 * membre arrêté. Une modification encore en attente est envoyée sans délai
 * si le membre quitte l'onglet ou la page.
 */
const useAutoSave = (settings: AllocationSettings) => {
  const latest = useRef(settings);
  const pending = useRef(false);
  const mounted = useRef(false);

  const flush = useRef(() => {
    if (!pending.current) return;
    pending.current = false;
    saveAllocation(latest.current)
      .then((result) => {
        if (!result.ok) console.warn("[PLT] Allocation non enregistrée :", result.error);
      })
      .catch((error) =>
        console.warn("[PLT] Allocation non enregistrée :", error)
      );
  });

  useEffect(() => {
    latest.current = settings;
    // Les réglages chargés depuis la base n'ont pas à être réécrits.
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    pending.current = true;
    const timer = setTimeout(flush.current, SAVE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [settings]);

  useEffect(() => {
    const send = flush.current;
    window.addEventListener("pagehide", send);
    return () => {
      window.removeEventListener("pagehide", send);
      send();
    };
  }, []);
};

type AllocationTabProps = {
  /** Portefeuilles modèles (nom, tagline, couleur) — table `plt_portfolio`. */
  portfolios: PortfolioMeta[];
  /** Derniers réglages enregistrés du membre (ou valeurs par défaut). */
  initialSettings: AllocationSettings;
  /** Membre connecté — les réglages de session ne passent pas d'un compte à l'autre. */
  memberId: string;
};

export const AllocationTab = ({
  portfolios,
  initialSettings,
  memberId,
}: AllocationTabProps) => {
  // Réglages de simulation — propres à chaque membre, enregistrés en base.
  const [initial] = useState(() =>
    sessionSettings?.memberId === memberId
      ? sessionSettings.settings
      : initialSettings
  );
  const [capital, setCapital] = useState(initial.capital);
  const [currency, setCurrency] = useState(initial.currency);
  const [exposures, setExposures] = useState<Exposures>(initial.exposures);
  const onCapitalChange = setCapital;
  const onCurrencyChange = setCurrency;
  const onExposureChange = (key: PortfolioKey, value: number) =>
    setExposures((current) => ({ ...current, [key]: value }));

  const settings = useMemo(
    () => ({ capital, currency, exposures }),
    [capital, currency, exposures]
  );

  useEffect(() => {
    sessionSettings = { memberId, settings };
  }, [memberId, settings]);

  useAutoSave(settings);

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
