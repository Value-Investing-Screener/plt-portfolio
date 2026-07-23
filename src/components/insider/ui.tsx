import type { CSSProperties, ReactNode } from "react";

import { colors, GUTTER, MONO } from "@/design/tokens";

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

/** Panneau institutionnel : fond #14181B, bordure 1px, radius 8. */
export const Panel = ({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) => (
  <section
    className={className}
    style={{
      background: colors.panel,
      border: `1px solid ${colors.border}`,
      borderRadius: 8,
      ...style,
    }}
  >
    {children}
  </section>
);

/** Libellé de section : petites capitales très espacées. */
export const Label = ({
  children,
  size = 10.5,
  spacing = ".2em",
  color = colors.muted2,
  style,
}: {
  children: ReactNode;
  size?: number;
  spacing?: string;
  color?: string;
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

/** Chiffre / donnée — IBM Plex Mono, tabular-nums. */
export const Mono = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <span style={{ fontFamily: MONO, ...style }}>{children}</span>
);

/** Pastille carrée de couleur (légendes). */
export const Dot = ({ color, size = 8 }: { color: string; size?: number }) => (
  <span
    style={{ width: size, height: size, background: color, flex: "none" }}
  />
);

/** En-tête d'onglet : surtitre + titre + mention à droite. */
export const TabHeader = ({
  overline,
  title,
  aside,
  overlineColor = colors.muted2,
}: {
  overline: string;
  title: string;
  aside?: ReactNode;
  overlineColor?: string;
}) => (
  <section
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 12,
    }}
  >
    <div>
      <Label color={overlineColor} style={{ marginBottom: 7 }}>
        {overline}
      </Label>
      <div
        style={{
          fontSize: "clamp(18px,2.2vw,24px)",
          fontWeight: 600,
          letterSpacing: "-.01em",
        }}
      >
        {title}
      </div>
    </div>
    {aside ? (
      <div style={{ fontFamily: MONO, fontSize: 12, color: colors.muted }}>
        {aside}
      </div>
    ) : null}
  </section>
);

/* ------------------------------------------------------------------ */
/* Boutons                                                             */
/* ------------------------------------------------------------------ */

const BUTTON_BASE: CSSProperties = {
  appearance: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  fontWeight: 600,
  borderRadius: 5,
};

export const PrimaryButton = ({
  children,
  onClick,
  style,
  type = "button",
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  type?: "button" | "submit";
  disabled?: boolean;
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="plt-btn-primary"
    style={{
      ...BUTTON_BASE,
      fontSize: 13,
      padding: "12px 20px",
      border: "none",
      background: colors.accent,
      color: colors.bg,
      transition: "background .15s ease",
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style,
    }}
  >
    {children}
  </button>
);

export const GhostButton = ({
  children,
  onClick,
  style,
  type = "button",
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  type?: "button" | "submit";
  disabled?: boolean;
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="plt-btn-ghost"
    style={{
      ...BUTTON_BASE,
      fontSize: 13,
      padding: "12px",
      border: `1px solid rgba(192,138,78,0.5)`,
      background: "transparent",
      color: colors.accent,
      transition: "background .15s ease",
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style,
    }}
  >
    {children}
  </button>
);

/* ------------------------------------------------------------------ */
/* Icônes                                                              */
/* ------------------------------------------------------------------ */

/** Cloche d'alerte — changement sur un portefeuille. */
export const BellIcon = ({ size = 22 }: { size?: number }) => (
  <span
    title="Changement sur un portefeuille"
    style={{ flex: "none", width: size, height: size, color: colors.amber }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "100%", height: "100%" }}
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  </span>
);

/** Vignette « PDF ». */
export const PdfBadge = ({
  color,
  width = 38,
  height = 46,
  fontSize = 9,
}: {
  color: string;
  width?: number;
  height?: number;
  fontSize?: number;
}) => (
  <span
    style={{
      flex: "none",
      width,
      height,
      border: `1px solid ${color}`,
      borderRadius: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: MONO,
      fontSize,
      fontWeight: 600,
      color,
      letterSpacing: ".05em",
    }}
  >
    PDF
  </span>
);

/** Emblème PLT (fleur-de-lys). */
export const Emblem = ({
  size = 24,
  color = colors.accent,
}: {
  size?: number;
  color?: string;
}) => (
  <span style={{ fontSize: size, color, lineHeight: 1 }} aria-hidden>
    ⚜
  </span>
);

/* ------------------------------------------------------------------ */
/* États                                                               */
/* ------------------------------------------------------------------ */

export const Spinner = () => (
  <span
    className="plt-spin"
    style={{
      width: 18,
      height: 18,
      display: "inline-block",
      border: `2px solid rgba(255,255,255,0.12)`,
      borderTopColor: colors.accent,
      borderRadius: "50%",
    }}
  />
);

export const EmptyState = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      padding: `48px ${GUTTER}`,
      color: colors.muted2,
      fontSize: 12.5,
      letterSpacing: ".04em",
    }}
  >
    {children}
  </div>
);
