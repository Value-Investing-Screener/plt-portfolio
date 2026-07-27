"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { sendClientBroadcast } from "@/app/actions/broadcast";
import {
  createReportUploadUrl,
  publishMonth,
  registerReport,
  removeReport as removeReportAction,
  savePublication,
  unpublishMonth,
  type ActionResult,
  type PublicationDraft,
} from "@/app/actions/publications";
import { uploadToSignedUrl, validateDocument } from "@/lib/plt/upload";
import type { PortfolioKey } from "@/lib/portfolios";
import type { RunAction } from "../shared";

/** Contenu de l'e-mail à diffuser, ou `null` pour publier sans e-mail. */
export type EmailPayload = { subject: string; body: string } | null;

/**
 * Actions de publication d'un mois (upload, publication, diffusion, retrait).
 *
 * Un unique `useTransition` porte le `pending` de tout le formulaire : pendant
 * n'importe quelle action, tous les contrôles se désactivent. Chaque action
 * remonte son résultat via `runAction` (toast) et rafraîchit à la réussite.
 * Les données de formulaire (brouillon, e-mail) sont passées à l'appel — le
 * hook sait comment exécuter, pas ce que contiennent les champs.
 */
export const usePublicationActions = ({
  month,
  runAction,
}: {
  month: string;
  runAction: RunAction;
}) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const run = (action: () => Promise<ActionResult>) =>
    startTransition(async () => {
      if (await runAction(action)) router.refresh();
    });

  // Transfert direct navigateur → Supabase (URL signée), puis enregistrement.
  const uploadReport = (portfolioKey: PortfolioKey, file: File) =>
    run(async () => {
      const invalid = validateDocument(file);
      if (invalid) return { ok: false as const, error: invalid };

      const signed = await createReportUploadUrl(month, portfolioKey);
      if (!signed.ok) return { ok: false as const, error: signed.error };

      const uploadError = await uploadToSignedUrl(
        signed.path,
        signed.token,
        file
      );
      if (uploadError) return { ok: false as const, error: uploadError };

      return registerReport(month, portfolioKey, signed.path);
    });

  const removeReport = (portfolioKey: PortfolioKey) =>
    run(() => removeReportAction(month, portfolioKey));

  const save = (draft: PublicationDraft) => run(() => savePublication(draft));

  const unpublish = () => run(() => unpublishMonth(month));

  // Publie le mois, puis diffuse l'e-mail le cas échéant. Un échec d'envoi
  // n'annule pas la publication — il est signalé distinctement.
  const publish = (draft: PublicationDraft, email: EmailPayload) =>
    run(async () => {
      const result = await publishMonth(draft);
      if (!result.ok || !email) return result;

      const sent = await sendClientBroadcast(email);
      if (!sent.ok) {
        return {
          ok: false as const,
          error: `Compte rendu publié, mais e-mail non envoyé : ${sent.error}`,
        };
      }
      return { ok: true as const, message: `${result.message} · ${sent.message}` };
    });

  return { pending, uploadReport, removeReport, save, unpublish, publish };
};
