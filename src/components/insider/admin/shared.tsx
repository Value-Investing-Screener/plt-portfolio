"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import type { ActionResult } from "@/app/actions/publications";
import { colors, MONO } from "@/design/tokens";

export const INPUT_STYLE: CSSProperties = {
  background: colors.bg,
  border: `1px solid rgba(255,255,255,0.12)`,
  borderRadius: 5,
  color: colors.text,
  fontFamily: MONO,
  fontSize: 12.5,
  padding: "7px 10px",
  outline: "none",
  colorScheme: "dark",
};

export const SLOT_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  background: colors.bg,
  border: `1px solid rgba(255,255,255,0.07)`,
  borderRadius: 6,
  padding: "12px 14px",
};

/** Apparence d'un emplacement de document selon qu'il est rempli ou non. */
export const fileSlot = (
  loaded: boolean,
  {
    uploadLabel = "Charger PDF",
    emptyLabel = "Aucun fichier",
    loadedLabel = "Fichier chargé",
  } = {}
) =>
  loaded
    ? {
        stateStr: loadedLabel,
        stateColor: colors.positive,
        btnLabel: "Retirer",
        btnBackground: "transparent",
        btnColor: colors.negative,
        btnBorder: "rgba(217,128,128,0.3)",
      }
    : {
        stateStr: emptyLabel,
        stateColor: colors.muted2,
        btnLabel: uploadLabel,
        btnBackground: "rgba(192,138,78,0.12)",
        btnColor: colors.accent,
        btnBorder: "rgba(192,138,78,0.5)",
      };

export const SmallButton = ({
  label,
  onClick,
  background,
  color,
  border,
  title,
  className,
  disabled = false,
}: {
  label: string;
  onClick: () => void;
  background: string;
  color: string;
  border: string;
  title?: string;
  className?: string;
  disabled?: boolean;
}) => (
  <button
    type="button"
    title={title}
    onClick={onClick}
    disabled={disabled}
    className={className}
    style={{
      appearance: "none",
      cursor: disabled ? "wait" : "pointer",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 600,
      padding: "8px 14px",
      borderRadius: 5,
      border: `1px solid ${border}`,
      background,
      color,
      whiteSpace: "nowrap",
      opacity: disabled ? 0.6 : 1,
      transition: "background .15s ease, border-color .15s ease",
    }}
  >
    {label}
  </button>
);

/**
 * Bouton déclenchant un sélecteur de fichier caché — le `<input type=file>`
 * natif ne se style pas, et le design attend un bouton comme les autres.
 */
export const UploadButton = ({
  label,
  onFile,
  disabled = false,
  background,
  color,
  border,
}: {
  label: string;
  onFile: (file: File) => void;
  disabled?: boolean;
  background: string;
  color: string;
  border: string;
}) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={input}
        type="file"
        accept="application/pdf"
        hidden
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onFile(file);
          // Permet de re-sélectionner le même fichier après un retrait.
          event.target.value = "";
        }}
      />
      <SmallButton
        label={label}
        onClick={() => input.current?.click()}
        disabled={disabled}
        background={background}
        color={color}
        border={border}
      />
    </>
  );
};

export const AdminSectionLabel = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: colors.muted2,
      fontWeight: 600,
      marginBottom: 10,
    }}
  >
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/* Messages éphémères                                                  */
/* ------------------------------------------------------------------ */

export type Flash = { tone: "success" | "error"; message: string } | null;

/** Message de confirmation ou d'erreur, effacé après quelques secondes. */
export const useFlash = () => {
  const [flash, setFlash] = useState<Flash>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const notify = useCallback((next: NonNullable<Flash>) => {
    clearTimeout(timer.current);
    setFlash(next);
    timer.current = setTimeout(() => setFlash(null), 4000);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  /**
   * Exécute une Server Action et affiche son résultat.
   *
   * Une action peut aussi échouer *avant* de renvoyer quoi que ce soit —
   * requête rejetée, corps trop volumineux, déploiement remplacé pendant la
   * session. On le traite comme une erreur affichable plutôt que de laisser
   * remonter une exception qui ferait tomber toute la page.
   */
  const runAction = useCallback(
    async (action: () => Promise<ActionResult | undefined>) => {
      try {
        const result = await action();

        if (!result) {
          notify({
            tone: "error",
            message: "Le serveur n'a pas répondu. Rechargez la page et réessayez.",
          });
          return false;
        }

        notify(
          result.ok
            ? { tone: "success", message: result.message }
            : { tone: "error", message: result.error }
        );
        return result.ok;
      } catch (error) {
        notify({
          tone: "error",
          message:
            error instanceof Error ? error.message : "Action impossible.",
        });
        return false;
      }
    },
    [notify]
  );

  return { flash, notify, runAction };
};

/** Signature partagée par les panneaux du backoffice. */
export type RunAction = (
  action: () => Promise<ActionResult | undefined>
) => Promise<boolean>;
