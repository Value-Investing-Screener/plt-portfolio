"use client";

import { useMemo, useState } from "react";

import { colors } from "@/design/tokens";
import type { Publication } from "@/lib/plt/types";
import type { PortfolioMeta } from "@/lib/portfolios";
import { INPUT_STYLE, type RunAction } from "../shared";
import { MonthForm } from "./MonthForm";

/** Mois courant au format « 2026-07 ». */
const currentMonth = () => new Date().toISOString().slice(0, 7);

/** Sélecteur de mois + formulaire de publication du compte rendu mensuel. */
export const PublicationPanel = ({
  portfolios,
  publications,
  runAction,
  recipientCount,
}: {
  portfolios: PortfolioMeta[];
  publications: Publication[];
  runAction: RunAction;
  /** Nombre de clients actifs qui recevraient l'e-mail. */
  recipientCount: number;
}) => {
  const [month, setMonth] = useState(currentMonth);

  const publication = useMemo(
    () => publications.find((item) => item.month === month) ?? null,
    [publications, month]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <label
          htmlFor="plt-admin-month"
          style={{ fontSize: 11, color: colors.muted }}
        >
          Mois
        </label>
        <input
          id="plt-admin-month"
          type="month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          style={INPUT_STYLE}
        />
      </div>

      {/* Remonté à zéro quand on change de mois. */}
      <MonthForm
        key={month}
        month={month}
        publication={publication}
        portfolios={portfolios}
        runAction={runAction}
        recipientCount={recipientCount}
      />
    </div>
  );
};
