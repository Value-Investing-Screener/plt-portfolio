import type { CSSProperties, ReactNode } from "react";

import { SERIF, site } from "@/design/site";

/** Fleur de lys — glyphe identitaire de la marque (U+269C). */
export const Fleur = ({
  size = 26,
  color = site.accent,
}: {
  size?: number;
  color?: string;
}) => (
  <span aria-hidden style={{ fontSize: size, color, lineHeight: 1 }}>
    ⚜
  </span>
);

/** Logotype encadré « Parlons / Long / Terme . ». */
export const Wordmark = ({
  size = 16,
  padding = "10px 14px",
  frosted = false,
}: {
  size?: number;
  padding?: string;
  /** Verre dépoli du hero, posé sur le dégradé. */
  frosted?: boolean;
}) => (
  <div
    style={{
      border: "1px solid rgba(255,255,255,.55)",
      padding,
      lineHeight: 1.02,
      fontFamily: SERIF,
      color: site.white,
      fontSize: size,
      letterSpacing: ".04em",
      ...(frosted
        ? {
            background: "rgba(255,255,255,.04)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }
        : null),
    }}
  >
    Parlons
    <br />
    Long
    <br />
    Terme <span style={{ color: site.accent }}>.</span>
  </div>
);

/** Filet horizontal fin. */
export const Rule = ({
  width = 60,
  color = site.ruleLight,
  style,
}: {
  width?: number | string;
  color?: string;
  style?: CSSProperties;
}) => (
  <span
    aria-hidden
    style={{
      display: "inline-block",
      height: 1,
      width,
      background: color,
      flex: "none",
      ...style,
    }}
  />
);

/** Sur-titre de section : capitales espacées, cuivre. */
export const Kicker = ({
  children,
  color = site.accentInk,
  size = 12,
  spacing = ".24em",
  style,
}: {
  children: ReactNode;
  color?: string;
  size?: number;
  spacing?: string;
  style?: CSSProperties;
}) => (
  <div
    style={{
      fontSize: size,
      letterSpacing: spacing,
      textTransform: "uppercase",
      color,
      fontWeight: 600,
      ...style,
    }}
  >
    {children}
  </div>
);

/**
 * Trois traitements de bouton. Leur apparence est décrite dans `site.css` et
 * non ici : un style en ligne l'emporterait sur les règles `:hover`, qui ne
 * pourraient plus inverser fond et texte.
 *
 * - `solid` — plein cuivre, le geste principal (livre, PLT Insider)
 * - `dark`  — bordé sombre, sections crème
 * - `light` — bordé clair, sections sombres
 */
const CTA_VARIANTS = {
  solid: "plt-s-cta plt-s-cta-solid",
  dark: "plt-s-cta plt-s-cta-dark",
  light: "plt-s-cta plt-s-cta-light",
} as const;

export type CtaVariant = keyof typeof CTA_VARIANTS;

export const Cta = ({
  href,
  variant,
  children,
}: {
  href: string;
  variant: CtaVariant;
  children: ReactNode;
}) => (
  <a href={href} className={CTA_VARIANTS[variant]}>
    {children}
  </a>
);

/**
 * Colonne de repère d'un niveau du parcours : fleur de lys, filet vertical,
 * numéro. Elle donne au bloc son allure de progression.
 */
export const TimelineRail = ({
  number,
  onDark = false,
}: {
  number: string;
  onDark?: boolean;
}) => (
  <div
    aria-hidden
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      flex: "none",
    }}
  >
    <Fleur />
    <span
      style={{
        width: 1,
        flex: 1,
        minHeight: 40,
        background: onDark ? site.ruleDark : site.ruleCream,
      }}
    />
    <span
      style={{
        fontFamily: SERIF,
        fontSize: 26,
        color: onDark ? "#6f665c" : "#9a9084",
      }}
    >
      {number}
    </span>
  </div>
);
