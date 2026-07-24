import { colors, MONO } from "@/design/tokens";
import { monthLabelShort } from "@/lib/format";
import type { Performance } from "@/lib/performance";
import { PerformanceChart } from "./PerformanceChart";
import { Dot, EmptyState, Label, Panel, TabHeader } from "./ui";

const METRIC_GRID = "1.6fr 1fr 1fr 1fr";
const MONTH_GRID = "1.3fr 1fr 1fr 1fr";

/** « Effic. », « Divid. », « Antifr. » — en-têtes du tableau mensuel. */
const abbreviate = (name: string) => {
  const core = name.replace(/^portefeuille\s+/i, "");
  return core.length > 7 ? `${core.slice(0, 6)}.` : core;
};

export const PerformancesTab = ({
  performance,
}: {
  performance: Performance | null;
}) => {
  if (!performance) {
    return (
      <div
        className="plt-fade"
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <TabHeader
          overline="Performance historique"
          title="Croissance de 1 000 000 € par portefeuille"
        />
        <Panel>
          <EmptyState>
            Au moins deux mois de performance doivent être publiés pour tracer
            l&apos;historique.
          </EmptyState>
        </Panel>
      </div>
    );
  }

  const { series, chartGeometry, metricsRows, monthlyRows, yearRows } =
    performance;

  return (
    <div
      className="plt-fade"
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <TabHeader
        overline="Performance historique"
        title="Croissance de 1 000 000 € par portefeuille"
        aside={`${monthLabelShort(performance.firstMonth)} → ${monthLabelShort(
          performance.lastMonth
        )} · base 1,00 M€`}
      />

      {/* Cartes de synthèse */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 16,
        }}
      >
        {series.map((serie) => (
          <Panel
            key={serie.key}
            style={{
              borderLeft: `2px solid ${serie.color}`,
              padding: "22px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginBottom: 14,
              }}
            >
              <Dot color={serie.color} size={9} />
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>
                {serie.name}
              </span>
            </div>
            <Label size={10} spacing=".12em" style={{ marginBottom: 6 }}>
              1 000 000 € investi · {monthLabelShort(performance.firstMonth)}
            </Label>
            <div
              style={{
                fontFamily: MONO,
                fontWeight: 500,
                fontSize: "clamp(22px,2.6vw,30px)",
                color: colors.textHi,
                lineHeight: 1,
              }}
            >
              {serie.endValueStr}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 14,
                marginTop: 12,
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 15,
                  color: serie.returnColor,
                }}
              >
                {serie.returnStr}
              </span>
              <span style={{ fontSize: 11, color: colors.muted }}>
                soit{" "}
                <span style={{ color: colors.text2, fontFamily: MONO }}>
                  {serie.cagrStr}
                </span>{" "}
                / an
              </span>
            </div>
          </Panel>
        ))}
      </section>

      {/* Indicateurs clés */}
      <Panel style={{ padding: 0, overflow: "hidden" }}>
        <Label
          size={10.5}
          spacing=".16em"
          style={{ padding: "22px clamp(18px,3vw,30px) 0" }}
        >
          Indicateurs clés de risque &amp; performance
        </Label>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 600 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: METRIC_GRID,
                gap: 12,
                padding: "16px clamp(18px,3vw,30px) 12px",
                fontSize: 10,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: colors.muted2,
                fontWeight: 600,
                borderBottom: `1px solid ${colors.borderStrong}`,
              }}
            >
              <span>Indicateur</span>
              {series.map((serie) => (
                <span
                  key={serie.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 6,
                    textAlign: "right",
                  }}
                >
                  <Dot color={serie.color} />
                  {serie.name}
                </span>
              ))}
            </div>
            {metricsRows.map((row) => (
              <div
                key={row.label}
                className="plt-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: METRIC_GRID,
                  gap: 12,
                  padding: "12px clamp(18px,3vw,30px)",
                  alignItems: "center",
                  borderBottom: `1px solid ${colors.borderRow}`,
                  fontSize: 12.5,
                  transition: "background .12s ease",
                }}
              >
                <span style={{ color: colors.text2 }}>{row.label}</span>
                {row.cells.map((cell, index) => (
                  <span
                    key={index}
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      color: cell.color,
                    }}
                  >
                    {cell.str}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Panel>

      {/* Courbes */}
      <Panel style={{ padding: "24px clamp(18px,3vw,30px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <Label size={10.5} spacing=".16em">
            Valeur mensuelle cumulée · base 1 000 000 €
          </Label>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {series.map((serie) => (
              <span
                key={serie.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: colors.text2,
                }}
              >
                <span style={{ width: 14, height: 3, background: serie.color }} />
                {serie.name}{" "}
                <span style={{ fontFamily: MONO, color: serie.returnColor }}>
                  {serie.returnStr}
                </span>
              </span>
            ))}
          </div>
        </div>

        <PerformanceChart
          series={series}
          chartGeometry={chartGeometry}
          monthLabels={performance.monthLabels}
        />
      </Panel>

      <div className="plt-split">
        {/* Performance par année civile */}
        <Panel style={{ padding: "24px clamp(18px,3vw,30px)" }}>
          <Label size={10.5} spacing=".16em" style={{ marginBottom: 24 }}>
            Performance par année civile
          </Label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
              gap: 18,
            }}
          >
            {yearRows.map((year) => (
              <div
                key={year.label}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    gap: 9,
                    height: 180,
                    width: "100%",
                  }}
                >
                  {year.bars.map((bar) => (
                    <div
                      key={bar.key}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: "100%",
                        flex: 1,
                        maxWidth: 52,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 10.5,
                          color: bar.color,
                          marginBottom: 6,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {bar.str}
                      </span>
                      <div
                        style={{
                          width: "100%",
                          height: bar.height,
                          background: bar.color,
                          transition: "height .3s ease",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 12.5,
                    color: colors.text2,
                    paddingTop: 9,
                    borderTop: `1px solid ${colors.border}`,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {year.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 20,
              paddingTop: 16,
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            {series.map((serie) => (
              <span
                key={serie.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 11.5,
                  color: colors.muted,
                }}
              >
                <Dot color={serie.color} size={9} />
                {serie.name}
              </span>
            ))}
          </div>
        </Panel>

        {/* Performance mensuelle */}
        <Panel
          style={{
            padding: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Label
            size={10.5}
            spacing=".16em"
            style={{ padding: "22px clamp(18px,3vw,26px) 0" }}
          >
            Performance mensuelle
          </Label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: MONTH_GRID,
              gap: 10,
              padding: "16px clamp(18px,3vw,26px) 12px",
              fontSize: 9.5,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: colors.muted2,
              fontWeight: 600,
            }}
          >
            <span>Mois</span>
            {series.map((serie) => (
              <span key={serie.key} style={{ textAlign: "right" }}>
                {abbreviate(serie.name)}
              </span>
            ))}
          </div>
          <div style={{ overflowY: "auto", maxHeight: 420 }}>
            {monthlyRows.map((row) => (
              <div
                key={row.label}
                className="plt-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: MONTH_GRID,
                  gap: 10,
                  padding: "9px clamp(18px,3vw,26px)",
                  alignItems: "center",
                  borderTop: `1px solid ${colors.borderRow}`,
                  fontSize: 12,
                  transition: "background .12s ease",
                }}
              >
                <span style={{ color: colors.text2, fontFamily: MONO }}>
                  {row.label}
                </span>
                {row.cells.map((cell, index) => (
                  <span
                    key={index}
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      color: cell.color,
                    }}
                  >
                    {cell.str}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
};
