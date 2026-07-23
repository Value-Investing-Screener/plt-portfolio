"use client";

import { useState } from "react";

import { AdminTab, type AdminData } from "@/components/insider/admin/AdminTab";
import { AllocationTab } from "@/components/insider/allocation/AllocationTab";
import { AnnualTab } from "@/components/insider/AnnualTab";
import { CgvModal } from "@/components/insider/CgvModal";
import { Footer } from "@/components/insider/Footer";
import { PerformancesTab } from "@/components/insider/PerformancesTab";
import { ReviewTab } from "@/components/insider/ReviewTab";
import { TabsNav, type TabKey } from "@/components/insider/TabsNav";
import { Topbar } from "@/components/insider/Topbar";
import { GUTTER } from "@/design/tokens";
import type { Member } from "@/lib/auth";
import type { Performance } from "@/lib/performance";
import type { AnnualReview, Publication } from "@/lib/plt/types";
import type { PortfolioKey, PortfolioMeta } from "@/lib/portfolios";

export type InsiderAppProps = {
  member: Member;
  portfolios: PortfolioMeta[];
  publications: Publication[];
  annualReviews: AnnualReview[];
  performance: Performance | null;
  /** Renseigné uniquement pour les administrateurs. */
  admin: AdminData | null;
};

export const InsiderApp = ({
  member,
  portfolios,
  publications,
  annualReviews,
  performance,
  admin,
}: InsiderAppProps) => {
  const isAdmin = member.role === "admin" && admin !== null;

  const [tab, setTab] = useState<TabKey>("allocation");
  const [cgvOpen, setCgvOpen] = useState(false);

  // État d'allocation — porté ici pour survivre au changement d'onglet.
  const [capital, setCapital] = useState(100000);
  const [currency, setCurrency] = useState("EUR");
  const [exposures, setExposures] = useState<Record<PortfolioKey, number>>({
    efficient: 40,
    dividende: 35,
    antifragile: 25,
  });

  return (
    <main
      style={{ minHeight: "100vh", padding: "0 0 72px", position: "relative" }}
    >
      <Topbar member={member} />
      <TabsNav value={tab} onChange={setTab} isAdmin={isAdmin} />

      <div
        style={{
          padding: `28px ${GUTTER} 0`,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {tab === "allocation" && (
          <AllocationTab
            portfolios={portfolios}
            capital={capital}
            onCapitalChange={setCapital}
            currency={currency}
            onCurrencyChange={setCurrency}
            exposures={exposures}
            onExposureChange={(key, value) =>
              setExposures((current) => ({ ...current, [key]: value }))
            }
          />
        )}
        {tab === "performances" && (
          <PerformancesTab performance={performance} />
        )}
        {tab === "review" && (
          <ReviewTab publications={publications} portfolios={portfolios} />
        )}
        {tab === "annual" && (
          <AnnualTab
            reviews={annualReviews}
            yearRows={performance?.yearRows ?? []}
          />
        )}
        {/* Le rôle est revérifié côté serveur dans chaque Server Action :
            masquer l'onglet ne protège rien à lui seul. */}
        {tab === "admin" && isAdmin && admin && <AdminTab data={admin} />}

        <Footer onOpenCgv={() => setCgvOpen(true)} />
      </div>

      {cgvOpen && <CgvModal onClose={() => setCgvOpen(false)} />}
    </main>
  );
};
