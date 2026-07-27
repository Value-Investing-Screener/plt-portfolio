"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";

import {
  publishMonth,
  removeReport,
  savePublication,
  unpublishMonth,
  uploadReport,
  type ActionResult,
} from "@/app/actions/publications";
import { colors, MONO } from "@/design/tokens";
import { documentMeta, monthLabelLong } from "@/lib/format";
import type { Publication } from "@/lib/plt/types";
import type { PortfolioKey, PortfolioMeta } from "@/lib/portfolios";
import { GhostButton, PdfBadge, PrimaryButton } from "../ui";
import {
  AdminSectionLabel,
  fileSlot,
  INPUT_STYLE,
  SLOT_STYLE,
  SmallButton,
  UploadButton,
  type RunAction,
} from "./shared";

/** Mois courant au format « 2026-07 ». */
const currentMonth = () => new Date().toISOString().slice(0, 7);

type PublicationPanelProps = {
  portfolios: PortfolioMeta[];
  publications: Publication[];
  runAction: RunAction;
};

export const PublicationPanel = ({
  portfolios,
  publications,
  runAction,
}: PublicationPanelProps) => {
  const [month, setMonth] = useState(currentMonth);

  const publication = useMemo(
    () => publications.find((item) => item.month === month) ?? null,
    [publications, month]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <label
          htmlFor="plt-admin-month"
          style={{ fontSize: 11, color: colors.muted }}
        >
          Mois
        </label>
        <input
          id="plt-admin-month"
          type="month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          style={INPUT_STYLE}
        />
      </div>

      {/* Le formulaire est remonté à zéro quand on change de mois. */}
      <MonthForm
        key={month}
        month={month}
        publication={publication}
        portfolios={portfolios}
        runAction={runAction}
      />
    </div>
  );
};

