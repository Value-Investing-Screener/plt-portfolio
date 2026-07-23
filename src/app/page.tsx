import { redirect } from "next/navigation";

import { InsiderApp } from "@/components/insider/InsiderApp";
import { getCurrentMember } from "@/lib/auth";
import { buildPerformance } from "@/lib/performance";
import {
  getAnnualReviews,
  getMembers,
  getPortfolios,
  getPublications,
} from "@/lib/plt/queries";

/** La session est lue à chaque requête : pas de pré-rendu statique. */
export const dynamic = "force-dynamic";

/**
 * Les Server Actions du backoffice s'exécutent dans la fonction de cette page :
 * l'upload d'un PDF de 25 Mo ou l'import d'un historique demandent plus que le
 * délai par défaut.
 */
export const maxDuration = 60;

export default async function Home() {
  const member = await getCurrentMember();
  if (!member) redirect("/login");

  const isAdmin = member.role === "admin";

  // Les administrateurs voient aussi les brouillons, pour les relire avant
  // publication depuis le même écran que les clients.
  const [portfolios, publications, annualReviews, members] = await Promise.all([
    getPortfolios(),
    getPublications({ includeDrafts: isAdmin }),
    getAnnualReviews({ includeDrafts: isAdmin }),
    isAdmin ? getMembers() : Promise.resolve([]),
  ]);

  // Seuls les mois publiés et chiffrés alimentent les courbes.
  const performance = buildPerformance(
    publications
      .filter((publication) => publication.publishedAt)
      .map(({ month, returns }) => ({ month, returns })),
    portfolios
  );

  const visiblePublications = publications.filter(
    (publication) => publication.publishedAt
  );

  return (
    <InsiderApp
      member={member}
      portfolios={portfolios}
      publications={visiblePublications}
      annualReviews={annualReviews.filter((review) => review.publishedAt)}
      performance={performance}
      admin={
        isAdmin
          ? {
              portfolios,
              publications,
              annualReviews,
              members,
              currentMemberId: member.id,
            }
          : null
      }
    />
  );
}
