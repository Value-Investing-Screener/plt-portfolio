import { colors, MONO } from "@/design/tokens";
import { documentMeta, monthLabelLong } from "@/lib/format";
import type { Publication } from "@/lib/plt/types";
import type { PortfolioMeta } from "@/lib/portfolios";
import { BellIcon, EmptyState, Label, Panel, PdfBadge, TabHeader } from "./ui";

const CARD_STYLE = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  background: colors.bg,
  border: `1px solid rgba(255,255,255,0.07)`,
  borderRadius: 6,
  transition: "border-color .15s ease, background .15s ease",
} as const;

type ReviewTabProps = {
  publications: Publication[];
  portfolios: PortfolioMeta[];
};

export const ReviewTab = ({ publications, portfolios }: ReviewTabProps) => (
  <div
    className="plt-fade"
    style={{ display: "flex", flexDirection: "column", gap: 16 }}
  >
    <TabHeader
      overline="Review mensuel"
      title="Comptes rendus mensuels"
      aside="3 rapports PDF + replay vidéo par mois"
    />

    {publications.length === 0 && (
      <Panel>
        <EmptyState>Aucun compte rendu publié pour le moment.</EmptyState>
      </Panel>
    )}

    {publications.map((publication) => {
      const subtitleColor = publication.hasAlert
        ? colors.amber
        : colors.positive;

      // Un rapport par portefeuille, dans l'ordre d'affichage des portefeuilles.
      const reports = portfolios
        .map((portfolio) => ({
          portfolio,
          report: publication.reports.find(
            (item) => item.portfolioKey === portfolio.key
          ),
        }))
        .filter(
          (
            entry
          ): entry is {
            portfolio: PortfolioMeta;
            report: NonNullable<(typeof entry)["report"]>;
          } => Boolean(entry.report)
        );

      return (
        <Panel key={publication.id} style={{ padding: 0, overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              padding: "16px clamp(18px,3vw,28px)",
              borderBottom: `1px solid ${colors.border}`,
              borderLeft: `2px solid ${colors.accent}`,
              background: colors.panelHead,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {publication.hasAlert && <BellIcon />}
              <div
                style={{
                  fontSize: "clamp(15px,1.8vw,18px)",
                  fontWeight: 600,
                  color: colors.textHi,
                }}
              >
                {monthLabelLong(publication.month)}
              </div>
            </div>
            <span
              style={{
                fontSize: 10,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: subtitleColor,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: subtitleColor,
                  flex: "none",
                }}
              />
              {publication.hasAlert
                ? "Changement sur un portefeuille"
                : "Point mensuel clôturé"}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: 14,
              padding: "20px clamp(18px,3vw,28px)",
            }}
          >
            {reports.map(({ portfolio, report }) => (
              <a
                key={portfolio.key}
                href={`/api/documents/${report.storagePath}`}
                target="_blank"
                rel="noreferrer"
                className="plt-card"
                style={{ ...CARD_STYLE, padding: 16, color: "inherit" }}
              >
                <PdfBadge color={portfolio.color} />
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: colors.text,
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    Rapport - {portfolio.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: colors.muted2,
                      fontFamily: MONO,
                      marginTop: 3,
                    }}
                  >
                    {documentMeta(report.pageCount, report.fileSizeBytes)}
                  </div>
                </div>
              </a>
            ))}

            {publication.replayUrl && (
              <a
                href={publication.replayUrl}
                target="_blank"
                rel="noreferrer"
                className="plt-card"
                style={{
                  ...CARD_STYLE,
                  padding: "12px 14px",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    flex: "none",
                    position: "relative",
                    width: 96,
                    height: 56,
                    borderRadius: 4,
                    overflow: "hidden",
                    background:
                      "repeating-linear-gradient(135deg,#1A2024,#1A2024 6px,#151A1E 6px,#151A1E 12px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "rgba(192,138,78,0.92)",
                      color: colors.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      paddingLeft: 2,
                    }}
                  >
                    ▶
                  </span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <Label
                    size={10}
                    spacing=".12em"
                    color={colors.accent}
                    style={{ marginBottom: 4 }}
                  >
                    Replay vidéo
                  </Label>
                  <div
                    style={{
                      fontSize: 13,
                      color: colors.text,
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    Replay - Point mensuel PLT Insider
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: colors.muted2,
                      fontFamily: MONO,
                      marginTop: 3,
                    }}
                  >
                    {publication.replayDurationMin
                      ? `${publication.replayDurationMin} min`
                      : "Voir le replay"}
                  </div>
                </div>
              </a>
            )}
          </div>
        </Panel>
      );
    })}
  </div>
);
