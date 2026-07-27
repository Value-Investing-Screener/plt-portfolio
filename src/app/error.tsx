"use client";

import { useEffect } from "react";

import { colors, GUTTER, MONO } from "@/design/tokens";
import { Emblem, GhostButton, Label, Panel, PrimaryButton } from "@/components/insider/ui";

/**
 * Filet de sécurité : sans cette frontière, la moindre exception dans un
 * composant client remplace toute l'application par le message brut
 * « Application error: a client-side exception has occurred ».
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[PLT] erreur non rattrapée :", error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `48px ${GUTTER}`,
      }}
    >
      <Panel style={{ padding: "30px 32px", maxWidth: 520, width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <Emblem size={20} />
          <Label size={10} spacing=".22em" color={colors.accent}>
            PLT Insider
          </Label>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "-.01em",
            color: colors.textHi,
          }}
        >
          Une erreur est survenue
        </h1>
        <p
          style={{
            margin: "10px 0 20px",
            fontSize: 13,
            lineHeight: 1.6,
            color: colors.text3,
          }}
        >
          L&apos;affichage a été interrompu. Vos données ne sont pas affectées -
          réessayez, ou rechargez la page.
        </p>

        <div
          style={{
            background: colors.bg,
            border: `1px solid ${colors.borderRow}`,
            borderRadius: 6,
            padding: "12px 14px",
            fontFamily: MONO,
            fontSize: 11.5,
            lineHeight: 1.6,
            color: colors.muted,
            wordBreak: "break-word",
            marginBottom: 20,
          }}
        >
          {error.message || "Erreur inconnue"}
          {error.digest ? ` · ${error.digest}` : ""}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <PrimaryButton onClick={reset} style={{ flex: 1, borderRadius: 6 }}>
            Réessayer
          </PrimaryButton>
          <GhostButton
            onClick={() => window.location.assign("/")}
            style={{ flex: 1, borderRadius: 6 }}
          >
            Retour à l&apos;accueil
          </GhostButton>
        </div>
      </Panel>
    </main>
  );
}
