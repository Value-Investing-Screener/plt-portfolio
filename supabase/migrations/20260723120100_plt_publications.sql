-- ---------------------------------------------------------------------------
-- PLT Insider — publications mensuelles.
--
-- Une publication = un mois : trois rapports PDF (un par portefeuille), un
-- replay vidéo, trois performances mensuelles, et éventuellement une alerte de
-- changement de portefeuille. Tant que `published_at` est nul, la publication
-- est un brouillon invisible côté client.
-- ---------------------------------------------------------------------------

create table public.plt_publication (
  id                   uuid primary key default gen_random_uuid(),
  -- Premier jour du mois concerné, pour pouvoir trier et comparer des dates.
  month                date not null unique
                       check (extract(day from month) = 1),
  published_at         timestamptz,
  has_alert            boolean not null default false,
  replay_url           text,
  replay_duration_min  int check (replay_duration_min is null or replay_duration_min > 0),
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create index plt_publication_month_idx on public.plt_publication (month desc);

create trigger plt_publication_touch
  before update on public.plt_publication
  for each row execute function public.plt_touch_updated_at();

-- Un rapport PDF par portefeuille et par mois.
create table public.plt_publication_report (
  publication_id  uuid not null references public.plt_publication (id) on delete cascade,
  portfolio_key   text not null references public.plt_portfolio (key),
  storage_path    text not null,
  file_size_bytes bigint not null,
  page_count      int,
  uploaded_at     timestamptz not null default now(),
  primary key (publication_id, portfolio_key)
);

-- Performance mensuelle en pourcentage : 1.45 = +1,45 %.
create table public.plt_publication_perf (
  publication_id uuid not null references public.plt_publication (id) on delete cascade,
  portfolio_key  text not null references public.plt_portfolio (key),
  return_pct     numeric(8, 4) not null,
  primary key (publication_id, portfolio_key)
);

-- ---------------------------------------------------------------------------
-- Stockage privé des documents
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('plt-documents', 'plt-documents', false)
on conflict (id) do nothing;

create policy plt_documents_read on storage.objects
  for select to authenticated
  using (bucket_id = 'plt-documents' and public.plt_is_member());

create policy plt_documents_admin_write on storage.objects
  for all to authenticated
  using (bucket_id = 'plt-documents' and public.plt_is_admin())
  with check (bucket_id = 'plt-documents' and public.plt_is_admin());

-- ---------------------------------------------------------------------------
-- RLS — les membres ne voient que le publié, les admins voient tout.
-- ---------------------------------------------------------------------------

alter table public.plt_publication        enable row level security;
alter table public.plt_publication_report enable row level security;
alter table public.plt_publication_perf   enable row level security;

create policy plt_publication_read on public.plt_publication
  for select to authenticated
  using (published_at is not null and public.plt_is_member());

create policy plt_publication_admin_write on public.plt_publication
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());

create policy plt_publication_report_read on public.plt_publication_report
  for select to authenticated
  using (
    public.plt_is_member()
    and exists (
      select 1 from public.plt_publication p
      where p.id = publication_id and p.published_at is not null
    )
  );

create policy plt_publication_report_admin_write on public.plt_publication_report
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());

create policy plt_publication_perf_read on public.plt_publication_perf
  for select to authenticated
  using (
    public.plt_is_member()
    and exists (
      select 1 from public.plt_publication p
      where p.id = publication_id and p.published_at is not null
    )
  );

create policy plt_publication_perf_admin_write on public.plt_publication_perf
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());
