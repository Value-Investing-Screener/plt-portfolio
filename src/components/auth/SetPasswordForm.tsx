"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { setPasswordWithToken } from "@/app/actions/passwordReset";
import { PrimaryButton, Spinner } from "@/components/insider/ui";
import { routes } from "@/lib/routes";
import { Field, FormMessage } from "./fields";

export const SetPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (password !== confirmation) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }

    startTransition(async () => {
      const result = await setPasswordWithToken(token, password);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setDone(true);
      // Le compte n'est pas connecté ici (le lien ne pose pas de session) :
      // on renvoie vers la connexion, mot de passe en main.
      setTimeout(() => router.replace(routes.login), 1400);
    });
  };

  if (done) {
    return (
      <FormMessage tone="success">
        Mot de passe enregistré. Redirection vers la connexion…
      </FormMessage>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      <Field
        id="password"
        label="Nouveau mot de passe"
        type="password"
        autoComplete="new-password"
        required
        minLength={10}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Field
        id="confirmation"
        label="Confirmation"
        type="password"
        autoComplete="new-password"
        required
        minLength={10}
        value={confirmation}
        onChange={(event) => setConfirmation(event.target.value)}
      />

      {error && <FormMessage tone="error">{error}</FormMessage>}

      <PrimaryButton
        type="submit"
        disabled={pending}
        style={{ padding: 13, borderRadius: 6, width: "100%" }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {pending && <Spinner />}
          Enregistrer mon mot de passe
        </span>
      </PrimaryButton>
    </form>
  );
};
