import type { Metadata } from "next";

import { inspectPasswordResetToken } from "@/app/actions/passwordReset";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormMessage } from "@/components/auth/fields";
import { SetPasswordForm } from "@/components/auth/SetPasswordForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Définir mon mot de passe · PLT Insider",
};

const REASONS: Record<string, string> = {
  unknown: "Ce lien est invalide.",
  used: "Ce lien a déjà été utilisé.",
  expired: "Ce lien a expiré.",
};

/**
 * Atteinte via le lien remis par l'administrateur (jeton à usage unique,
 * valable 48 h). Publique : aucun compte n'est encore connecté.
 */
export default async function SetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token ?? "";
  const check = token
    ? await inspectPasswordResetToken(token)
    : ({ valid: false, reason: "unknown" } as const);

  if (!check.valid) {
    return (
      <AuthShell
        title="Lien indisponible"
        subtitle="Rapprochez-vous de l'équipe ParlonsLongTerme pour obtenir un nouveau lien."
        footer="remi@parlons-long-terme.com"
      >
        <FormMessage tone="error">{REASONS[check.reason]}</FormMessage>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Choisissez votre mot de passe"
      subtitle={`Au moins 10 caractères. Il vous servira à accéder à votre espace client PLT Insider (${check.email}).`}
    >
      <SetPasswordForm token={token} />
    </AuthShell>
  );
}
