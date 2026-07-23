import { colors, MONO } from "@/design/tokens";
import type { ConversionRow } from "@/lib/allocation";
import { currencySymbol, fmt2, pct } from "@/lib/format";
import { Label, Panel } from "../ui";

const GRID = "1fr 1.1fr 1.1fr 1.3fr";

type ConversionTableProps = {
  rows: ConversionRow[];
  /** Devise de référence choisie par l'utilisateur */
  currency: string;
};

export const ConversionTable = ({ rows, currency }: ConversionTableProps) => (
  <Panel style={{ padding: "24px 28px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 18,
      }}
    >
      <div>
        <Label style={{ marginBottom: 5 }}>Change à prévoir</Label>
        <div style={{ fontSize: 16, color: colors.text, fontWeight: 500 }}>
          Ordres de conversion par devise
        </div>
      </div>
      <div style={{ fontSize: 11.5, color: colors.muted2 }}>
        Montants agrégés · trois portefeuilles
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: GRID,
        gap: 12,
        padding: "0 4px 10px",
        fontSize: 10,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: colors.muted2,
        fontWeight: 600,
        borderBottom: `1px solid ${colors.borderStrong}`,
      }}
    >
      <span>Devise</span>
      <span style={{ textAlign: "right" }}>Montant devise</span>
      <span style={{ textAlign: "right" }}>
        Équivalent {currencySymbol(currency)}
      </span>
      <span>Poids</span>
    </div>

    {rows.map((row) => (
      <div
        key={row.currency}
        style={{
          display: "grid",
          gridTemplateColumns: GRID,
          gap: 12,
          padding: "11px 4px",
          alignItems: "center",
          borderBottom: `1px solid rgba(255,255,255,0.045)`,
          fontSize: 13,
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontWeight: 600,
            letterSpacing: ".05em",
            color: colors.accent,
          }}
        >
          {row.currency}
        </span>
        <span
          style={{ textAlign: "right", fontFamily: MONO, color: colors.text }}
        >
          {fmt2(row.local)}
        </span>
        <span
          style={{ textAlign: "right", fontFamily: MONO, color: colors.text3 }}
        >
          {fmt2(row.reference)} {currencySymbol(currency)}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              flex: 1,
              height: 5,
              background: "rgba(255,255,255,0.07)",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                display: "block",
                height: "100%",
                width: `${row.pct.toFixed(2)}%`,
                background: colors.accent,
              }}
            />
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11.5,
              color: colors.muted2,
              width: 46,
              textAlign: "right",
            }}
          >
            {pct(row.pct)}
          </span>
        </span>
      </div>
    ))}
  </Panel>
);
