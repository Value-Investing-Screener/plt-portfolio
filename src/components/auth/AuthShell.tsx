import type { ReactNode } from "react";

import { colors, GUTTER } from "@/design/tokens";
import { Emblem, Label, Panel } from "@/components/insider/ui";

/** Cadre commun aux écrans de connexion et de mot de passe. */
export const AuthShell = ({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) => (
  <main
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `48px ${GUTTER}`,
    }}
  >
    <div style={{ width: "100%", maxWidth: 420 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            border: "1px solid rgba(230,234,236,0.45)",
            padding: "7px 10px",
            lineHeight: 1.05,
            fontSize: 10,
            letterSpacing: ".18em",
            color: colors.text,
            fontWeight: 600,
          }}
        >
          PARLONS
          <br />
          LONG
          <br />
          TERME
        </div>
        <div>
          <Label size={10} spacing=".26em" color={colors.accent}>
            Espace client · Confidentiel
          </Label>
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: colors.textHi,
              marginTop: 5,
            }}
          >
            PLT Insider
          </div>
        </div>
        <span style={{ marginLeft: "auto" }}>
          <Emblem size={22} />
        </span>
      </div>

      <Panel style={{ padding: "28px 30px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "-.01em",
            color: colors.textHi,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: "8px 0 24px",
            fontSize: 12.5,
            lineHeight: 1.6,
            color: colors.text3,
          }}
        >
          {subtitle}
        </p>
        {children}
      </Panel>

      {footer ? (
        <div
          style={{
            marginTop: 18,
            textAlign: "center",
            fontSize: 11.5,
            color: colors.muted2,
            lineHeight: 1.7,
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  </main>
);
