import { SERIF, site, SITE_GUTTER } from "@/design/site";
import { Rule } from "./ui";

const TESTIMONIALS = [
  {
    name: "Jawlan Wassel",
    role: "Formateur bourse",
    quote: [
      "« J'y suis allé sur recommandation, et en deux-trois vidéos j'ai vite compris que Rémi était d'un tout autre niveau. Du coup j'ai rejoint la formation : on apprend à dénicher des actions sous-évaluées et à construire un vrai portefeuille.",
      "Le séminaire était dense, de la pure valeur du début à la fin. Ça a totalement changé ma vision de l'investissement. Je le recommande à tous ceux qui veulent construire un portefeuille solide. »",
    ],
  },
  {
    name: "Jean-Louis Wolf",
    role: "Entrepreneur investisseur",
    quote: [
      "« J'avais d'abord testé des banques privées et des fonds qui ne travaillaient pas toujours dans l'intérêt de leurs clients. En tombant sur la chaîne de Rémi, j'ai trouvé un contenu de très grande qualité, avec une vraie approche long terme.",
      "Depuis qu'on collabore, j'ai bien compris son approche et le suivi client apporte une vraie plus-value. Une belle rencontre, aussi humaine que professionnelle. »",
    ],
  },
];

export const Testimonials = () => (
  <section
    style={{
      background: site.cream,
      color: site.onLight,
      padding: `clamp(56px,8vw,110px) ${SITE_GUTTER}`,
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div
        className="plt-s-reveal"
        style={{ textAlign: "center", marginBottom: "clamp(36px,5vw,60px)" }}
      >
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 500,
            fontSize: "clamp(32px,4.4vw,58px)",
            letterSpacing: ".02em",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Leurs retours d&apos;expériences
        </h2>
        <Rule width={120} style={{ marginTop: 18 }} />
      </div>

      <div
        className="plt-s-collapse"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(28px,4vw,56px)",
          alignItems: "start",
        }}
      >
        {TESTIMONIALS.map(({ name, role, quote }) => (
          <figure key={name} className="plt-s-reveal" style={{ margin: 0 }}>
            <blockquote
              style={{
                margin: 0,
                background: site.white,
                padding: "clamp(24px,3vw,40px)",
                color: site.onLightSoft,
                fontSize: 15,
                lineHeight: 1.75,
              }}
            >
              {quote.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    margin: index === quote.length - 1 ? 0 : "0 0 14px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </blockquote>

            <figcaption>
              <div
                style={{
                  display: "inline-block",
                  background: site.accent,
                  color: site.white,
                  fontFamily: SERIF,
                  fontSize: 24,
                  padding: "6px 18px",
                  marginTop: 20,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: site.onLightFaint,
                  marginTop: 8,
                  letterSpacing: ".03em",
                }}
              >
                {role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
