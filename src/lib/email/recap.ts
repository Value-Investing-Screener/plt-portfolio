import "server-only";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Transforme les URLs d'un texte échappé en liens cliquables. */
const linkify = (escaped: string) =>
  escaped.replace(
    /(https?:\/\/[^\s<]+)/g,
    (url) => `<a href="${url}" style="color:#C08A4E;">${url}</a>`
  );

/** Version texte brut : retire les marqueurs de gras `**…**`. */
export const toPlainText = (body: string) =>
  body.trim().replace(/\*\*(.+?)\*\*/g, "$1");

/**
 * Enveloppe le texte saisi par l'administrateur dans un e-mail HTML à la charte
 * PLT. Les URLs deviennent des liens, `**…**` devient du gras, et les sauts de
 * ligne sont conservés. Fond clair volontaire (lisibilité dans tous les clients).
 */
export const renderRecapEmail = (body: string): string => {
  const bolded = linkify(escapeHtml(body.trim())).replace(
    /\*\*([\s\S]+?)\*\*/g,
    "<strong>$1</strong>"
  );
  const content = bolded.replace(/\r?\n/g, "<br>");

  return `<div style="margin:0;padding:0;background:#f4f5f6;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f6;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e4e6e8;border-radius:10px;overflow:hidden;">
        <tr><td style="padding:26px 36px;border-bottom:1px solid #eceef0;">
          <div style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#C08A4E;font-weight:700;">Parlons Long Terme</div>
          <div style="font-size:16px;font-weight:600;color:#14181B;margin-top:4px;">PLT Insider · Compte rendu mensuel</div>
        </td></tr>
        <tr><td style="padding:32px 36px;font-size:14px;line-height:1.7;color:#2c3237;">
          ${content}
        </td></tr>
        <tr><td style="padding:20px 36px;border-top:1px solid #eceef0;font-size:11px;color:#8A9298;">
          Vous recevez cet e-mail en tant que membre de PLT Insider.<br>
          © Parlons Long Terme — remi@parlons-long-terme.com
        </td></tr>
      </table>
    </td></tr>
  </table>
</div>`;
};
