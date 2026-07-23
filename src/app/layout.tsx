import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ClientLayout } from "./clientLayout";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLT Insider · Espace client",
  description:
    "Espace client PLT Insider — allocation, performances et comptes rendus des portefeuilles Parlons Long Terme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${plexSans.variable} ${plexMono.variable}`}>
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
