import { colors, MONO } from "@/design/tokens";
import { currencySymbol, fmt, pct } from "@/lib/format";
import { REFERENCE_CURRENCIES } from "@/lib/portfolios";
import { Dot, Label, Panel } from "../ui";

export type Exposure = {
  key: string;
  name: string;
  color: string;
  value: number;
  onChange: (value: number) => void;
};

type SettingsPanelProps = {
  capital: number;
  onCapitalChange: (capital: number) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  exposures: Exposure[];
  totalExposure: number;
};

export const SettingsPanel = ({
  capital,
  onCapitalChange,
  currency,
  onCurrencyChange,
  exposures,
  totalExposure,
}: SettingsPanelProps) => {
  const complete = Math.round(totalExposure) === 100;

  return (
    <Panel style={{ padding: "26px 28px" }}>
      <Label style={{ marginBottom: 8 }}>Capital investi</Label>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontWeight: 500,
            fontSize: "clamp(32px,4.4vw,46px)",
            lineHeight: 1,
            color: colors.textHi,
            letterSpacing: "-.01em",
          }}
        >
          {fmt(capital)} {currencySymbol(currency)}
        </div>
        <div style={{ fontSize: 12, color: colors.text3 }}>
          exposé à{" "}
          <span style={{ color: colors.accent }}>{pct(totalExposure)}</span>
        </div>
      </div>

      {/* Capital à investir + devise de référence */}
      <div
        style={{
          marginTop: 26,
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        <Label size={10.5} spacing=".16em" style={{ fontWeight: 600 }}>
          <label htmlFor="plt-capital">Capital à investir</label>
        </Label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: colors.bg,
            border: `1px solid ${colors.borderInput}`,
            borderRadius: 5,
            padding: "11px 14px",
          }}
        >
          <input
            id="plt-capital"
            type="number"
            min={0}
            step={1000}
            value={capital}
            onChange={(event) =>
              onCapitalChange(
                event.target.value === ""
                  ? 0
                  : Math.max(0, Number(event.target.value))
              )
            }
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: colors.textHi,
              fontFamily: MONO,
              fontSize: 18,
              fontWeight: 500,
              outline: "none",
              minWidth: 0,
            }}
          />
          <select
            aria-label="Devise de référence"
            value={currency}
            onChange={(event) => onCurrencyChange(event.target.value)}
            style={{
              appearance: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              color: colors.muted2,
              fontWeight: 600,
              fontFamily: MONO,
              outline: "none",
            }}
          >
            {REFERENCE_CURRENCIES.map((code) => (
              <option key={code} value={code} style={{ background: colors.bar }}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Curseurs d'exposition */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {exposures.map((exposure) => (
          <div key={exposure.key}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 9,
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 12.5,
                  color: colors.textSoft,
                }}
              >
                <Dot color={exposure.color} />
                {exposure.name}
              </span>
              <span
                style={{ fontFamily: MONO, fontSize: 13, color: colors.text }}
              >
                {pct(exposure.value)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              aria-label={`Exposition ${exposure.name}`}
              value={exposure.value}
              onChange={(event) =>
                exposure.onChange(
                  Math.min(100, Math.max(0, Math.round(Number(event.target.value))))
                )
              }
            />
          </div>
        ))}
      </div>

      {/* Total */}
      <div
        style={{
          marginTop: 22,
          paddingTop: 16,
          borderTop: `1px solid rgba(255,255,255,0.07)`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Label size={10.5} spacing=".14em">
          Total exposition
        </Label>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 15,
            color: complete ? colors.positive : colors.accent,
          }}
        >
          {pct(totalExposure)}
        </span>
      </div>
    </Panel>
  );
};
