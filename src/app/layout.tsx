import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_HOST } from "@/lib/routes";
import { ClientLayout } from "./clientLayout";

/**
 * Fontes embarquées plutôt que `next/font/google` : ce dernier interroge
 * fonts.googleapis.com à chaque build, ce qui fait échouer la compilation dès
 * que le réseau bronche — en local comme sur Vercel. Sous-ensemble latin
 * uniquement (76 Ko au total).
 *
 * IBM Plex Sans est une police variable : un seul fichier couvre 300 → 700.
 */
const plexSans = localFont({
  src: [{ path: "./fonts/IBMPlexSans.woff2", weight: "300 700", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

/**
 * Serif du site vitrine. Le fichier normal est variable (300 → 700) ; seul
 * l'italique demande un second fichier. Sous-ensemble latin, comme les Plex.
 */
const cormorant = localFont({
  src: [
    {
      path: "./fonts/CormorantGaramond.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE_HOST}`),
  title: {
    default: "Parlons Long Terme · Sublimez votre capital",
    template: "%s · Parlons Long Terme",
  },
  description:
    "Le média d'éducation financière de Rémi De Truchis De Varennes : newsletter gratuite, logiciel Value Investing Screener, PLT Family Office et Mastermind PLT Insider.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${plexSans.variable} ${plexMono.variable} ${cormorant.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          background: "#0E1214",
          color: "#E6EAEC",
          fontFeatureSettings: "'tnum' 1,'lnum' 1",
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
