import { AnnualTab } from "@/components/insider/AnnualTab";
import { buildPerformance } from "@/lib/performance";
import {
  getAnnualReviews,
  getPortfolios,
  getPublications,
} from "@/lib/plt/queries";

export const dynamic = "force-dynamic";

export default async function AnnualPage() {
  const [portfolios, publications, reviews] = await Promise.all([
    getPortfolios(),
    getPublications(),
    getAnnualReviews(),
  ]);

  // Les barres de performance par exercice alimentent la vitrine de chaque revue.
  const performance = buildPerformance(
    publications.map(({ month, returns }) => ({ month, returns })),
    portfolios
  );

  return <AnnualTab reviews={reviews} yearRows={performance?.yearRows ?? []} />;
}
