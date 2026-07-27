"use client";

import { colors } from "@/design/tokens";
import { AdminSectionLabel, SLOT_STYLE } from "../shared";

/** Lien du replay vidéo (Vimeo). La durée est récupérée automatiquement. */
export const ReplaySection = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <div>
    <AdminSectionLabel>Replay vidéo</AdminSectionLabel>
    <div style={SLOT_STYLE}>
      <span
        style={{
          flex: "none",
          width: 52,
          height: 34,
          borderRadius: 4,
          background:
            "repeating-linear-gradient(135deg,#1A2024,#1A2024 6px,#151A1E 6px,#151A1E 12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(192,138,78,0.92)",
            color: colors.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 8,
            paddingLeft: 2,
          }}
        >
          ▶
        </span>
      </span>
      <input
        type="url"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Lien du replay (Vimeo)"
        aria-label="Lien du replay"
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          border: "none",
          color: colors.text,
          fontFamily: "inherit",
          fontSize: 13,
          outline: "none",
        }}
      />
    </div>
  </div>
);
