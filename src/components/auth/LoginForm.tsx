"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { requestPasswordReset, signIn } from "@/app/auth/actions";
import { PrimaryButton, Spinner } from "@/components/insider/ui";
import { Field, FormMessage, TextButton } from "./fields";

type Mode = "signin" | "forgot";

export const LoginForm = ({
  next,
  initialError,
}: {
  next: string;
  initialError?: string;
}) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialError ?? "");
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSent(false);

    startTransition(async () => {
      if (mode === "forgot") {
        const result = await requestPasswordReset(email);
        if (result) setError(result.error);
        else setSent(true);
        return;
      }

      const result = await signIn(email, password);
      if (result) {
        setError(result.error);
        return;
      }
      router.replace(next);
      router.refresh();
    });
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      <Field
        id="email"
        label="Adresse e-mail"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="vous@exemple.fr"
      />

      {mode === "signin" && (
        <Field
          id="password"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      )}

      {error && <FormMessage tone="error">{error}</FormMessage>}
      {sent && (
        <FormMessage tone="success">
          Si un compte existe pour cette adresse, un lien de réinitialisation
          vient d&apos;être envoyé.
        </FormMessage>
      )}

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
          {mode === "signin"
            ? "Accéder à mon espace"
            : "Envoyer le lien de réinitialisation"}
        </span>
      </PrimaryButton>

      <div style={{ textAlign: "center" }}>
        <TextButton
          onClick={() => {
            setMode(mode === "signin" ? "forgot" : "signin");
            setError("");
            setSent(false);
          }}
        >
          {mode === "signin"
            ? "Mot de passe oublié ?"
            : "Revenir à la connexion"}
        </TextButton>
      </div>
    </form>
  );
};
