"use client";

import { colors } from "@/design/tokens";
import type { AnnualReview, MemberRow, Publication } from "@/lib/plt/types";
import type { PortfolioMeta } from "@/lib/portfolios";
import { TabHeader } from "../ui";
import { AnnualPanel } from "./AnnualPanel";
import { ContactsPanel } from "./ContactsPanel";
import { PublicationPanel } from "./PublicationPanel";
import { useFlash } from "./shared";

export type AdminData = {
  portfolios: PortfolioMeta[];
  publications: Publication[];
  annualReviews: AnnualReview[];
  members: MemberRow[];
  currentMemberId: string;
};

/**
 * Backoffice — publication mensuelle, revue annuelle et gestion des accès.
 * Chaque écriture passe par une Server Action qui revérifie le rôle admin.
 */
export const AdminTab = ({ data }: { data: AdminData }) => {
  const { flash, notify, runAction } = useFlash();

  return (
    <div
      className="plt-fade"
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <TabHeader
        overline="Espace administrateur"
        overlineColor={colors.accent}
        title="Backoffice · gestion des publications & accès"
        aside={
          flash ? (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                background:
                  flash.tone === "success"
                    ? "rgba(111,181,138,0.12)"
                    : "rgba(217,128,128,0.1)",
                border: `1px solid ${
                  flash.tone === "success"
                    ? "rgba(111,181,138,0.4)"
                    : "rgba(217,128,128,0.35)"
                }`,
                borderRadius: 6,
                padding: "9px 16px",
                fontSize: 12.5,
                color: flash.tone === "success" ? "#8FCBA3" : colors.negative,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background:
                    flash.tone === "success" ? colors.positive : colors.negative,
                }}
              />
              {flash.message}
            </span>
          ) : undefined
        }
      />

      <div className="plt-admin">
        <PublicationPanel
          portfolios={data.portfolios}
          publications={data.publications}
          runAction={runAction}
        />

        <AnnualPanel reviews={data.annualReviews} runAction={runAction} />
      </div>

      <ContactsPanel
        members={data.members}
        currentMemberId={data.currentMemberId}
        runAction={runAction}
        notify={notify}
      />
    </div>
  );
};

