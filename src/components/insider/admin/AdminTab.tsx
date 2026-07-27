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
import { PublicationPanel } from "./publication/PublicationPanel";
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
      />

      {/* Toast fixe : visible même quand une modale est ouverte (z-index au-dessus). */}
      {flash && (
        <div
          role="status"
          className="plt-fade"
          style={{
            position: "fixed",
            top: 20,
            right: "clamp(16px,4vw,40px)",
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            gap: 9,
            maxWidth: "min(90vw, 420px)",
            background:
              flash.tone === "success" ? "rgba(18,32,26,0.98)" : "rgba(32,20,20,0.98)",
            border: `1px solid ${
              flash.tone === "success"
                ? "rgba(111,181,138,0.5)"
                : "rgba(217,128,128,0.5)"
            }`,
            borderRadius: 8,
            padding: "12px 16px",
            fontSize: 13,
            lineHeight: 1.4,
            color: flash.tone === "success" ? "#8FCBA3" : "#E5A2A2",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              flex: "none",
              background:
                flash.tone === "success" ? colors.positive : colors.negative,
            }}
          />
          {flash.message}
        </div>
      )}

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
            recipientCount={
              data.members.filter((member) => member.isActive).length
            }
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

