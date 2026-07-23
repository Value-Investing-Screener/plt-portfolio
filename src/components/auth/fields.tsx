import type { CSSProperties } from "react";

import { colors, MONO } from "@/design/tokens";
import { Label } from "@/components/insider/ui";

export const FIELD_STYLE: CSSProperties = {
  width: "100%",
  background: colors.bg,
  border: `1px solid ${colors.borderInput}`,
  borderRadius: 5,
  color: colors.textHi,
  fontFamily: "inherit",
  fontSize: 14,
  padding: "11px 14px",
  outline: "none",
};

export const Field = ({
  id,
  label,
  ...input
}: {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
    <Label size={10.5} spacing=".16em">
      <label htmlFor={id}>{label}</label>
    </Label>
    <input id={id} style={FIELD_STYLE} {...input} />
  </div>
);

/** Bandeau d'erreur ou de confirmation sous le formulaire. */
export const FormMessage = ({
  tone,
  children,
}: {
  tone: "error" | "success";
  children: React.ReactNode;
}) => {
  const error = tone === "error";
  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        background: error ? "rgba(217,128,128,0.1)" : "rgba(111,181,138,0.12)",
        border: `1px solid ${
          error ? "rgba(217,128,128,0.35)" : "rgba(111,181,138,0.4)"
        }`,
        borderRadius: 6,
        padding: "10px 14px",
        fontSize: 12.5,
        lineHeight: 1.5,
        color: error ? colors.negative : "#8FCBA3",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          flex: "none",
          background: error ? colors.negative : colors.positive,
        }}
      />
      {children}
    </div>
  );
};

/** Lien secondaire (mot de passe oublié, retour à la connexion). */
export const TextButton = ({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) => (
  <button
    type={type}
    onClick={onClick}
    className="plt-link-footer"
    style={{
      appearance: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: MONO,
      fontSize: 11.5,
      color: colors.muted,
      padding: 0,
      textDecoration: "underline",
      textUnderlineOffset: 3,
    }}
  >
    {children}
  </button>
);
