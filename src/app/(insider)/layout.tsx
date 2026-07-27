import { redirect } from "next/navigation";

import { FooterCgv } from "@/components/insider/FooterCgv";
import { TabsNav } from "@/components/insider/TabsNav";
import { Topbar } from "@/components/insider/Topbar";
import { GUTTER } from "@/design/tokens";
import { getCurrentMember } from "@/lib/auth";

/** Chrome commun à toutes les pages de l'espace : topbar, onglets, pied de page. */
export default async function InsiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const member = await getCurrentMember();
  if (!member) redirect("/login");

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
