import type { ReactNode } from "react";

import { SERIF, site, SITE_GUTTER } from "@/design/site";
import { Figure } from "./Figure";
import { IMAGES } from "./images";
import { ANCHORS } from "./links";
import { Kicker, Rule } from "./ui";

/** Mot-clé mis en avant dans les paragraphes de bio. */
const Key = ({ children }: { children: ReactNode }) => (
  <strong style={{ color: site.onDarkHi, fontWeight: 600 }}>{children}</strong>
);

export const Bio = () => (
  <section
    id={ANCHORS.bio}
    style={{
      background: site.panel,
      padding: `clamp(64px,9vw,130px) ${SITE_GUTTER}`,
    }}
  >
    <div
      className="plt-s-collapse"
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: ".9fr 1.1fr",
        gap: "clamp(28px,4vw,64px)",
        alignItems: "start",
      }}
    >
      {/* Portrait, et seconde photo en débord bas-droite. */}
      <div
        className="plt-s-media plt-s-reveal"
        style={{ position: "relative", paddingBottom: 60 }}
      >
        <Figure image={IMAGES.bioPortrait} tone="panel" ratio="3 / 4" />
        <Figure
          image={IMAGES.bioStage}
          tone="dark"
          ratio="4 / 3"
          captionSize={10}
          style={{
            position: "absolute",
            right: "-8%",
            bottom: 0,
            width: "62%",
            border: `6px solid ${site.panel}`,
          }}
        />
      </div>

      <div className="plt-s-body plt-s-reveal">
        <div
          style={{
            background: site.white,
            color: site.onLight,
            display: "inline-block",
            padding:
              "clamp(20px,3vw,34px) clamp(28px,4vw,52px) clamp(20px,3vw,30px)",
            marginBottom: "clamp(28px,4vw,44px)",
          }}
        >
          <Kicker style={{ marginBottom: 10 }}>Présentation</Kicker>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(34px,4.4vw,58px)",
              lineHeight: 1,
              margin: 0,
              letterSpacing: ".01em",
            }}
          >
            Rémi De Truchis
            <br />
            De Varennes
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 16,
            }}
          >
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(18px,2vw,24px)",
                color: site.onLightMuted,
              }}
            >
              Ingénieur et entrepreneur
            </span>
            <Rule width={56} />
          </div>
        </div>

        <div
          style={{
            maxWidth: 620,
            color: site.onDarkSoft,
            fontSize: 16,
            lineHeight: 1.85,
          }}
        >
          <p style={{ margin: "0 0 18px" }}>
            Ingénieur et entrepreneur, je construis depuis 2022 un groupe
            technologique européen dédié à l&apos;intelligence financière,{" "}
            <Key>Coding Capital</Key>, qui réunit un portefeuille de sociétés
            logicielles spécialisées dont Value Investing Screener, ma
            plateforme de recherche actions, IPO Arena et WizExpert.
          </p>
          <p style={{ margin: "0 0 18px" }}>
            Chroniqueur régulier sur <Key>BFM Business</Key> et auteur aux
            Éditions Hachette, je viens de publier «&nbsp;Surperformez en bourse
            avec les small caps&nbsp;». Et je partage ma méthode
            d&apos;investissement à travers <Key>Parlons Long Terme</Key>, mon
            média d&apos;éducation financière suivi par une large communauté
            d&apos;investisseurs francophones.
          </p>
          <p style={{ margin: "0 0 34px" }}>
            Rejoignez gratuitement la communauté Parlons Long Terme. Chaque
            mois, je décortique une action en détail dans ma newsletter, et vous
            restez informé en priorité de nos prochains événements et
            rencontres.
          </p>
        </div>

        <a
          href={`#${ANCHORS.level1}`}
          className="plt-s-cta-inline"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: ".02em",
          }}
        >
          {/* Bordure et couleurs de la pastille vivent dans `site.css` :
              en ligne, le survol ne pourrait pas les inverser. */}
          <span
            aria-hidden
            className="plt-s-bullet"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            ↓
          </span>
          Rejoindre la communauté gratuitement
        </a>
      </div>
    </div>
  </section>
);
