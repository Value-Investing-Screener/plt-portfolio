"use client";

import { useState } from "react";

import { colors, MONO } from "@/design/tokens";
import { monthLabelLong } from "@/lib/format";
import type { AnnualReview, MemberRow, Publication } from "@/lib/plt/types";
import type { PortfolioMeta } from "@/lib/portfolios";
import { Label, Panel, PrimaryButton, TabHeader } from "../ui";
import { AdminModal } from "./AdminModal";
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
type Modal = "publication" | "annual" | null;

export const AdminTab = ({ data }: { data: AdminData }) => {
  const { flash, notify, runAction } = useFlash();
  const [modal, setModal] = useState<Modal>(null);

  // Repères pour les sous-titres des cartes de lancement.
  const publishedMonths = data.publications.filter((p) => p.publishedAt);
  const lastMonth = publishedMonths[0]?.month;
  const publishedReviews = data.annualReviews.filter((r) => r.publishedAt);

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
        <LauncherCard
          title="Publication mensuelle"
          description={
            lastMonth
              ? `${publishedMonths.length} mois publiés · dernier : ${monthLabelLong(lastMonth)}`
              : "Aucun mois publié pour le moment"
          }
          onOpen={() => setModal("publication")}
        />
        <LauncherCard
          title="Revue annuelle"
          description={
            publishedReviews.length
              ? `${publishedReviews.length} exercice(s) publié(s)`
              : "Aucune revue publiée pour le moment"
          }
          onOpen={() => setModal("annual")}
        />
      </div>

      <ContactsPanel
        members={data.members}
        currentMemberId={data.currentMemberId}
        runAction={runAction}
        notify={notify}
      />

      {modal === "publication" && (
        <AdminModal
          overline="Backoffice"
          title="Publication mensuelle"
          onClose={() => setModal(null)}
        >
          <PublicationPanel
            portfolios={data.portfolios}
            publications={data.publications}
            runAction={runAction}
          />
        </AdminModal>
      )}

      {modal === "annual" && (
        <AdminModal
          overline="Backoffice"
          title="Revue annuelle"
          onClose={() => setModal(null)}
        >
          <AnnualPanel reviews={data.annualReviews} runAction={runAction} />
        </AdminModal>
      )}
    </div>
  );
};

/** Carte compacte qui ouvre une modale de gestion. */
const LauncherCard = ({
  title,
  description,
  onOpen,
}: {
  title: string;
  description: string;
  onOpen: () => void;
}) => (
  <Panel
    style={{
      padding: "22px clamp(18px,3vw,26px)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}
  >
    <div>
      <Label size={10.5} spacing=".16em">
        {title}
      </Label>
      <div
        style={{
          fontSize: 12.5,
          color: colors.text3,
          marginTop: 8,
          fontFamily: MONO,
        }}
      >
        {description}
      </div>
    </div>
    <PrimaryButton
      onClick={onOpen}
      style={{ alignSelf: "flex-start", fontSize: 12.5, padding: "10px 18px" }}
    >
      Gérer
    </PrimaryButton>
  </Panel>
);

