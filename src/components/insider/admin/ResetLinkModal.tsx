"use client";

import { useEffect, useState } from "react";

import type { ResetLink } from "@/app/actions/passwordReset";
import { colors, MONO } from "@/design/tokens";
import { Emblem, PrimaryButton } from "../ui";

/** « 26/07/2026 à 14:30 ». */
const formatDeadline = (iso: string) =>
  new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export const ResetLinkModal = ({
  memberName,
  link,
  onClose,
}: {
  memberName: string;
  link: ResetLink;
  onClose: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard indisponible (http, permission) : l'utilisateur copie à la main.
    }
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label="Lien de définition du mot de passe"
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
          maxWidth: 560,
          width: "100%",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
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
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Emblem size={20} />
            <div
              style={{ fontSize: 16, fontWeight: 600, color: colors.textHi }}
            >
              Lien de mot de passe
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
            padding: "24px clamp(20px,3vw,28px)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.6,
              color: colors.text3,
            }}
          >
            Transmettez ce lien à <strong style={{ color: colors.text }}>{memberName}</strong>{" "}
            par le canal de votre choix. Il lui permet de définir son mot de passe.
          </p>

          <div
            style={{
              display: "flex",
              gap: 8,
              background: colors.bg,
              border: `1px solid ${colors.borderInput}`,
              borderRadius: 6,
              padding: "10px 12px",
              alignItems: "center",
            }}
          >
            <input
              readOnly
              value={link.url}
              onFocus={(event) => event.target.select()}
              aria-label="Lien à copier"
              style={{
                flex: 1,
                minWidth: 0,
                background: "transparent",
                border: "none",
                color: colors.text2,
                fontFamily: MONO,
                fontSize: 12.5,
                outline: "none",
              }}
            />
            <PrimaryButton
              onClick={copy}
              style={{ padding: "8px 14px", fontSize: 12.5, whiteSpace: "nowrap" }}
            >
              {copied ? "Copié ✓" : "Copier"}
            </PrimaryButton>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: colors.amber,
              fontFamily: MONO,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: colors.amber,
                flex: "none",
              }}
            />
            Valable {link.validityHours} h — jusqu&apos;au{" "}
            {formatDeadline(link.expiresAt)}. Usage unique.
          </div>
        </div>
      </div>
    </div>
  );
};
