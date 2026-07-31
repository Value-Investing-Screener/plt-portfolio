import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ConfigView } from "@/components/insider/config/ConfigView";
import { getCurrentMember } from "@/lib/auth";
import { getPortfolios } from "@/lib/plt/queries";
import { routes } from "@/lib/routes";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Composition des portefeuilles · PLT Insider",
};

/** Vue de contrôle des portefeuilles modèles — réservée aux administrateurs. */
export default async function ConfigPage() {
  const member = await getCurrentMember();

  if (!member) redirect(routes.login);
  if (member.role !== "admin") redirect(routes.insider);

  const portfolios = await getPortfolios();

  return <ConfigView member={member} portfolios={portfolios} />;
}
