import { colors, MONO } from "@/design/tokens";
import { money, pct } from "@/lib/format";
import { Label, Panel } from "../ui";

export type AllocationRow = {
  key: string;
  name: string;
  tag: string;
  color: string;
  value: number;
  exposure: number;
  /** Largeur du segment dans la barre empilée (exposition normalisée) */
  width: string;
};

type RepartitionPanelProps = {
  rows: AllocationRow[];
  currency: string;
  /** Rendement dividende consolidé, en % */
  globalDividend: number;
};

export const RepartitionPanel = ({
  rows,
  currency,
  globalDividend,
}: RepartitionPanelProps) => (
  <Panel
    style={{
      padding: "26px 28px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div>
        <Label style={{ marginBottom: 7 }}>Répartition par portefeuille</Label>
        <div style={{ fontSize: 16, color: colors.text, fontWeight: 500 }}>
          Allocation stratégique consolidée
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <Label size={10} spacing=".14em">
          Rendement div. moyen
        </Label>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 22,
            color: colors.accent,
            marginTop: 3,
          }}
        >
          {pct(globalDividend)}
        </div>
      </div>
    </div>

    {/* Barre empilée */}
    <div
      style={{
        marginTop: 24,
        display: "flex",
        height: 14,
        overflow: "hidden",
        background: colors.bg,
        border: `1px solid ${colors.border}`,
      }}
    >
      {rows.map((row) => (
        <div
          key={row.key}
          style={{
            width: row.width,
            background: row.color,
            transition: "width .3s ease",
          }}
        />
      ))}
    </div>

    {/* Légende */}
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {rows.map((row) => (
        <div
          key={row.key}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            padding: "13px 0",
            borderBottom: `1px solid ${colors.borderSoft}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                background: row.color,
                flex: "none",
              }}
            />
            <div>
              <div
                style={{ fontSize: 13.5, color: colors.text, fontWeight: 600 }}
              >
                {row.name}
              </div>
              <div style={{ fontSize: 11, color: colors.muted2 }}>{row.tag}</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{ fontFamily: MONO, fontSize: 15, color: colors.textHi }}
            >
              {money(row.value, currency)}
            </div>
            <div style={{ fontSize: 11, color: colors.text3 }}>
              {pct(row.exposure)} du capital
            </div>
          </div>
        </div>
      ))}
    </div>
  </Panel>
);
