import { redirect } from "next/navigation";

import { AdminTab } from "@/components/insider/admin/AdminTab";
import { getCurrentMember } from "@/lib/auth";
import {
  getAnnualReviews,
  getMembers,
  getPortfolios,
  getPublications,
} from "@/lib/plt/queries";
import { routes } from "@/lib/routes";

export const dynamic = "force-dynamic";

/**
 * Les Server Actions du backoffice (invitation, publication, enregistrement
 * d'un document) s'exécutent dans la fonction de cette route : on laisse de la
 * marge pour l'envoi d'e-mail et la lecture des métadonnées de document.
 */
export const maxDuration = 60;

export default async function BackofficePage() {
  const member = await getCurrentMember();
  if (!member) redirect(routes.login);
  if (member.role !== "admin") redirect(routes.insider);

  // Les administrateurs voient aussi les brouillons.
  const [portfolios, publications, annualReviews, members] = await Promise.all([
    getPortfolios(),
    getPublications({ includeDrafts: true }),
    getAnnualReviews({ includeDrafts: true }),
    getMembers(),
  ]);

  return (
    <AdminTab
      data={{
        portfolios,
        publications,
        annualReviews,
        members,
        currentMemberId: member.id,
      }}
    />
  );
}
