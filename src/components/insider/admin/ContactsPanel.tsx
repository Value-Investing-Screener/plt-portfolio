"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import {
  deleteMember,
  inviteMember,
  setMemberActive,
  setMemberRole,
} from "@/app/actions/members";
import {
  createPasswordResetLink,
  type ResetLink,
} from "@/app/actions/passwordReset";
import type { ActionResult } from "@/app/actions/publications";
import { colors, MONO } from "@/design/tokens";
import type { MemberRow } from "@/lib/plt/types";
import { EmptyState, Label, Panel, PrimaryButton } from "../ui";
import { ResetLinkModal } from "./ResetLinkModal";
import { INPUT_STYLE, SmallButton, type Flash, type RunAction } from "./shared";

const GRID = "1.4fr 1.8fr 0.9fr auto";

const initials = (name: string, email: string) =>
  (name.trim() || email)
    .split(/[\s@.]+/)
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const ContactsPanel = ({
  members,
  currentMemberId,
  runAction,
  notify,
}: {
  members: MemberRow[];
  currentMemberId: string;
  runAction: RunAction;
  notify: (flash: NonNullable<Flash>) => void;
}) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [draft, setDraft] = useState({ name: "", email: "" });

  // Lien de mot de passe affiché dans une modale (généré à la demande).
  const [resetLink, setResetLink] = useState<{
    memberName: string;
    link: ResetLink;
  } | null>(null);

  const run = (action: () => Promise<ActionResult>, onDone?: () => void) =>
    startTransition(async () => {
      if (await runAction(action)) {
        onDone?.();
        router.refresh();
      }
    });

  const generateLink = (member: MemberRow) =>
    startTransition(async () => {
      const result = await createPasswordResetLink(member.id);
      if (result.ok) {
        setResetLink({
          memberName: member.fullName || member.email,
          link: result.link,
        });
      } else {
        notify({ tone: "error", message: result.error });
      }
    });

  return (
    <Panel style={{ padding: 0, overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          padding: "22px clamp(18px,3vw,28px)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Label size={10.5} spacing=".16em">
          Contacts · accès clients
        </Label>
        <div style={{ fontFamily: MONO, fontSize: 12, color: colors.muted }}>
          {members.length} contact(s)
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: GRID,
          gap: 12,
          alignItems: "center",
          padding: "14px clamp(18px,3vw,28px)",
          background: colors.bar,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <input
          type="text"
          value={draft.name}
          onChange={(event) =>
            setDraft((current) => ({ ...current, name: event.target.value }))
          }
          placeholder="Nom du contact"
          aria-label="Nom du contact"
          style={{
            ...INPUT_STYLE,
            fontFamily: "inherit",
            fontSize: 13,
            padding: "10px 12px",
          }}
        />
        <input
          type="email"
          value={draft.email}
          onChange={(event) =>
            setDraft((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="adresse@exemple.fr"
          aria-label="Adresse e-mail du contact"
          style={{
            ...INPUT_STYLE,
            fontFamily: "inherit",
            fontSize: 13,
            padding: "10px 12px",
          }}
        />
        <span />
        <PrimaryButton
          disabled={pending}
          onClick={() =>
            run(
              () => inviteMember(draft.name, draft.email),
              () => setDraft({ name: "", email: "" })
            )
          }
          style={{
            fontSize: 12.5,
            padding: "10px 18px",
            whiteSpace: "nowrap",
          }}
        >
          + Inviter
        </PrimaryButton>
      </div>

      {members.length === 0 && (
        <EmptyState>Aucun contact — invitez un premier client.</EmptyState>
      )}

      {members.map((member) => {
        const isSelf = member.id === currentMemberId;
        const statusColor = member.isActive ? colors.positive : colors.muted;

        return (
          <div
            key={member.id}
            className="plt-row"
            style={{
              display: "grid",
              gridTemplateColumns: GRID,
              gap: 12,
              alignItems: "center",
              padding: "14px clamp(18px,3vw,28px)",
              borderBottom: `1px solid ${colors.borderRow}`,
              fontSize: 13,
              transition: "background .12s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "rgba(192,138,78,0.14)",
                  border: `1px solid rgba(192,138,78,0.3)`,
                  color: colors.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {initials(member.fullName, member.email)}
              </span>
              <span style={{ minWidth: 0 }}>
                <span
                  style={{
                    display: "block",
                    color: colors.text,
                    fontWeight: 600,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {member.fullName || "—"}
                </span>
                {member.role === "admin" && (
                  <Label size={9} spacing=".14em" color={colors.accent}>
                    Administrateur
                  </Label>
                )}
              </span>
            </div>

            <span
              style={{
                color: colors.muted,
                fontFamily: MONO,
                fontSize: 12,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {member.email}
            </span>

            <span
              style={{
                fontSize: 11,
                fontFamily: MONO,
                color: statusColor,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: statusColor,
                }}
              />
              {member.isActive ? "Actif" : "Suspendu"}
            </span>

            <div
              style={{
                display: "flex",
                gap: 8,
                justifyContent: "flex-end",
                flexWrap: "wrap",
              }}
            >
              <SmallButton
                label="Lien mot de passe"
                title="Générer un lien de définition du mot de passe à remettre au contact"
                disabled={pending}
                onClick={() => generateLink(member)}
                background="transparent"
                color={colors.text2}
                border="rgba(255,255,255,0.14)"
                className="plt-btn-outline"
              />
              <SmallButton
                label={member.role === "admin" ? "Passer membre" : "Passer admin"}
                title={
                  member.role === "admin"
                    ? "Retirer l'accès au backoffice"
                    : "Donner accès au backoffice"
                }
                disabled={pending || (isSelf && member.role === "admin")}
                onClick={() =>
                  run(() =>
                    setMemberRole(
                      member.id,
                      member.role === "admin" ? "user" : "admin"
                    )
                  )
                }
                background="transparent"
                color={member.role === "admin" ? colors.text2 : colors.accent}
                border={
                  member.role === "admin"
                    ? "rgba(255,255,255,0.14)"
                    : "rgba(192,138,78,0.5)"
                }
                className="plt-btn-outline"
              />
              <SmallButton
                label={member.isActive ? "Suspendre" : "Réactiver"}
                title={
                  member.isActive
                    ? "Suspendre l'accès sans supprimer le compte"
                    : "Rétablir l'accès"
                }
                disabled={pending || isSelf}
                onClick={() =>
                  run(() => setMemberActive(member.id, !member.isActive))
                }
                background="transparent"
                color={colors.text2}
                border="rgba(255,255,255,0.14)"
                className="plt-btn-outline"
              />
              <SmallButton
                label="Retirer"
                title="Supprimer définitivement le compte"
                disabled={pending || isSelf}
                onClick={() => run(() => deleteMember(member.id))}
                background="transparent"
                color={colors.negative}
                border="rgba(217,128,128,0.25)"
                className="plt-btn-danger"
              />
            </div>
          </div>
        );
      })}

      {resetLink && (
        <ResetLinkModal
          memberName={resetLink.memberName}
          link={resetLink.link}
          onClose={() => setResetLink(null)}
        />
      )}
    </Panel>
  );
};
