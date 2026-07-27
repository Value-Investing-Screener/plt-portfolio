import { AllocationTab } from "@/components/insider/allocation/AllocationTab";
import { getPortfolios } from "@/lib/plt/queries";

export const dynamic = "force-dynamic";

export default async function AllocationPage() {
  const portfolios = await getPortfolios();
  return <AllocationTab portfolios={portfolios} />;
}
