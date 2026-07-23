import { colors, MONO } from "@/design/tokens";
import { documentMeta } from "@/lib/format";
import type { YearRow } from "@/lib/performance";
import type { AnnualReview } from "@/lib/plt/types";
import { Dot, Emblem, EmptyState, Label, Panel, TabHeader } from "./ui";

type AnnualTabProps = {
  reviews: AnnualReview[];
  /** Performances par année civile, pour la bande de chiffres de chaque revue. */
  yearRows: YearRow[];
};

export const AnnualTab = ({ reviews, yearRows }: AnnualTabProps) => (
  <div
    className="plt-fade"
    style={{ display: "flex", flexDirection: "column", gap: 20 }}
  >
    <TabHeader
      overline="Revue annuelle"
      title="Bilans de fin d'exercice"
      aside="Un document de synthèse par année civile"
    />

    {reviews.length === 0 && (
      <Panel>
        <EmptyState>Aucune revue annuelle publiée pour le moment.</EmptyState>
      </Panel>
    )}

    {reviews.map((review) => {
      const available = Boolean(review.storagePath);
      // Les barres de performance de l'exercice, si l'année est couverte.
      const bars =
        yearRows.find((row) => row.label.startsWith(String(review.year)))
          ?.bars ?? [];

      return (
        <Panel key={review.year} className="plt-annual">
          {/* Vitrine */}
          <div
            style={{
              position: "relative",
              minHeight: 280,
              background:
                "repeating-linear-gradient(135deg,#1A2024,#1A2024 8px,#151A1E 8px,#151A1E 16px)",
              borderRight: `1px solid ${colors.border}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: 28,
            }}
          >
            <Emblem size={30} />
            <div
              style={{
                fontFamily: MONO,
                fontSize: "clamp(40px,4.4vw,56px)",
                color: colors.textHi,
                fontWeight: 500,
                letterSpacing: ".02em",
                lineHeight: 1,
              }}
            >
              {review.year}
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: colors.muted,
              }}
            >
              PLT Insider
            </div>
            {!available && (
              <span
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  fontSize: 9,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: colors.amber,
                  border: `1px solid rgba(201,161,94,0.5)`,
                  borderRadius: 3,
                  padding: "4px 8px",
                  fontWeight: 600,
                }}
              >
                En préparation
              </span>
            )}
          </div>

          {/* Contenu */}
          <div
            style={{
              padding: "clamp(24px,3vw,38px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <Label size={10} color={colors.accent}>
              Revue annuelle{review.tag ? ` · ${review.tag}` : ""}
            </Label>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(22px,2.6vw,30px)",
                fontWeight: 600,
                letterSpacing: "-.01em",
                color: colors.textHi,
              }}
            >
              {review.title}
            </h2>
            {review.blurb && (
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: colors.text3,
                  maxWidth: 620,
                }}
              >
                {review.blurb}
              </p>
            )}

            {bars.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: 28,
                  flexWrap: "wrap",
                  padding: "16px 0",
                  borderTop: `1px solid ${colors.border}`,
                  borderBottom: `1px solid ${colors.border}`,
                }}
              >
                {bars.map((bar) => (
                  <div key={bar.key}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        fontSize: 11,
                        color: colors.muted,
                        marginBottom: 5,
                      }}
                    >
                      <Dot color={bar.color} />
                      {bar.name}
                    </div>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 19,
                        color:
                          bar.change >= 0 ? colors.positive : colors.negative,
                      }}
                    >
                      {bar.str}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                marginTop: 4,
              }}
            >
              <span
                style={{ fontSize: 12, color: colors.muted2, fontFamily: MONO }}
              >
                {available
                  ? documentMeta(review.pageCount, review.fileSizeBytes)
                  : "Document en cours de rédaction"}
              </span>
              {available ? (
                <a
                  href={`/api/documents/${review.storagePath}`}
                  target="_blank"
                  rel="noreferrer"
                  className="plt-btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 11,
                    background: colors.accent,
                    color: colors.bg,
                    fontWeight: 600,
                    fontSize: 13,
                    padding: "12px 22px",
                    borderRadius: 5,
                    transition: "background .15s ease",
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 26,
                      border: `1.5px solid ${colors.bg}`,
                      borderRadius: 2,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: MONO,
                      fontSize: 7,
                      fontWeight: 700,
                    }}
                  >
                    PDF
                  </span>
                  Télécharger la revue
                </a>
              ) : (
                <span
                  style={{
                    fontSize: 12,
                    color: colors.muted,
                    fontStyle: "italic",
                  }}
                >
                  Bientôt disponible
                </span>
              )}
            </div>
          </div>
        </Panel>
      );
    })}
  </div>
);
