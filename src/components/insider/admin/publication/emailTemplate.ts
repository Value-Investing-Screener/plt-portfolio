import { monthLabelLong } from "@/lib/format";
import type { PortfolioMeta } from "@/lib/portfolios";
import { routes, SITE_HOST } from "@/lib/routes";

/** « -0.39 » → « - 0,39 % » ; chaîne vide → « n.c. ». */
export const formatPerf = (value: string) => {
  if (value.trim() === "") return "n.c.";
  const n = Number(value.replace(",", "."));
  if (!Number.isFinite(n)) return "n.c.";
  return `${n >= 0 ? "+" : "-"} ${Math.abs(n).toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} %`;
};

/** « 2026-08-06T16:00 » → « jeudi 6 août 2026 à 16h ». */
export const formatMeeting = (value: string) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const day = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const minutes = date.getMinutes();
  const hasTime = /T\d{2}:\d{2}/.test(value);
  const time = hasTime
    ? ` à ${date.getHours()}h${minutes ? String(minutes).padStart(2, "0") : ""}`
    : "";
  return `${day}${time}`;
};

/**
 * Message par défaut du compte rendu, à partir des données du mois.
 * `**…**` = gras (converti dans l'e-mail HTML).
 */
export const buildEmailDefaults = (
  month: string,
  portfolios: PortfolioMeta[],
  returns: Record<string, string>,
  replayUrl: string,
  hasAlert: boolean,
  meetingDate: string
) => {
  const label = monthLabelLong(month);
  // Lien vers l'espace client, à insérer dans l'e-mail : l'origine du
  // navigateur quand on rédige depuis le backoffice, le domaine canonique
  // sinon (rendu côté serveur).
  const insiderUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${routes.insider}`
      : `https://${SITE_HOST}${routes.insider}`;

  const perfLines = portfolios
    .map((p) => `- ${p.name} : ${formatPerf(returns[p.key] ?? "")}`)
    .join("\n");

  const movementLine = hasAlert
    ? "**Des mouvements ont eu lieu sur nos portefeuilles ce mois-ci, nous vous invitons à visionner le replay ci-dessous ou à consulter directement notre outil de construction de portefeuille.**"
    : "Aucun mouvement d'achat ou de revente particulier sur nos portefeuilles.";

  const replayLine = replayUrl.trim()
    ? `\nVoici le lien pour revoir notre live « PLT Insider » : ${replayUrl.trim()}`
    : "";

  const meeting = formatMeeting(meetingDate);
  const meetingLine = meeting
    ? `\n\nJe vous annonce que notre prochaine réunion est fixée au ${meeting}. J'espère vous y retrouver nombreux !`
    : "";

  const body = `Chers membres,

Voici un rappel des informations clés du mois de ${label}.

${movementLine}

Performance de chaque portefeuille :
${perfLines}

Je vous rappelle le lien de notre outil de construction de portefeuille : ${insiderUrl}${replayLine}${meetingLine}

Comme d'habitude, je reste à votre disposition pour répondre à toutes vos questions concernant notre modèle.

Je vous souhaite à toutes et à tous une belle journée.

Amicalement,
Rémi`;

  return { subject: `PLT Insider - Compte rendu de ${label}`, body };
};
