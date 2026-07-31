import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { FooterCgv } from "@/components/insider/FooterCgv";
import { TabsNav } from "@/components/insider/TabsNav";
import { Topbar } from "@/components/insider/Topbar";
import { GUTTER } from "@/design/tokens";
import { getCurrentMember } from "@/lib/auth";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    default: "PLT Insider · Espace client",
    template: "%s · PLT Insider",
  },
  description:
    "Espace client PLT Insider - allocation, performances et comptes rendus des portefeuilles Parlons Long Terme.",
  // Espace nominatif : rien à indexer.
  robots: { index: false, follow: false },
};

/** Chrome commun à toutes les pages de l'espace : topbar, onglets, pied de page. */
export default async function InsiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const member = await getCurrentMember();
  if (!member) redirect(routes.login);

  return (
    <main
      style={{ minHeight: "100vh", padding: "0 0 72px", position: "relative" }}
    >
      <Topbar member={member} />
      <TabsNav isAdmin={member.role === "admin"} />

      <div
        style={{
          padding: `28px ${GUTTER} 0`,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {children}
        <FooterCgv />
      </div>
    </main>
  );
}
