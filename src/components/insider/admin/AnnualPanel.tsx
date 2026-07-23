"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";

import type { ActionResult } from "@/app/actions/publications";
import {
  publishAnnualReview,
  removeAnnualReviewFile,
  saveAnnualReview,
  unpublishAnnualReview,
  uploadAnnualReview,
} from "@/app/actions/annual";
import { colors, MONO } from "@/design/tokens";
import { documentMeta } from "@/lib/format";
import type { AnnualReview } from "@/lib/plt/types";
import { GhostButton, Label, Panel, PdfBadge, PrimaryButton } from "../ui";
import {
  fileSlot,
  INPUT_STYLE,
  SLOT_STYLE,
  SmallButton,
  UploadButton,
} from "./shared";

export const AnnualPanel = ({
  reviews,
  report,
}: {
  reviews: AnnualReview[];
  report: (result: ActionResult) => boolean;
}) => {
  const [year, setYear] = useState(() => String(new Date().getFullYear()));

  const review = useMemo(
    () => reviews.find((item) => String(item.year) === year) ?? null,
    [reviews, year]
  );

  return (
    <Panel
      style={{
        padding: "24px clamp(18px,3vw,28px)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <Label size={10.5} spacing=".16em">
          Revue annuelle
        </Label>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <label
            htmlFor="plt-annual-year"
            style={{ fontSize: 11, color: colors.muted }}
          >
            Exercice
          </label>
          <input
            id="plt-annual-year"
            type="number"
            min={2000}
            max={2100}
            value={year}
            onChange={(event) => setYear(event.target.value)}
            style={{ ...INPUT_STYLE, width: 90, fontSize: 13 }}
          />
        </div>
      </div>

      <AnnualForm key={year} year={year} review={review} report={report} />
    </Panel>
  );
};

const AnnualForm = ({
  year,
  review,
  report,
}: {
  year: string;
  review: AnnualReview | null;
  report: (result: ActionResult) => boolean;
}) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const [title, setTitle] = useState(
    review?.title ?? `Revue annuelle ${year}`
  );
  const [tag, setTag] = useState(review?.tag ?? "");
  const [blurb, setBlurb] = useState(review?.blurb ?? "");

  const published = Boolean(review?.publishedAt);
  const state = fileSlot(Boolean(review?.storagePath));

  const run = (action: () => Promise<ActionResult>) =>
    startTransition(async () => {
      if (report(await action())) router.refresh();
    });

  const upload = (file: File) => {
    const formData = new FormData();
    formData.set("year", year);
    formData.set("file", file);
    run(() => uploadAnnualReview(formData));
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Titre de la revue"
          aria-label="Titre de la revue"
          style={{ ...INPUT_STYLE, fontFamily: "inherit", fontSize: 13 }}
        />
        <input
          type="text"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          placeholder="Mention (ex. « Publiée en septembre 2025 »)"
          aria-label="Mention affichée au-dessus du titre"
          style={{ ...INPUT_STYLE, fontFamily: "inherit", fontSize: 13 }}
        />
        <textarea
          value={blurb}
          onChange={(event) => setBlurb(event.target.value)}
          placeholder="Résumé affiché sous le titre"
          aria-label="Résumé de la revue"
          rows={3}
          style={{
            ...INPUT_STYLE,
            fontFamily: "inherit",
            fontSize: 13,
            lineHeight: 1.5,
            resize: "vertical",
          }}
        />
      </div>

      <div style={{ ...SLOT_STYLE, padding: 14 }}>
        <PdfBadge color={colors.accent} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, color: colors.text, fontWeight: 600 }}>
            Revue annuelle {year}
          </div>
          <div
            style={{
              fontSize: 11,
              fontFamily: MONO,
              marginTop: 2,
              color: state.stateColor,
            }}
          >
            {review?.storagePath
              ? documentMeta(review.pageCount, review.fileSizeBytes)
              : state.stateStr}
          </div>
        </div>
        {review?.storagePath ? (
          <SmallButton
            label={state.btnLabel}
            disabled={pending}
            onClick={() => run(() => removeAnnualReviewFile(year))}
            background={state.btnBackground}
            color={state.btnColor}
            border={state.btnBorder}
          />
        ) : (
          <UploadButton
            label={state.btnLabel}
            disabled={pending}
            onFile={upload}
            background={state.btnBackground}
            color={state.btnColor}
            border={state.btnBorder}
          />
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <PrimaryButton
          disabled={pending}
          onClick={() =>
            run(async () => {
              const saved = await saveAnnualReview({ year, title, tag, blurb });
              return saved.ok ? publishAnnualReview(year) : saved;
            })
          }
          style={{ fontSize: 13, padding: 12, borderRadius: 6 }}
        >
          {published ? "Mettre à jour la revue" : "Publier la revue annuelle"}
        </PrimaryButton>

        <div style={{ display: "flex", gap: 10 }}>
          <GhostButton
            disabled={pending}
            onClick={() =>
              run(() => saveAnnualReview({ year, title, tag, blurb }))
            }
            style={{ flex: 1, borderRadius: 6, fontSize: 12.5 }}
          >
            Enregistrer sans publier
          </GhostButton>
          {published && (
            <GhostButton
              disabled={pending}
              onClick={() => run(() => unpublishAnnualReview(year))}
              style={{
                flex: 1,
                borderRadius: 6,
                fontSize: 12.5,
                borderColor: "rgba(217,128,128,0.35)",
                color: colors.negative,
              }}
            >
              Retirer
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
            ? "En ligne · une revue sans fichier s'affiche « en préparation »"
            : "Brouillon — invisible côté client"}
        </div>
      </div>
    </>
  );
};
