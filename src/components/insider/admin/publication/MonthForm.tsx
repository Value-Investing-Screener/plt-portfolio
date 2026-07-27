"use client";

import { useEffect, useState } from "react";

import type { Publication } from "@/lib/plt/types";
import type { PortfolioKey, PortfolioMeta } from "@/lib/portfolios";
import type { RunAction } from "../shared";
import { AlertToggle } from "./AlertToggle";
import { buildEmailDefaults } from "./emailTemplate";
import { EmailSection } from "./EmailSection";
import { PerfSection } from "./PerfSection";
import { PublishActions } from "./PublishActions";
import { ReplaySection } from "./ReplaySection";
import { ReportsSection } from "./ReportsSection";
import { usePublicationActions } from "./usePublicationActions";

/**
 * Formulaire d'un mois : détient l'état des champs (rapports affichés, replay,
 * perfs, alerte, e-mail) et compose les sections. Les actions asynchrones sont
 * déléguées au hook `usePublicationActions`.
 */
export const MonthForm = ({
  month,
  publication,
  portfolios,
  runAction,
  recipientCount,
}: {
  month: string;
  publication: Publication | null;
  portfolios: PortfolioMeta[];
  runAction: RunAction;
  recipientCount: number;
}) => {
  const { pending, uploadReport, removeReport, save, unpublish, publish } =
    usePublicationActions({ month, runAction });

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

  // Diffusion e-mail.
  const [sendEmail, setSendEmail] = useState(false);
  const [meetingDate, setMeetingDate] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  // Dès que l'admin retouche le message, on cesse de le regénérer.
  const [emailEdited, setEmailEdited] = useState(false);

  const regenerateEmail = () => {
    const defaults = buildEmailDefaults(
      month,
      portfolios,
      returns,
      replayUrl,
      hasAlert,
      meetingDate
    );
    setEmailSubject(defaults.subject);
    setEmailBody(defaults.body);
  };

  // Tant qu'il n'est pas retouché, le message suit les données du mois.
  useEffect(() => {
    if (!sendEmail || emailEdited) return;
    regenerateEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendEmail, emailEdited, month, replayUrl, hasAlert, meetingDate, returns]);

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

  return (
    <>
      <ReportsSection
        portfolios={portfolios}
        publication={publication}
        pending={pending}
        onUpload={uploadReport}
        onRemove={removeReport}
      />

      <ReplaySection value={replayUrl} onChange={setReplayUrl} />

      <PerfSection
        portfolios={portfolios}
        returns={returns}
        onChange={(key, value) =>
          setReturns((current) => ({ ...current, [key]: value }))
        }
      />

      <AlertToggle checked={hasAlert} onChange={setHasAlert} />

      <EmailSection
        recipientCount={recipientCount}
        sendEmail={sendEmail}
        onToggleSend={setSendEmail}
        meetingDate={meetingDate}
        onMeetingDate={setMeetingDate}
        subject={emailSubject}
        onSubject={(value) => {
          setEmailSubject(value);
          setEmailEdited(true);
        }}
        body={emailBody}
        onBody={(value) => {
          setEmailBody(value);
          setEmailEdited(true);
        }}
        onRegenerate={() => {
          setEmailEdited(false);
          regenerateEmail();
        }}
      />

      <PublishActions
        month={month}
        published={published}
        publishedAt={publication?.publishedAt ?? null}
        sendEmail={sendEmail}
        pending={pending}
        onPublish={() =>
          publish(
            draft(),
            sendEmail ? { subject: emailSubject, body: emailBody } : null
          )
        }
        onSave={() => save(draft())}
        onUnpublish={unpublish}
      />
    </>
  );
};
