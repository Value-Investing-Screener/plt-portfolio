import "server-only";

import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  PORTFOLIO_FALLBACK,
  portfolioColor,
  type PortfolioKey,
  type PortfolioMeta,
} from "@/lib/portfolios";
import type {
  AnnualReview,
  MemberRow,
  Publication,
  PublicationReport,
} from "./types";

/** « 2026-06-01 » (colonne `date`) → « 2026-06 ». */
const toMonthKey = (value: string) => value.slice(0, 7);

/** Les trois portefeuilles modèles, ordonnés. */
export const getPortfolios = async (): Promise<PortfolioMeta[]> => {
  if (!isSupabaseConfigured()) return PORTFOLIO_FALLBACK;

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("plt_portfolio")
    .select("key, name, tagline, position, hasura_portfolio_id")
    .order("position");

  if (error || !data?.length) return PORTFOLIO_FALLBACK;

  return data.map((row) => ({
    key: row.key as PortfolioKey,
    name: row.name,
    tagline: row.tagline,
    color: portfolioColor(row.position),
    position: row.position,
    hasuraPortfolioId: row.hasura_portfolio_id,
  }));
};

type PublicationRow = {
  id: string;
  month: string;
  published_at: string | null;
  has_alert: boolean;
  replay_url: string | null;
  replay_duration_min: number | null;
  plt_publication_report: {
    portfolio_key: string;
    storage_path: string;
    file_size_bytes: number;
    page_count: number | null;
  }[];
  plt_publication_perf: { portfolio_key: string; return_pct: number }[];
};

const toPublication = (row: PublicationRow): Publication => ({
  id: row.id,
  month: toMonthKey(row.month),
  publishedAt: row.published_at,
  hasAlert: row.has_alert,
  replayUrl: row.replay_url,
  replayDurationMin: row.replay_duration_min,
  reports: row.plt_publication_report.map(
    (report): PublicationReport => ({
      portfolioKey: report.portfolio_key as PortfolioKey,
      storagePath: report.storage_path,
      fileSizeBytes: Number(report.file_size_bytes),
      pageCount: report.page_count,
    })
  ),
  returns: Object.fromEntries(
    row.plt_publication_perf.map(({ portfolio_key, return_pct }) => [
      portfolio_key,
      Number(return_pct),
    ])
  ),
});

const SELECT = `
  id, month, published_at, has_alert, replay_url, replay_duration_min,
  plt_publication_report ( portfolio_key, storage_path, file_size_bytes, page_count ),
  plt_publication_perf ( portfolio_key, return_pct )
`;

/**
 * Publications visibles par un membre : les mois publiés, du plus récent au
 * plus ancien. Les admins reçoivent aussi les brouillons via `includeDrafts`.
 */
export const getPublications = async ({
  includeDrafts = false,
}: { includeDrafts?: boolean } = {}): Promise<Publication[]> => {
  if (!isSupabaseConfigured()) return [];

  const supabase = createSupabaseServerClient();
  let query = supabase
    .from("plt_publication")
    .select(SELECT)
    .order("month", { ascending: false });

  if (!includeDrafts) query = query.not("published_at", "is", null);

  const { data, error } = await query;
  if (error || !data) return [];

  return (data as unknown as PublicationRow[]).map(toPublication);
};

/** Publication d'un mois donné (« 2026-06 »), brouillon compris. */
export const getPublicationByMonth = async (
  month: string
): Promise<Publication | null> => {
  if (!isSupabaseConfigured()) return null;

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("plt_publication")
    .select(SELECT)
    .eq("month", `${month}-01`)
    .maybeSingle();

  if (error || !data) return null;
  return toPublication(data as unknown as PublicationRow);
};

/* ------------------------------------------------------------------ */
/* Revues annuelles                                                    */
/* ------------------------------------------------------------------ */

export const getAnnualReviews = async ({
  includeDrafts = false,
}: { includeDrafts?: boolean } = {}): Promise<AnnualReview[]> => {
  if (!isSupabaseConfigured()) return [];

  const supabase = createSupabaseServerClient();
  let query = supabase
    .from("plt_annual_review")
    .select(
      "year, title, tag, blurb, storage_path, file_size_bytes, page_count, published_at"
    )
    .order("year", { ascending: false });

  if (!includeDrafts) query = query.not("published_at", "is", null);

  const { data, error } = await query;
  if (error || !data) return [];

  return data.map((row) => ({
    year: row.year,
    title: row.title,
    tag: row.tag,
    blurb: row.blurb,
    storagePath: row.storage_path,
    fileSizeBytes: row.file_size_bytes ? Number(row.file_size_bytes) : null,
    pageCount: row.page_count,
    publishedAt: row.published_at,
  }));
};

/* ------------------------------------------------------------------ */
/* Contacts                                                            */
/* ------------------------------------------------------------------ */

/** Carnet d'adresses du backoffice — réservé aux administrateurs (RLS). */
export const getMembers = async (): Promise<MemberRow[]> => {
  if (!isSupabaseConfigured()) return [];

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("plt_member")
    .select("id, email, full_name, role, is_active, invited_at")
    .order("invited_at", { ascending: true });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    email: row.email,
    fullName: row.full_name,
    role: row.role === "admin" ? "admin" : "user",
    isActive: row.is_active,
    invitedAt: row.invited_at,
  }));
};
