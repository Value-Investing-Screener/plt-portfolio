import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { getCurrentMember } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Connexion · PLT Insider",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { suite?: string; erreur?: string };
}) {
  const member = await getCurrentMember();
  if (member) redirect(searchParams.suite ?? "/");

  return (
    <AuthShell
      title="Connexion"
      subtitle="L'accès à PLT Insider est nominatif. Utilisez l'adresse e-mail communiquée à l'équipe ParlonsLongTerme."
      footer="Vous n'avez pas encore d'accès ? Contactez l'équipe ParlonsLongTerme : remi@parlons-long-terme.com"
    >
      <LoginForm
        next={searchParams.suite ?? "/"}
        initialError={
          searchParams.erreur === "lien"
            ? "Ce lien n'est plus valide. Demandez-en un nouveau ci-dessous."
            : undefined
        }
      />
    </AuthShell>
  );
}
