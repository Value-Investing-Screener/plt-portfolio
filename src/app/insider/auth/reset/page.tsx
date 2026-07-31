import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/AuthShell";
import { ResetForm } from "@/components/auth/ResetForm";

export const metadata: Metadata = {
  title: "Mot de passe · PLT Insider",
};

/**
 * Atteint depuis le lien reçu par e-mail (invitation ou réinitialisation) :
 * `/auth/confirm` a déjà échangé le jeton contre une session, il ne reste
 * qu'à choisir le mot de passe.
 */
export default function ResetPage() {
  return (
    <AuthShell
      title="Choisissez votre mot de passe"
      subtitle="Au moins 10 caractères. Il vous servira à accéder à votre espace client PLT Insider."
    >
      <ResetForm />
    </AuthShell>
  );
}
