"use client";

import { colors, MONO } from "@/design/tokens";
import { monthLabelLong } from "@/lib/format";
import { GhostButton, PrimaryButton } from "../../ui";

/** Boutons de publication / enregistrement / retrait + état du mois. */
export const PublishActions = ({
  month,
  published,
  publishedAt,
  sendEmail,
  pending,
  onPublish,
  onSave,
  onUnpublish,
}: {
  month: string;
  published: boolean;
  publishedAt: string | null;
  sendEmail: boolean;
  pending: boolean;
  onPublish: () => void;
  onSave: () => void;
  onUnpublish: () => void;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <PrimaryButton
      disabled={pending}
      onClick={onPublish}
      style={{ fontSize: 13.5, padding: 14, borderRadius: 6 }}
    >
      {published
        ? `Mettre à jour ${monthLabelLong(month).toLowerCase()}`
        : "Publier le compte rendu du mois"}
      {sendEmail ? " + e-mail" : ""}
    </PrimaryButton>

    <div style={{ display: "flex", gap: 10 }}>
      <GhostButton
        disabled={pending}
        onClick={onSave}
        style={{ flex: 1, borderRadius: 6, fontSize: 12.5 }}
      >
        Enregistrer sans publier
      </GhostButton>
      {published && (
        <GhostButton
          disabled={pending}
          onClick={onUnpublish}
          style={{
            flex: 1,
            borderRadius: 6,
            fontSize: 12.5,
            borderColor: "rgba(217,128,128,0.35)",
            color: colors.negative,
          }}
        >
          Retirer de l&apos;espace client
        </GhostButton>
      )}
    </div>

    <div
      style={{
        fontSize: 11.5,
        fontFamily: MONO,
        color: published ? colors.positive : colors.muted2,
        textAlign: "center",
      }}
    >
      {published && publishedAt
        ? `En ligne depuis le ${new Date(publishedAt).toLocaleDateString(
            "fr-FR"
          )}`
        : "Brouillon - invisible côté client"}
    </div>
  </div>
);
