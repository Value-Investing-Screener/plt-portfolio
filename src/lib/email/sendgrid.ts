import "server-only";

/**
 * Envoi d'e-mails applicatifs via l'API Web SendGrid (distincte du SMTP
 * d'authentification configuré dans Supabase). Chaque destinataire reçoit un
 * message individuel — aucune adresse n'est exposée aux autres.
 *
 * Configuration (voir .env.example) :
 *   SENDGRID_API_KEY   — clé API SendGrid (permission « Mail Send »)
 *   SENDGRID_FROM_EMAIL — expéditeur vérifié dans SendGrid
 *   SENDGRID_FROM_NAME  — nom affiché (défaut « PLT Insider »)
 */
export type SendResult = { ok: true } | { ok: false; error: string };

export const sendBulkEmail = async ({
  recipients,
  subject,
  html,
  text,
}: {
  recipients: string[];
  subject: string;
  html: string;
  text: string;
}): Promise<SendResult> => {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const fromName = process.env.SENDGRID_FROM_NAME ?? "PLT Insider";

  if (!apiKey || !fromEmail) {
    return {
      ok: false,
      error:
        "Envoi d'e-mail non configuré (SENDGRID_API_KEY / SENDGRID_FROM_EMAIL).",
    };
  }
  if (!recipients.length) {
    return { ok: false, error: "Aucun destinataire actif." };
  }

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(20000),
      body: JSON.stringify({
        // Une personalization par destinataire = un envoi individuel.
        personalizations: recipients.map((email) => ({ to: [{ email }] })),
        from: { email: fromEmail, name: fromName },
        subject,
        content: [
          { type: "text/plain", value: text },
          { type: "text/html", value: html },
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      return {
        ok: false,
        error: `SendGrid a refusé l'envoi (${response.status}). ${detail.slice(
          0,
          200
        )}`,
      };
    }
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? `Envoi impossible : ${error.message}`
          : "Envoi impossible.",
    };
  }
};
