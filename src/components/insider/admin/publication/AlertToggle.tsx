"use client";

import { colors } from "@/design/tokens";

/** Case « Signaler un changement de portefeuille » (cloche d'alerte sur le mois). */
export const AlertToggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => (
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: colors.bg,
      border: `1px solid ${
        checked ? "rgba(201,161,94,0.5)" : "rgba(255,255,255,0.07)"
      }`,
      borderRadius: 6,
      padding: "14px 16px",
      cursor: "pointer",
    }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      style={{
        width: 17,
        height: 17,
        accentColor: colors.amber,
        cursor: "pointer",
      }}
    />
    <div>
      <div style={{ fontSize: 13, color: colors.text, fontWeight: 600 }}>
        Signaler un changement de portefeuille
      </div>
      <div style={{ fontSize: 11.5, color: colors.muted }}>
        Affiche une cloche d&apos;alerte sur ce mois
      </div>
    </div>
  </label>
);
