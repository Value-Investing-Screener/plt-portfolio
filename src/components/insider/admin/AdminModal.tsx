"use client";

import { useEffect, type ReactNode } from "react";

import { colors } from "@/design/tokens";
import { Label } from "../ui";

/** Modale d'administration : en-tête (titre + fermeture) et corps défilant. */
export const AdminModal = ({
  title,
  overline,
  onClose,
  children,
}: {
  title: string;
  overline?: string;
  onClose: () => void;
  children: ReactNode;
}) => {
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
      aria-label={title}
      className="plt-fade"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(6,8,10,0.72)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "clamp(16px,5vh,64px) clamp(16px,4vw,56px)",
        overflowY: "auto",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          background: colors.panel,
          border: `1px solid ${colors.borderInput}`,
          borderRadius: 10,
          maxWidth: 720,
          width: "100%",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          maxHeight: "88vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            padding: "22px clamp(20px,3vw,28px)",
            borderBottom: `1px solid ${colors.borderStrong}`,
          }}
        >
          <div>
            {overline ? (
              <Label size={10} spacing=".22em" color={colors.accent}>
                {overline}
              </Label>
            ) : null}
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: colors.textHi,
                marginTop: overline ? 5 : 0,
              }}
            >
              {title}
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
              flex: "none",
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            overflowY: "auto",
            padding: "24px clamp(20px,3vw,28px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
