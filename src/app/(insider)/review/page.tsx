import { ReviewTab } from "@/components/insider/ReviewTab";
import { getPortfolios, getPublications } from "@/lib/plt/queries";

export const dynamic = "force-dynamic";

export default async function ReviewPage() {
  const [portfolios, publications] = await Promise.all([
    getPortfolios(),
    getPublications(),
  ]);

  return <ReviewTab publications={publications} portfolios={portfolios} />;
}
