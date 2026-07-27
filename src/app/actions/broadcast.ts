"use server";

import { requireAdmin } from "@/lib/auth";
import { renderRecapEmail, toPlainText } from "@/lib/email/recap";
import { sendBulkEmail } from "@/lib/email/sendgrid";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { ActionResult } from "./publications";

/**
 * Envoie un compte rendu à toute la base de clients actifs.
 * Réservé aux administrateurs. Le corps est saisi par l'administrateur ; il est
 * enveloppé dans le gabarit HTML PLT avant envoi.
 */
export const sendClientBroadcast = async ({
  subject,
  body,
}: {
  subject: string;
  body: string;
}): Promise<ActionResult> => {
  try {
    await requireAdmin();

    if (!subject.trim() || !body.trim()) {
      return { ok: false, error: "Objet et message requis." };
    }

    const { data: members, error } = await createSupabaseAdminClient()
      .from("plt_member")
      .select("email")
      .eq("is_active", true);

    if (error) return { ok: false, error: error.message };

    const recipients = (members ?? [])
      .map((member) => member.email)
      .filter(Boolean);

    if (!recipients.length) {
      return { ok: false, error: "Aucun client actif à qui envoyer." };
    }

    const result = await sendBulkEmail({
      recipients,
      subject: subject.trim(),
      html: renderRecapEmail(body),
      text: toPlainText(body),
    });

    if (!result.ok) return { ok: false, error: result.error };

    return {
      ok: true,
      message: `E-mail envoyé à ${recipients.length} client${
        recipients.length > 1 ? "s" : ""
      }.`,
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Envoi impossible.",
    };
  }
};