const MonthForm = ({
  month,
  publication,
  portfolios,
  runAction,
}: {
  month: string;
  publication: Publication | null;
  portfolios: PortfolioMeta[];
  runAction: RunAction;
}) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const [hasAlert, setHasAlert] = useState(publication?.hasAlert ?? false);
  const [replayUrl, setReplayUrl] = useState(publication?.replayUrl ?? "");
  const [returns, setReturns] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      portfolios.map((portfolio) => [
        portfolio.key,
        publication?.returns[portfolio.key] !== undefined
          ? String(publication?.returns[portfolio.key])
          : "",
      ])
    )
  );

  const published = Boolean(publication?.publishedAt);

  const draft = () => ({
    month,
    hasAlert,
    replayUrl: replayUrl.trim() || null,
    returns: Object.fromEntries(
      portfolios.map((portfolio) => [
        portfolio.key,
        returns[portfolio.key] === "" ? null : Number(returns[portfolio.key]),
      ])
    ) as Partial<Record<PortfolioKey, number | null>>,
  });

  const run = (action: () => Promise<ActionResult>) =>
    startTransition(async () => {
      if (await runAction(action)) router.refresh();
    });

  const upload = (portfolioKey: PortfolioKey, file: File) => {
    const formData = new FormData();
    formData.set("month", month);
    formData.set("portfolioKey", portfolioKey);
    formData.set("file", file);
    run(() => uploadReport(formData));
  };

  return (
    <>
      <div>
        <AdminSectionLabel>
          Rapports PDF · un par portefeuille
        </AdminSectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {portfolios.map((portfolio) => {
            const existing = publication?.reports.find(
              (item) => item.portfolioKey === portfolio.key
            );
            const state = fileSlot(Boolean(existing));

            return (
              <div key={portfolio.key} style={SLOT_STYLE}>
                <PdfBadge
                  color={portfolio.color}
                  width={34}
                  height={42}
                  fontSize={8.5}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: colors.text,
                      fontWeight: 600,
                    }}
                  >
                    Rapport — {portfolio.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontFamily: MONO,
                      marginTop: 2,
                      color: state.stateColor,
                    }}
                  >
                    {existing
                      ? documentMeta(existing.pageCount, existing.fileSizeBytes)
                      : state.stateStr}
                  </div>
                </div>
                {existing ? (
                  <SmallButton
                    label={state.btnLabel}
                    disabled={pending}
                    onClick={() =>
                      run(() => removeReport(month, portfolio.key))
                    }
                    background={state.btnBackground}
                    color={state.btnColor}
                    border={state.btnBorder}
                  />
                ) : (
                  <UploadButton
                    label={state.btnLabel}
                    disabled={pending}
                    onFile={(file) => upload(portfolio.key, file)}
                    background={state.btnBackground}
                    color={state.btnColor}
                    border={state.btnBorder}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <AdminSectionLabel>Replay vidéo</AdminSectionLabel>
        <div style={SLOT_STYLE}>
          <span
            style={{
              flex: "none",
              width: 52,
              height: 34,
              borderRadius: 4,
              background:
                "repeating-linear-gradient(135deg,#1A2024,#1A2024 6px,#151A1E 6px,#151A1E 12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(192,138,78,0.92)",
                color: colors.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                paddingLeft: 2,
              }}
            >
              ▶
            </span>
          </span>
          <input
            type="url"
            value={replayUrl}
            onChange={(event) => setReplayUrl(event.target.value)}
            placeholder="Lien du replay (Vimeo)"
            aria-label="Lien du replay"
            style={{
              flex: 1,
              minWidth: 0,
              background: "transparent",
              border: "none",
              color: colors.text,
              fontFamily: "inherit",
              fontSize: 13,
              outline: "none",
            }}
          />
        </div>
      </div>

      <div>
        <AdminSectionLabel>Performances mensuelles (%)</AdminSectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
            gap: 10,
          }}
        >
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.key}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <label
                htmlFor={`plt-perf-${portfolio.key}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 11.5,
                  color: colors.textSoft,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: portfolio.color,
                    flex: "none",
                  }}
                />
                {portfolio.name.replace(/^Portefeuille\s+/i, "")}
              </label>
              <input
                id={`plt-perf-${portfolio.key}`}
                type="number"
                step="0.01"
                placeholder="+ 0,00"
                value={returns[portfolio.key] ?? ""}
                onChange={(event) =>
                  setReturns((current) => ({
                    ...current,
                    [portfolio.key]: event.target.value,
                  }))
                }
                style={{ ...INPUT_STYLE, fontSize: 14, padding: "9px 11px" }}
              />
            </div>
          ))}
        </div>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: colors.bg,
          border: `1px solid ${
            hasAlert ? "rgba(201,161,94,0.5)" : "rgba(255,255,255,0.07)"
          }`,
          borderRadius: 6,
          padding: "14px 16px",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={hasAlert}
          onChange={(event) => setHasAlert(event.target.checked)}
          style={{
            width: 17,
            height: 17,
            accentColor: colors.amber,
            cursor: "pointer",
          }}
        />
        <div>
          <div style={{ fontSize: 13, color: colors.text, fontWeight: 600 }}>
            Signaler un changement de portefeuille
          </div>
          <div style={{ fontSize: 11.5, color: colors.muted }}>
            Affiche une cloche d&apos;alerte sur ce mois
          </div>
        </div>
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <PrimaryButton
          disabled={pending}
          onClick={() => run(() => publishMonth(draft()))}
          style={{ fontSize: 13.5, padding: 14, borderRadius: 6 }}
        >
          {published
            ? `Mettre à jour ${monthLabelLong(month).toLowerCase()}`
            : "Publier le compte rendu du mois"}
        </PrimaryButton>

        <div style={{ display: "flex", gap: 10 }}>
          <GhostButton
            disabled={pending}
            onClick={() => run(() => savePublication(draft()))}
            style={{ flex: 1, borderRadius: 6, fontSize: 12.5 }}
          >
            Enregistrer sans publier
          </GhostButton>
          {published && (
            <GhostButton
              disabled={pending}
              onClick={() => run(() => unpublishMonth(month))}
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
          {published
            ? `En ligne depuis le ${new Date(
                publication!.publishedAt!
              ).toLocaleDateString("fr-FR")}`
            : "Brouillon — invisible côté client"}
        </div>
      </div>
    </>
  );
};
