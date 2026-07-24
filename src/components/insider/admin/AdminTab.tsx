"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { importPerformanceCsv } from "@/app/actions/publications";
import { colors, MONO } from "@/design/tokens";
import type { AnnualReview, MemberRow, Publication } from "@/lib/plt/types";
import type { PortfolioMeta } from "@/lib/portfolios";
import { GhostButton, Label, Panel, TabHeader } from "../ui";
import { AnnualPanel } from "./AnnualPanel";
import { ContactsPanel } from "./ContactsPanel";
import { PublicationPanel } from "./PublicationPanel";
import { INPUT_STYLE, useFlash, type RunAction } from "./shared";

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

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <AnnualPanel reviews={data.annualReviews} runAction={runAction} />
          <BackfillPanel runAction={runAction} />
        </div>
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

/** Reprise d'historique : import en masse des performances passées. */
const BackfillPanel = ({ runAction }: { runAction: RunAction }) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [csv, setCsv] = useState("");

  return (
    <Panel
      style={{
        padding: "24px clamp(18px,3vw,28px)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <Label size={10.5} spacing=".16em">
        Reprise d&apos;historique
      </Label>
      <p
        style={{
          margin: 0,
          fontSize: 12,
          lineHeight: 1.6,
          color: colors.text3,
        }}
      >
        Une ligne par mois, dans l&apos;ordre des portefeuilles affichés. Les
        mois importés sont publiés immédiatement.
      </p>
      <textarea
        value={csv}
        onChange={(event) => setCsv(event.target.value)}
        rows={6}
        spellCheck={false}
        aria-label="Performances mensuelles au format CSV"
        placeholder={"mois,efficient,dividende,antifragile\n2024-01,2.10,1.05,0.80"}
        style={{
          ...INPUT_STYLE,
          fontFamily: MONO,
          fontSize: 12,
          lineHeight: 1.6,
          resize: "vertical",
        }}
      />
      <GhostButton
        disabled={pending || !csv.trim()}
        onClick={() =>
          startTransition(async () => {
            if (await runAction(() => importPerformanceCsv(csv))) {
              setCsv("");
              router.refresh();
            }
          })
        }
        style={{ borderRadius: 6, fontSize: 12.5 }}
      >
        Importer les performances
      </GhostButton>
    </Panel>
  );
};
