import { colors, MONO } from "@/design/tokens";
import {
  averageDividend,
  byCountry,
  byMarketCap,
  bySector,
  toDonut,
  type Holding,
} from "@/lib/allocation";
import { currencySymbol, fmt, fmt2, money, pct } from "@/lib/format";
import { DonutChart } from "../Donut";
import { EmptyState, Label, Panel, Spinner } from "../ui";

const GRID = "2.3fr 1fr 0.7fr 0.6fr 1fr 1.1fr 1.1fr 0.9fr";
const CELL_PADDING = "12px clamp(18px,3vw,30px)";

type PortfolioSectionProps = {
  name: string;
  tag: string;
  color: string;
  /** Exposition du portefeuille dans l'allocation globale, en % */
  exposure: number;
  currency: string;
  companies: Holding[];
  loading: boolean;
  /** Message d'erreur de chargement, s'il y en a un. */
  failure?: string | null;
};

export const PortfolioSection = ({
  name,
  tag,
  color,
  exposure,
  currency,
  companies,
  loading,
  failure = null,
}: PortfolioSectionProps) => {
  const value = companies.reduce(
    (total, company) => total + company.shareInChosenCurrency,
    0
  );

  return (
    <Panel style={{ padding: 0, overflow: "hidden" }}>
      {/* En-tête */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 20,
          flexWrap: "wrap",
          padding: "24px clamp(18px,3vw,30px)",
          borderBottom: `1px solid ${colors.border}`,
          borderLeft: `2px solid ${color}`,
          background: colors.panelHead,
        }}
      >
        <div>
          <Label size={10} spacing=".18em" style={{ marginBottom: 7 }}>
            {companies.length} positions · Rendement{" "}
            {pct(averageDividend(companies))}
          </Label>
          <h2
            style={{
              margin: 0,
              fontWeight: 600,
              fontSize: "clamp(19px,2.2vw,26px)",
              letterSpacing: "-.01em",
              color: colors.textHi,
            }}
          >
            {name}
          </h2>
          <div
            style={{
              fontSize: 12.5,
              color: colors.muted,
              marginTop: 5,
              maxWidth: 560,
            }}
          >
            {tag}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <Label size={10} spacing=".16em" style={{ marginBottom: 3 }}>
            Montant alloué
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
            {money(value, currency)}
          </div>
          <div style={{ fontSize: 11.5, color: colors.text3, marginTop: 4 }}>
            {pct(exposure)} du capital
          </div>
        </div>
      </div>

      {loading || companies.length === 0 ? (
        <EmptyState>
          {loading ? (
            <>
              <Spinner /> Chargement des positions…
            </>
          ) : failure ? (
            <span style={{ color: colors.negative, textAlign: "center" }}>
              {failure}
            </span>
          ) : (
            "Aucune position disponible pour ce portefeuille."
          )}
        </EmptyState>
      ) : (
        <>
          {/* Graphiques */}
          <div className="plt-charts">
            <DonutChart
              title="Répartition sectorielle"
              unit="secteurs"
              segments={toDonut(bySector(companies))}
            />
            <DonutChart
              title="Répartition géographique"
              unit="pays"
              segments={toDonut(byCountry(companies))}
            />
            <DonutChart
              title="Répartition par capitalisation"
              unit="tailles"
              segments={toDonut(byMarketCap(companies))}
            />
          </div>

          {/* Tableau des titres */}
          <div
            style={{
              overflowX: "auto",
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ minWidth: 900 }}>
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
                <span>Titre</span>
                <span>Ticker</span>
                <span style={{ textAlign: "right" }}>Part</span>
                <span>Devise</span>
                <span style={{ textAlign: "right" }}>Cours</span>
                <span style={{ textAlign: "right" }}>Montant devise</span>
                <span style={{ textAlign: "right" }}>
                  Montant {currencySymbol(currency)}
                </span>
                <span style={{ textAlign: "right" }}>Quantité</span>
              </div>

              {companies.map((company) => (
                <div
                  key={company.ticker}
                  className="plt-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: GRID,
                    gap: 12,
                    padding: CELL_PADDING,
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
                  <span
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      color: colors.accent,
                    }}
                  >
                    {pct(company.allocation)}
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
                      color: colors.text2,
                    }}
                  >
                    {company.stockPrice > 0 ? fmt2(company.stockPrice) : "-"}
                  </span>
                  <span
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      color: colors.text2,
                    }}
                  >
                    {fmt2(company.shareInStockCurrency)}
                  </span>
                  <span
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      color: colors.textHi,
                    }}
                  >
                    {fmt2(company.shareInChosenCurrency)}
                  </span>
                  <span
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      color: colors.text2,
                    }}
                  >
                    {company.nbStocks === null ? "—" : fmt(company.nbStocks)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Panel>
  );
};
