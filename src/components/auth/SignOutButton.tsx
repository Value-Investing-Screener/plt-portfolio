"use client";

import { useTransition } from "react";

import { signOut } from "@/app/actions/auth";
import { colors } from "@/design/tokens";

export const SignOutButton = () => {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => signOut())}
      className="plt-btn-outline"
      style={{
        appearance: "none",
        cursor: pending ? "wait" : "pointer",
        fontFamily: "inherit",
        fontSize: 11.5,
        fontWeight: 600,
        letterSpacing: ".02em",
        padding: "7px 12px",
        borderRadius: 5,
        border: `1px solid rgba(255,255,255,0.14)`,
        background: "transparent",
        color: colors.text2,
        whiteSpace: "nowrap",
        transition: "border-color .15s ease, color .15s ease",
      }}
    >
      {pending ? "Déconnexion…" : "Déconnexion"}
    </button>
  );
};
