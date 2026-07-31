import { PerformancesTab } from "@/components/insider/PerformancesTab";
import { buildPerformance } from "@/lib/performance";
import { getPortfolios, getPublications } from "@/lib/plt/queries";

export const dynamic = "force-dynamic";

export default async function PerformancesPage() {
  const [portfolios, publications] = await Promise.all([
    getPortfolios(),
    getPublications(),
  ]);

  const performance = buildPerformance(
    publications.map(({ month, returns }) => ({ month, returns })),
    portfolios
  );

  return <PerformancesTab performance={performance} />;
}
