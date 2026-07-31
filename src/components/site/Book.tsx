import { gradients, SERIF, site, SITE_GUTTER } from "@/design/site";
import { Figure } from "./Figure";
import { IMAGES } from "./images";
import { SITE_LINKS } from "./links";
import { Cta, Rule } from "./ui";

const ASSETS = [
  "Une méthode pas à pas",
  "Des cas concrets d'analyse",
  "Pensé pour le long terme",
];

export const Book = () => (
  <section
    style={{
      background: gradients.book,
      color: site.onDark,
      padding: `clamp(72px,9vw,140px) ${SITE_GUTTER}`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Halo cuivre en bas-droite. */}
    <span
      aria-hidden
      style={{
        position: "absolute",
        bottom: -160,
        right: -120,
        width: 520,
        height: 520,
        borderRadius: "50%",
        background:
          "radial-gradient(circle,rgba(232,134,60,.20),transparent 65%)",
      }}
    />

    <div
      className="plt-s-collapse"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: ".82fr 1.18fr",
        gap: "clamp(40px,6vw,96px)",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/*
        Le visuel fourni est un rendu 3D détouré : perspective et tranche y
        sont déjà incluses, on ne rejoue donc aucune transformation. Restent
        le halo cuivre derrière et une ombre portée en `drop-shadow`, qui
        épouse la découpe là où un `box-shadow` dessinerait un rectangle.
      */}
      <div className="plt-s-media plt-s-reveal" style={{ width: "100%" }}>
        <div
          style={{
            position: "relative",
            width: "min(88%,340px)",
            margin: "0 auto",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "138%",
              height: "112%",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(232,134,60,.34),transparent 62%)",
              filter: "blur(6px)",
            }}
          />
          <Figure
            image={IMAGES.bookCover}
            tone="dark"
            fit="contain"
            ratio="900 / 1320"
            captionSize={10.5}
            style={{
              position: "relative",
              filter:
                "drop-shadow(0 6px 14px rgba(0,0,0,.5)) drop-shadow(22px 34px 46px rgba(0,0,0,.55))",
            }}
          />
        </div>
      </div>

      <div className="plt-s-body plt-s-reveal">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 26,
            flexWrap: "wrap",
          }}
        >
          <Rule width={40} color={site.accent} />
          <span
            style={{
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: site.accentWarm,
              fontWeight: 500,
            }}
          >
            Mon dernier livre
          </span>
          <span
            aria-hidden
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#8a6a48",
            }}
          />
          <span
            style={{
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: site.onDarkFaint,
              fontWeight: 500,
            }}
          >
            Éditions Hachette
          </span>
        </div>

        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 500,
            fontSize: "clamp(36px,5vw,68px)",
            lineHeight: 1,
            margin: "0 0 20px",
            letterSpacing: ".01em",
            color: site.white,
          }}
        >
          Surperformez en bourse
          <br />
          avec les small caps
        </h2>

        <p
          style={{
            color: site.onDarkSoft,
            fontSize: 16.5,
            lineHeight: 1.85,
            margin: "0 0 30px",
            maxWidth: 560,
          }}
        >
          Les petites capitalisations sont l&apos;un des terrains les plus
          féconds et les plus négligés de la bourse. Je partage ici la méthode
          que j&apos;applique au quotidien pour repérer les small caps de
          qualité, les analyser en profondeur et bâtir un portefeuille pensé
          pour le long terme.
        </p>

        <ul
          className="plt-s-assets"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            maxWidth: 560,
            margin: "0 0 38px",
            padding: "22px 0",
            listStyle: "none",
            borderTop: `1px solid ${site.ruleDarkSoft}`,
            borderBottom: `1px solid ${site.ruleDarkSoft}`,
          }}
        >
          {ASSETS.map((asset) => (
            <li key={asset}>
              <span aria-hidden style={{ color: site.accent, fontSize: 18 }}>
                ◆
              </span>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 14,
                  color: "#e8e1d6",
                  lineHeight: 1.5,
                }}
              >
                {asset}
              </p>
            </li>
          ))}
        </ul>

        <Cta href={SITE_LINKS.book} variant="solid">
          Découvrir le livre
        </Cta>
      </div>
    </div>
  </section>
);
