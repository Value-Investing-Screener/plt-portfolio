#!/usr/bin/env node
/**
 * Amorçage du premier administrateur PLT Insider.
 *
 * Le Backoffice ne peut inviter personne tant qu'aucun administrateur n'existe :
 * ce script crée le compte hors application, avec la clé `service_role`.
 *
 *   npm run db:admin -- adresse@exemple.fr "Prénom Nom" [mot-de-passe]
 *
 * Sans mot de passe, une invitation est envoyée par e-mail et le compte définit
 * son mot de passe via /auth/reset. Avec un mot de passe, le compte est
 * utilisable immédiatement — pratique quand les gabarits d'e-mail ne sont pas
 * encore configurés.
 */
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

/** Lecture minimale du .env — ce script tourne hors de Next. */
const readEnvFile = (path) => {
  try {
    return Object.fromEntries(
      readFileSync(path, "utf8")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#") && line.includes("="))
        .map((line) => {
          const index = line.indexOf("=");
          return [
            line.slice(0, index).trim(),
            line.slice(index + 1).trim().replace(/^["']|["']$/g, ""),
          ];
        })
    );
  } catch {
    return {};
  }
};

const fileEnv = readEnvFile(new URL("../.env", import.meta.url));
const env = { ...fileEnv, ...process.env };

const fail = (message) => {
  console.error(`\n  ✖ ${message}\n`);
  process.exit(1);
};

const args = process.argv.slice(2);

// npm retire les guillemets : « "Prénom Nom" » arrive en deux arguments. On
// recolle donc tout ce qui suit l'adresse, et le mot de passe passe par un flag.
const passwordFlag = args.find((arg) => arg.startsWith("--password="));
const positional = args.filter((arg) => !arg.startsWith("--"));

const [email, ...nameParts] = positional;
const fullName = nameParts.join(" ");
const password = passwordFlag?.slice("--password=".length);

if (!email || !fullName) {
  fail(
    'Usage : npm run db:admin -- adresse@exemple.fr "Prénom Nom" [--password=…]'
  );
}

// Même normalisation que src/lib/supabase/config.ts : le dashboard expose
// aussi les points d'entrée /rest/v1, /auth/v1 et /storage/v1.
const url = (env.NEXT_PUBLIC_SUPABASE_URL ?? "")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/(rest|auth|storage)\/v1$/, "");

const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !/^https?:\/\//.test(url)) {
  fail(
    "NEXT_PUBLIC_SUPABASE_URL doit valoir « https://<ref>.supabase.co » (Project Settings → API → Project URL)."
  );
}
if (!serviceRoleKey) {
  fail("SUPABASE_SERVICE_ROLE_KEY manquant (Project Settings → API).");
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const siteUrl = env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const { data, error } = password
  ? await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: fullName },
    })
  : await supabase.auth.admin.inviteUserByEmail(email, {
      data: { full_name: fullName },
      redirectTo: `${siteUrl}/auth/confirm?next=/auth/reset`,
    });

if (error) fail(`Création du compte impossible : ${error.message}`);

// Le trigger plt_on_auth_user_created a posé le profil ; on l'élève en admin.
const { error: roleError } = await supabase
  .from("plt_member")
  .update({ role: "admin", full_name: fullName, email })
  .eq("id", data.user.id);

if (roleError) {
  fail(
    `Compte créé mais rôle non appliqué : ${roleError.message}\n    Les migrations sont-elles bien passées (npm run db:push) ?`
  );
}

console.log(`
  ✓ Administrateur créé : ${fullName} <${email}>
  ${
    password
      ? "  Connectez-vous dès maintenant sur /login."
      : "  Une invitation vient d'être envoyée — le lien mène à /auth/reset."
  }
`);
