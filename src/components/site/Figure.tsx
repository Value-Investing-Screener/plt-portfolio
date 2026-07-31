"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { CAPTION } from "@/design/site";
import type { SiteImage } from "./images";

/**
 * Trois teintes de calage, une par fond de section : le rayé doit rester
 * discret sur le crème du parcours comme sur les fonds sombres.
 */
const TONES = {
  cream: {
    stripes:
      "repeating-linear-gradient(45deg,#e3dacd,#e3dacd 12px,#ebe3d8 12px,#ebe3d8 24px)",
    caption: "#9c9184",
  },
  dark: {
    stripes:
      "repeating-linear-gradient(45deg,#1a1511,#1a1511 12px,#221b15 12px,#221b15 24px)",
    caption: "#7a6f63",
  },
  panel: {
    stripes:
      "repeating-linear-gradient(45deg,#2a231d,#2a231d 12px,#322a22 12px,#322a22 24px)",
    caption: "#8a7d6f",
  },
  medallion: {
    stripes:
      "repeating-linear-gradient(45deg,#171210,#171210 12px,#1e1815 12px,#1e1815 24px)",
    caption: "#7a6f63",
  },
} as const;

export type FigureTone = keyof typeof TONES;

/**
 * Photo d'une section, avec repli sur le calage rayé du prototype tant que le
 * fichier n'est pas déposé dans `public/site/` (ou s'il ne se charge pas).
 *
 * `<img>` plutôt que `next/image` : les visuels sont peu nombreux, servis en
 * une seule taille, et le repli à l'erreur reste lisible.
 */
export const Figure = ({
  image,
  tone = "dark",
  ratio,
  round = false,
  fit = "cover",
  captionSize = 11,
  priority = false,
  style,
}: {
  image: SiteImage;
  tone?: FigureTone;
  /** `aspect-ratio` du cadre — « 4 / 3 », « 3 / 4 », « 1 »… */
  ratio?: string;
  round?: boolean;
  /**
   * `contain` pour un visuel détouré : l'image est affichée entière et le
   * cadre reste transparent, sinon on verrait un aplat derrière l'alpha.
   */
  fit?: "cover" | "contain";
  captionSize?: number;
  /** Visuel au-dessus de la ligne de flottaison : chargement immédiat. */
  priority?: boolean;
  style?: CSSProperties;
}) => {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Le balisage part du serveur avec le `<img>` : le navigateur peut échouer à
  // charger le fichier *avant* l'hydratation, auquel cas `onError` ne se
  // déclenche jamais et la page resterait bloquée sur le texte alternatif. On
  // relit donc l'état réel de l'image au montage.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const { stripes, caption } = TONES[tone];
  const showImage = image.src !== null && !failed;

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        overflow: "hidden",
        borderRadius: round ? "50%" : undefined,
        background: showImage
          ? fit === "contain"
            ? "transparent"
            : "#0f0c0a"
          : stripes,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={image.src as string}
          alt={image.alt}
          onError={() => setFailed(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            display: "block",
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: CAPTION,
            fontSize: captionSize,
            letterSpacing: ".08em",
            color: caption,
            textTransform: "uppercase",
            textAlign: "center",
            padding: "0 20px",
            lineHeight: 1.7,
          }}
        >
          {image.caption}
        </span>
      )}
    </div>
  );
};
