/**
 * Formes de données PLT Insider partagées entre le serveur (lectures Supabase)
 * et les composants clients. Types uniquement — aucun accès base ici, ce
 * fichier est importable depuis un composant `"use client"`.
 */
import type { PortfolioKey } from "@/lib/portfolios";

export type PublicationReport = {
  portfolioKey: PortfolioKey;
  storagePath: string;
  fileSizeBytes: number;
  pageCount: number | null;
};

export type Publication = {
  id: string;
  /** Mois au format « 2026-06 ». */
  month: string;
  /** `null` = brouillon, invisible côté client. */
  publishedAt: string | null;
  hasAlert: boolean;
  replayUrl: string | null;
  replayDurationMin: number | null;
  reports: PublicationReport[];
  /** Performance mensuelle en %, par portefeuille — 1.45 = +1,45 %. */
  returns: Partial<Record<PortfolioKey, number>>;
};

export type AnnualReview = {
  year: number;
  title: string;
  tag: string;
  blurb: string;
  storagePath: string | null;
  fileSizeBytes: number | null;
  pageCount: number | null;
  publishedAt: string | null;
};

export type MemberRow = {
  id: string;
  email: string;
  fullName: string;
  role: "admin" | "user";
  isActive: boolean;
  invitedAt: string;
};
