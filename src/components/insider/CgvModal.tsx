import { useEffect } from "react";

import { colors, MONO } from "@/design/tokens";
import { CGV_COMPANY, CGV_SECTIONS } from "@/lib/cgv";
import { Emblem, PrimaryButton } from "./ui";

export const CgvModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label="Conditions générales de vente"
      className="plt-fade"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(6,8,10,0.72)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px,4vw,56px)",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          background: colors.panel,
          border: `1px solid ${colors.borderInput}`,
          borderRadius: 10,
          maxWidth: 760,
          width: "100%",
          maxHeight: "86vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            padding: "22px clamp(20px,3vw,32px)",
            borderBottom: `1px solid ${colors.borderStrong}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Emblem size={22} />
            <div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: colors.accent,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                Parlons Long Terme
              </div>
              <div
                style={{ fontSize: 17, fontWeight: 600, color: colors.textHi }}
              >
                Conditions générales de vente
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="plt-btn-outline"
            style={{
              appearance: "none",
              background: "none",
              border: `1px solid rgba(255,255,255,0.14)`,
              borderRadius: 6,
              cursor: "pointer",
              color: colors.text2,
              width: 34,
              height: 34,
              fontSize: 16,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            overflowY: "auto",
            padding: "26px clamp(20px,3vw,32px)",
            fontSize: 13.5,
            lineHeight: 1.7,
            color: colors.text2,
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: colors.muted2,
              marginBottom: 22,
            }}
          >
            ParlonsLongTerme OÜ · Conditions générales de vente PLT Insider
          </div>
          {CGV_SECTIONS.map((section) => (
            <div key={section.title} style={{ marginBottom: 22 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: colors.textHi,
                  marginBottom: 7,
                  letterSpacing: "-.01em",
                }}
              >
                {section.title}
              </div>
              <div style={{ whiteSpace: "pre-line" }}>{section.body}</div>
            </div>
          ))}
          <div
            style={{
              marginTop: 8,
              paddingTop: 18,
              borderTop: `1px solid ${colors.border}`,
              fontSize: 12,
              color: colors.muted2,
            }}
          >
            {CGV_COMPANY}
          </div>
        </div>

        <div
          style={{
            padding: "16px clamp(20px,3vw,32px)",
            borderTop: `1px solid ${colors.borderStrong}`,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton onClick={onClose} style={{ padding: "11px 22px" }}>
            J&apos;ai compris
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
