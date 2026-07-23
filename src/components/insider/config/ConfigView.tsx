"use client";

import { useState } from "react";
import { sum } from "lodash";

import { useGetPortofliosQuery } from "@/app/api/useGetPortfolios";
import { EmptyState, Label, Panel, Spinner } from "@/components/insider/ui";
import { Topbar } from "@/components/insider/Topbar";
import { colors, GUTTER, MONO } from "@/design/tokens";
import type { Member } from "@/lib/auth";
import { sectorLabel } from "@/lib/allocation";
import { continentLabel, countryLabel } from "@/lib/countries";
import { fmt2, pct } from "@/lib/format";
import { portfolioDisplayName, type PortfolioMeta } from "@/lib/portfolios";

const GRID = "2.2fr 1fr 1.4fr 1.2fr 1.1fr 0.9fr 1fr 0.8fr 1fr";

export const ConfigView = ({
  member,
  portfolios: models,
}: {
  member: Member;
  portfolios: PortfolioMeta[];
}) => {
  const { data: portfolios = [], isLoading } = useGetPortofliosQuery();
  const [index, setIndex] = useState(0);

  const portfolio = portfolios[index];
  const companies = portfolio?.companies ?? [];
  const total = sum(companies.map(({ allocation }) => allocation));

  return (
    <main style={{ minHeight: "100vh", padding: "0 0 72px" }}>
      <Topbar member={member} />

      <nav
        style={{
          display: "flex",
          gap: 2,
          padding: `0 ${GUTTER}`,
          background: colors.bar,
          borderBottom: `1px solid ${colors.borderStrong}`,
          overflowX: "auto",
        }}
      >
        {models.map((meta, i) => {
          const active = i === index;
          return (
            <button
              key={meta.key}
              type="button"
              className={active ? undefined : "plt-tab"}
              onClick={() => setIndex(i)}
              style={{
                appearance: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: 12.5,
                letterSpacing: ".03em",
                padding: "15px 22px",
                whiteSpace: "nowrap",
                borderBottom: `2px solid ${
                  active ? colors.accent : "transparent"
                }`,
                color: active ? colors.textHi : colors.muted2,
              }}
            >
              {portfolioDisplayName(portfolios[i]?.name, meta.name)}
            </button>
          );
        })}
      </nav>

      <div
        style={{
          padding: `28px ${GUTTER} 0`,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Panel style={{ padding: 0, overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              padding: "22px clamp(18px,3vw,30px)",
              borderBottom: `1px solid ${colors.border}`,
              borderLeft: `2px solid ${models[index].color}`,
              background: colors.panelHead,
            }}
          >
            <div>
              <Label size={10} spacing=".18em" style={{ marginBottom: 6 }}>
                Composition du portefeuille modèle
              </Label>
              <div
                style={{ fontSize: 18, fontWeight: 600, color: colors.textHi }}
              >
                {portfolioDisplayName(portfolio?.name, models[index].name)}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <Label size={10} spacing=".14em" style={{ marginBottom: 3 }}>
                Total des pondérations
              </Label>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 20,
                  color:
                    Math.round(total) === 100 ? colors.positive : colors.accent,
                }}
              >
                {pct(total)}
              </div>
            </div>
          </div>

          {isLoading || companies.length === 0 ? (
            <EmptyState>
              {isLoading ? (
                <>
                  <Spinner /> Chargement de la composition…
                </>
              ) : (
                "Aucune ligne pour ce portefeuille."
              )}
            </EmptyState>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: 1040 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: GRID,
                    gap: 12,
                    padding: "14px clamp(18px,3vw,30px)",
                    fontSize: 10,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: colors.muted2,
                    fontWeight: 600,
                    background: colors.bar,
                    borderBottom: `1px solid ${colors.borderStrong}`,
                  }}
                >
                  <span>Nom</span>
                  <span>Ticker</span>
                  <span>Secteur</span>
                  <span>Pays</span>
                  <span>Continent</span>
                  <span style={{ textAlign: "right" }}>Dividende</span>
                  <span style={{ textAlign: "right" }}>Cours</span>
                  <span>Devise</span>
                  <span style={{ textAlign: "right" }}>Pondération</span>
                </div>

                {companies.map((company) => (
                  <div
                    key={company.ticker}
                    className="plt-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: GRID,
                      gap: 12,
                      padding: "12px clamp(18px,3vw,30px)",
                      alignItems: "center",
                      borderBottom: `1px solid ${colors.borderRow}`,
                      fontSize: 12.5,
                      transition: "background .12s ease",
                    }}
                  >
                    <span style={{ color: colors.text }}>{company.name}</span>
                    <span
                      style={{
                        color: colors.muted,
                        fontFamily: MONO,
                        fontSize: 11.5,
                      }}
                    >
                      {company.ticker}
                    </span>
                    <span style={{ color: colors.text2 }}>
                      {sectorLabel(company.sector)}
                    </span>
                    <span style={{ color: colors.text2 }}>
                      {countryLabel(company.countryCode)}
                    </span>
                    <span style={{ color: colors.text2 }}>
                      {continentLabel(company.continentCode)}
                    </span>
                    <span
                      style={{
                        textAlign: "right",
                        fontFamily: MONO,
                        color: colors.text2,
                      }}
                    >
                      {company.dividendYieldTTM
                        ? pct(company.dividendYieldTTM)
                        : "—"}
                    </span>
                    <span
                      style={{
                        textAlign: "right",
                        fontFamily: MONO,
                        color: colors.text2,
                      }}
                    >
                      {company.stockPrice ? fmt2(company.stockPrice) : "—"}
                    </span>
                    <span
                      style={{
                        color: colors.muted,
                        fontFamily: MONO,
                        fontSize: 11.5,
                      }}
                    >
                      {company.currency}
                    </span>
                    <span
                      style={{
                        textAlign: "right",
                        fontFamily: MONO,
                        color: colors.accent,
                      }}
                    >
                      {pct(company.allocation)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Panel>
      </div>
    </main>
  );
};
