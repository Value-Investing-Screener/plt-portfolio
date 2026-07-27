"use client";

import { colors } from "@/design/tokens";
import { INPUT_STYLE, SmallButton } from "../shared";

/**
 * Diffusion e-mail à la publication : case d'activation, date de prochaine
 * réunion, objet et message éditables. L'état vit dans le formulaire parent.
 */
export const EmailSection = ({
  recipientCount,
  sendEmail,
  onToggleSend,
  meetingDate,
  onMeetingDate,
  subject,
  onSubject,
  body,
  onBody,
  onRegenerate,
}: {
  recipientCount: number;
  sendEmail: boolean;
  onToggleSend: (checked: boolean) => void;
  meetingDate: string;
  onMeetingDate: (value: string) => void;
  subject: string;
  onSubject: (value: string) => void;
  body: string;
  onBody: (value: string) => void;
  onRegenerate: () => void;
}) => (
  <div
    style={{
      background: colors.bg,
      border: `1px solid ${
        sendEmail ? "rgba(192,138,78,0.4)" : "rgba(255,255,255,0.07)"
      }`,
      borderRadius: 6,
      padding: sendEmail ? "14px 16px 16px" : "14px 16px",
      display: "flex",
      flexDirection: "column",
      gap: sendEmail ? 12 : 0,
    }}
  >
    <label
      style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
    >
      <input
        type="checkbox"
        checked={sendEmail}
        onChange={(event) => onToggleSend(event.target.checked)}
        style={{
          width: 17,
          height: 17,
          accentColor: colors.accent,
          cursor: "pointer",
        }}
      />
      <div>
        <div style={{ fontSize: 13, color: colors.text, fontWeight: 600 }}>
          Envoyer un e-mail à tous les clients
        </div>
        <div style={{ fontSize: 11.5, color: colors.muted }}>
          {recipientCount} client{recipientCount > 1 ? "s" : ""} actif
          {recipientCount > 1 ? "s" : ""} · envoyé à la publication
        </div>
      </div>
    </label>

    {sendEmail && (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <label
            htmlFor="plt-meeting"
            style={{ fontSize: 11.5, color: colors.text2 }}
          >
            Prochaine réunion
          </label>
          <input
            id="plt-meeting"
            type="datetime-local"
            value={meetingDate}
            onChange={(event) => onMeetingDate(event.target.value)}
            style={{ ...INPUT_STYLE, fontSize: 13 }}
          />
          <span style={{ fontSize: 11, color: colors.muted2 }}>
            facultatif — ajouté au message
          </span>
        </div>

        <input
          type="text"
          value={subject}
          onChange={(event) => onSubject(event.target.value)}
          placeholder="Objet de l'e-mail"
          aria-label="Objet de l'e-mail"
          style={{ ...INPUT_STYLE, fontFamily: "inherit", fontSize: 13 }}
        />
        <textarea
          value={body}
          onChange={(event) => onBody(event.target.value)}
          rows={13}
          aria-label="Message de l'e-mail"
          style={{
            ...INPUT_STYLE,
            fontFamily: "inherit",
            fontSize: 13,
            lineHeight: 1.6,
            resize: "vertical",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 11, color: colors.muted2 }}>
            Le texte entre **astérisques** apparaît en gras dans l&apos;e-mail.
          </span>
          <SmallButton
            label="Regénérer depuis les données du mois"
            onClick={onRegenerate}
            background="transparent"
            color={colors.text2}
            border="rgba(255,255,255,0.14)"
            className="plt-btn-outline"
          />
        </div>
      </>
    )}
  </div>
);
