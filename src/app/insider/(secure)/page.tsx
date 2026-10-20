import { redirect } from "next/navigation";

import { AllocationTab } from "@/components/insider/allocation/AllocationTab";
import { getCurrentMember } from "@/lib/auth";
import { getAllocationSettings, getPortfolios } from "@/lib/plt/queries";
import { routes } from "@/lib/routes";

export const dynamic = "force-dynamic";

export default async function AllocationPage() {
  const member = await getCurrentMember();
  if (!member) redirect(routes.login);

  const [portfolios, settings] = await Promise.all([
    getPortfolios(),
    getAllocationSettings(member.id),
  ]);
  return <AllocationTab portfolios={portfolios} initialSettings={settings} />;
}
