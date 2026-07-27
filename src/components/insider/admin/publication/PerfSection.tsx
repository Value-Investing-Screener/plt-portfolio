"use client";

import { colors } from "@/design/tokens";
import type { PortfolioKey, PortfolioMeta } from "@/lib/portfolios";
import { AdminSectionLabel, INPUT_STYLE } from "../shared";

/** Performance mensuelle (%) saisie par portefeuille. */
export const PerfSection = ({
  portfolios,
  returns,
  onChange,
}: {
  portfolios: PortfolioMeta[];
  returns: Record<string, string>;
  onChange: (portfolioKey: PortfolioKey, value: string) => void;
}) => (
  <div>
    <AdminSectionLabel>Performances mensuelles (%)</AdminSectionLabel>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
        gap: 10,
      }}
    >
      {portfolios.map((portfolio) => (
        <div
          key={portfolio.key}
          style={{ display: "flex", flexDirection: "column", gap: 6 }}
        >
          <label
            htmlFor={`plt-perf-${portfolio.key}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 11.5,
              color: colors.textSoft,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: portfolio.color,
                flex: "none",
              }}
            />
            {portfolio.name.replace(/^Portefeuille\s+/i, "")}
          </label>
          <input
            id={`plt-perf-${portfolio.key}`}
            type="number"
            step="0.01"
            placeholder="+ 0,00"
            value={returns[portfolio.key] ?? ""}
            onChange={(event) => onChange(portfolio.key, event.target.value)}
            style={{ ...INPUT_STYLE, fontSize: 14, padding: "9px 11px" }}
          />
        </div>
      ))}
    </div>
  </div>
);
