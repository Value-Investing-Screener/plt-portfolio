"use client";

import { colors, MONO } from "@/design/tokens";
import { documentMeta } from "@/lib/format";
import type { Publication } from "@/lib/plt/types";
import type { PortfolioKey, PortfolioMeta } from "@/lib/portfolios";
import { PdfBadge } from "../../ui";
import {
  AdminSectionLabel,
  fileSlot,
  SLOT_STYLE,
  SmallButton,
  UploadButton,
} from "../shared";

/** Les trois rapports PDF du mois — chargement direct ou retrait. */
export const ReportsSection = ({
  portfolios,
  publication,
  pending,
  onUpload,
  onRemove,
}: {
  portfolios: PortfolioMeta[];
  publication: Publication | null;
  pending: boolean;
  onUpload: (portfolioKey: PortfolioKey, file: File) => void;
  onRemove: (portfolioKey: PortfolioKey) => void;
}) => (
  <div>
    <AdminSectionLabel>Rapports PDF · un par portefeuille</AdminSectionLabel>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {portfolios.map((portfolio) => {
        const existing = publication?.reports.find(
          (item) => item.portfolioKey === portfolio.key
        );
        const state = fileSlot(Boolean(existing));

        return (
          <div key={portfolio.key} style={SLOT_STYLE}>
            <PdfBadge
              color={portfolio.color}
              width={34}
              height={42}
              fontSize={8.5}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{ fontSize: 13, color: colors.text, fontWeight: 600 }}
              >
                Rapport - {portfolio.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: MONO,
                  marginTop: 2,
                  color: state.stateColor,
                }}
              >
                {existing
                  ? documentMeta(existing.pageCount, existing.fileSizeBytes)
                  : state.stateStr}
              </div>
            </div>
            {existing ? (
              <SmallButton
                label={state.btnLabel}
                disabled={pending}
                onClick={() => onRemove(portfolio.key)}
                background={state.btnBackground}
                color={state.btnColor}
                border={state.btnBorder}
              />
            ) : (
              <UploadButton
                label={state.btnLabel}
                disabled={pending}
                onFile={(file) => onUpload(portfolio.key, file)}
                background={state.btnBackground}
                color={state.btnColor}
                border={state.btnBorder}
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);
