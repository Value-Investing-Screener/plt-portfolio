import type { ReactNode } from "react";

import { SERIF, site, SITE_GUTTER } from "@/design/site";
import { Figure, type FigureTone } from "./Figure";
import type { SiteImage } from "./images";
import { Cta, Kicker, TimelineRail } from "./ui";

export type LevelProps = {
  id?: string;
  /** Numéro affiché sur le rail — « 01 » … « 04 ». */
  number: string;
  kicker: string;
  title: string;
  subtitle: string;
  paragraphs: ReactNode[];
  cta: { href: string; label: string; variant: "solid" | "dark" | "light" };
  /** Geste secondaire, posé à côté du principal (accès à l'espace membre). */
  secondaryCta?: { href: string; label: string; variant: "solid" | "dark" | "light" };
  image: SiteImage;
  /** Crème ou sombre — commande la palette entière du bloc. */
  tone: "cream" | "dark";
  /** Côté de la colonne image en grand écran. */
  mediaSide: "left" | "right";
  /** Fond de la section : couleur unie ou dégradé. */
  background: string;
  padding: string;
  /**
   * Le niveau 4 est traité en « feature » : titre plus grand, colonne de
   * texte un peu plus large.
   */
  feature?: boolean;
};

/** Palette dérivée du fond de la section. */
const TONES = {
  cream: {
    text: site.onLight,
    kicker: site.accentInk,
    subtitle: site.accentDeep,
    body: site.onLightBody,
    figure: "cream" as FigureTone,
    onDark: false,
  },
  dark: {
    text: site.onDark,
    kicker: site.accent,
    subtitle: site.accentLight,
    body: site.onDarkSoft,
    figure: "dark" as FigureTone,
    onDark: true,
  },
};

export const Level = ({
  id,
  number,
  kicker,
  title,
  subtitle,
  paragraphs,
  cta,
  secondaryCta,
  image,
  tone,
  mediaSide,
  background,
  padding,
  feature = false,
}: LevelProps) => {
  const palette = TONES[tone];

  const media = <Figure image={image} tone={palette.figure} ratio="4 / 3" />;

  const body = (
    <div
      className="plt-s-body plt-s-reveal"
      style={{ display: "flex", gap: "clamp(20px,3vw,34px)" }}
    >
      <TimelineRail number={number} onDark={palette.onDark} />

      <div>
        <Kicker
          color={palette.kicker}
          spacing=".2em"
          style={{ marginBottom: 14 }}
        >
          {kicker}
        </Kicker>

        <h3
          style={{
            fontFamily: SERIF,
            fontWeight: 500,
            fontSize: feature
              ? "clamp(32px,4vw,54px)"
              : "clamp(30px,3.6vw,48px)",
            lineHeight: feature ? 1.02 : 1.03,
            margin: "0 0 16px",
            color: palette.onDark ? site.white : palette.text,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(18px,2vw,23px)",
            color: palette.subtitle,
            margin: "0 0 20px",
          }}
        >
          {subtitle}
        </p>

        {paragraphs.map((paragraph, index) => {
          const last = index === paragraphs.length - 1;
          return (
            <p
              key={index}
              style={{
                // Le dernier paragraphe d'un bloc « feature » est une chute :
                // on l'éclaircit pour le détacher du corps de texte.
                color:
                  feature && last && paragraphs.length > 1
                    ? site.onDarkHi
                    : palette.body,
                fontSize: 15.5,
                lineHeight: 1.8,
                margin: last ? "0 0 30px" : "0 0 16px",
                maxWidth: feature ? 540 : 520,
              }}
            >
              {paragraph}
            </p>
          );
        })}

        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Cta href={cta.href} variant={cta.variant}>
            {cta.label}
          </Cta>
          {secondaryCta ? (
            <Cta href={secondaryCta.href} variant={secondaryCta.variant}>
              {secondaryCta.label}
            </Cta>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id={id}
      style={{
        background,
        color: palette.text,
        padding: `${padding} ${SITE_GUTTER}`,
      }}
    >
      <div
        className="plt-s-collapse"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            mediaSide === "right" ? "1.05fr .95fr" : ".95fr 1.05fr",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
      >
        {mediaSide === "left" ? (
          <>
            <div className="plt-s-media plt-s-reveal">{media}</div>
            {body}
          </>
        ) : (
          <>
            {body}
            <div className="plt-s-media plt-s-reveal">{media}</div>
          </>
        )}
      </div>
    </section>
  );
};
