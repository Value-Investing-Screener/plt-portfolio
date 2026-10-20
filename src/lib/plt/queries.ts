import "server-only";

import { requireAdmin } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  PORTFOLIO_FALLBACK,
  PORTFOLIO_KEYS,
  portfolioColor,
  type PortfolioKey,
  type PortfolioMeta,
} from "@/lib/portfolios";
import type {
  AllocationSettings,
  AnnualReview,
  MemberAllocation,
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
    document_url: string;
    file_size_bytes: number | null;
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
      documentUrl: report.document_url,
      fileSizeBytes: report.file_size_bytes ? Number(report.file_size_bytes) : null,
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
  plt_publication_report ( portfolio_key, document_url, file_size_bytes, page_count ),
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
      "year, title, tag, blurb, document_url, file_size_bytes, page_count, published_at"
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
    documentUrl: row.document_url,
    fileSizeBytes: row.file_size_bytes ? Number(row.file_size_bytes) : null,
    pageCount: row.page_count,
    publishedAt: row.published_at,
  }));
};

/* ------------------------------------------------------------------ */
/* Réglages d'allocation                                               */
/* ------------------------------------------------------------------ */

/** Réglages d'un membre qui n'a encore rien modifié. */
const DEFAULT_ALLOCATION: AllocationSettings = {
  capital: 100000,
  currency: "EUR",
  exposures: { efficient: 40, dividende: 35, antifragile: 25 },
};

/** Derniers réglages d'allocation du membre connecté (RLS : sa ligne seule). */
export const getAllocationSettings = async (
  memberId: string
): Promise<AllocationSettings> => {
  if (!isSupabaseConfigured()) return DEFAULT_ALLOCATION;

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("plt_member_allocation")
    .select("capital, currency, plt_member_exposure ( portfolio_key, exposure_pct )")
    .eq("member_id", memberId)
    .maybeSingle();

  if (error || !data) return DEFAULT_ALLOCATION;

  const saved = new Map(
    data.plt_member_exposure.map((row) => [row.portfolio_key, row.exposure_pct])
  );

  return {
    capital: Number(data.capital),
    currency: data.currency,
    // Un portefeuille ajouté depuis le dernier enregistrement prend sa valeur
    // par défaut plutôt que de rester vide.
    exposures: Object.fromEntries(
      PORTFOLIO_KEYS.map((key) => [
        key,
        saved.get(key) ?? DEFAULT_ALLOCATION.exposures[key],
      ])
    ) as AllocationSettings["exposures"],
  };
};

/* ------------------------------------------------------------------ */
/* Contacts                                                            */
/* ------------------------------------------------------------------ */

type MemberAllocationRow = {
  capital: number;
  currency: string;
  updated_at: string;
  plt_member_exposure: { portfolio_key: string; exposure_pct: number }[];
};

const toMemberAllocation = (
  row: MemberAllocationRow | MemberAllocationRow[] | null
): MemberAllocation | null => {
  // Relation 1:1 : PostgREST renvoie un objet, ou un tableau selon la version.
  const allocation = Array.isArray(row) ? row[0] : row;
  if (!allocation) return null;

  return {
    capital: Number(allocation.capital),
    currency: allocation.currency,
    exposures: Object.fromEntries(
      allocation.plt_member_exposure.map((item) => [
        item.portfolio_key,
        item.exposure_pct,
      ])
    ),
    updatedAt: allocation.updated_at,
  };
};

/**
 * Date de dernière connexion de chaque compte, par identifiant. Elle vit dans
 * `auth.users`, que seule la clé `service_role` peut lire.
 */
const getLastSignIns = async (): Promise<Map<string, string | null>> => {
  const admin = createSupabaseAdminClient();
  const lastSignIns = new Map<string, string | null>();
  const perPage = 1000;

  for (let page = 1; ; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
    if (error) break;
    data.users.forEach((user) =>
      lastSignIns.set(user.id, user.last_sign_in_at ?? null)
    );
    if (data.users.length < perPage) break;
  }

  return lastSignIns;
};

/** Carnet d'adresses du backoffice — réservé aux administrateurs (RLS). */
export const getMembers = async (): Promise<MemberRow[]> => {
  if (!isSupabaseConfigured()) return [];
  // La clé `service_role` sert à lire les dernières connexions.
  await requireAdmin();

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("plt_member")
    .select(
      `id, email, full_name, role, is_active, invited_at,
       plt_member_allocation ( capital, currency, updated_at,
         plt_member_exposure ( portfolio_key, exposure_pct ) )`
    )
    .order("invited_at", { ascending: true });

  if (error || !data) return [];

  const lastSignIns = await getLastSignIns();

  return data.map((row) => ({
    id: row.id,
    email: row.email,
    fullName: row.full_name,
    role: row.role === "admin" ? "admin" : "user",
    isActive: row.is_active,
    invitedAt: row.invited_at,
    lastSignInAt: lastSignIns.get(row.id) ?? null,
    allocation: toMemberAllocation(
      row.plt_member_allocation as unknown as MemberAllocationRow | null
    ),
  }));
};
