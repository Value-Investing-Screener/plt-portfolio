import "./site.css";

import { gradients, SERIF, site, SITE_GUTTER, SITE_SANS } from "@/design/site";
import type { LegalBlock, LegalDocument } from "@/lib/legal/types";
import { SiteFooter } from "./SiteFooter";
import { Rule, Wordmark } from "./ui";

const Block = ({ block }: { block: LegalBlock }) => {
  if (block.kind === "p") {
    return (
      <p
        style={{
          margin: "0 0 16px",
          color: site.onDarkSoft,
          fontSize: 15.5,
          lineHeight: 1.85,
        }}
      >
        {block.text}
      </p>
    );
  }

  if (block.kind === "list") {
    return (
      <ul
        style={{
          margin: "0 0 16px",
          paddingLeft: 22,
          color: site.onDarkSoft,
          fontSize: 15.5,
          lineHeight: 1.85,
        }}
      >
        {block.items.map((item) => (
          <li key={item} style={{ marginBottom: 6 }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  // Paires libellé / valeur. Une définition list plutôt qu'un tableau : le
  // contenu n'a pas de dimension tabulaire, et l'empilement sur petit écran
  // reste lisible sans défilement horizontal.
  return (
    <dl
      style={{
        margin: "0 0 20px",
        display: "grid",
        gridTemplateColumns: "minmax(180px,.8fr) 1.6fr",
        gap: "0 28px",
        fontSize: 15,
        lineHeight: 1.75,
      }}
      className="plt-s-legal-rows"
    >
      {block.rows.map(([label, value]) => (
        <div key={label} style={{ display: "contents" }}>
          <dt
            style={{
              padding: "10px 0",
              color: site.accentWarm,
              borderTop: `1px solid ${site.ruleDarkSoft}`,
            }}
          >
            {label}
          </dt>
          <dd
            style={{
              margin: 0,
              padding: "10px 0",
              color: site.onDarkSoft,
              borderTop: `1px solid ${site.ruleDarkSoft}`,
            }}
          >
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

/** Gabarit commun aux mentions légales, conditions et politique de confidentialité. */
export const LegalPage = ({ document }: { document: LegalDocument }) => (
  <div
    className="plt-site"
    style={{
      background: site.ink,
      color: site.onDark,
      fontFamily: SITE_SANS,
      overflowX: "hidden",
      WebkitFontSmoothing: "antialiased",
    }}
  >
    <header
      style={{
        background: gradients.hero,
        padding: `clamp(28px,4vw,52px) ${SITE_GUTTER} clamp(40px,6vw,72px)`,
      }}
    >
      {/* `inline-block` : le logotype est un bloc, une ancre en `inline` le
          laisserait s'étirer sur toute la largeur de l'en-tête. */}
      <a
        href="/"
        aria-label="Retour à l'accueil"
        style={{ display: "inline-block" }}
      >
        <Wordmark frosted />
      </a>

      <div style={{ maxWidth: 820, margin: "clamp(36px,6vw,64px) 0 0" }}>
        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 500,
            color: site.white,
            fontSize: "clamp(34px,5vw,64px)",
            lineHeight: 1.02,
            letterSpacing: ".01em",
            margin: 0,
          }}
        >
          {document.title}
        </h1>
        <p
          style={{
            margin: "18px 0 0",
            color: site.onDarkSoft,
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 620,
          }}
        >
          {document.lead}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 24,
          }}
        >
          <Rule width={40} color={site.accent} />
          <span
            style={{
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: site.onDarkFaint,
              fontWeight: 500,
            }}
          >
            Mise à jour le {document.updatedAt}
          </span>
        </div>
      </div>
    </header>

    <main
      style={{
        padding: `clamp(48px,7vw,88px) ${SITE_GUTTER} clamp(56px,8vw,110px)`,
      }}
    >
      <div style={{ maxWidth: 820 }}>
        {document.sections.map((section) => (
          <section key={section.title} style={{ marginBottom: 44 }}>
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(24px,2.8vw,34px)",
                lineHeight: 1.15,
                letterSpacing: ".01em",
                color: site.white,
                margin: "0 0 18px",
              }}
            >
              {section.title}
            </h2>
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </section>
        ))}
      </div>
    </main>

    <SiteFooter />
  </div>
);
