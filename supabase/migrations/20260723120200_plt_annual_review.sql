-- ---------------------------------------------------------------------------
-- PLT Insider — revues annuelles.
--
-- Un document de synthèse par exercice. Une ligne peut exister sans fichier :
-- c'est l'exercice « en préparation » affiché côté client.
-- ---------------------------------------------------------------------------

create table public.plt_annual_review (
  year            int primary key check (year between 2000 and 2100),
  title           text not null,
  tag             text not null default '',
  blurb           text not null default '',
  storage_path    text,
  file_size_bytes bigint,
  page_count      int,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger plt_annual_review_touch
  before update on public.plt_annual_review
  for each row execute function public.plt_touch_updated_at();

alter table public.plt_annual_review enable row level security;

-- Les exercices « en préparation » (sans fichier) sont visibles dès qu'ils sont
-- publiés : c'est l'annonce elle-même qui est publiée, pas le document.
create policy plt_annual_review_read on public.plt_annual_review
  for select to authenticated
  using (published_at is not null and public.plt_is_member());

create policy plt_annual_review_admin_write on public.plt_annual_review
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());
