-- ---------------------------------------------------------------------------
-- PLT Insider — socle : membres, rôles et portefeuilles modèles.
--
-- Les données de marché (composition des portefeuilles, cours, dividendes)
-- restent dans le Hasura Value Investing Screener. Cette base ne porte que ce
-- qui est propre à l'offre PLT Insider : les accès et le contenu éditorial.
-- ---------------------------------------------------------------------------

-- Horodatage automatique, réutilisé par toutes les tables plt_*.
create or replace function public.plt_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Membres — profil applicatif adossé 1:1 à auth.users
-- ---------------------------------------------------------------------------

create table public.plt_member (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text        not null,
  full_name   text        not null default '',
  -- 'admin' : accès au Backoffice (publications, revues, contacts).
  -- 'user'  : accès à l'espace client seul.
  role        text        not null default 'user' check (role in ('admin', 'user')),
  is_active   boolean     not null default true,
  invited_at  timestamptz not null default now(),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index plt_member_email_idx on public.plt_member (lower(email));

create trigger plt_member_touch
  before update on public.plt_member
  for each row execute function public.plt_touch_updated_at();

-- Tout compte créé dans auth.users (invitation depuis le backoffice ou depuis
-- le dashboard Supabase) obtient son profil, sans quoi il serait connecté mais
-- invisible pour les politiques ci-dessous.
create or replace function public.plt_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.plt_member (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger plt_on_auth_user_created
  after insert on auth.users
  for each row execute function public.plt_handle_new_user();

-- ---------------------------------------------------------------------------
-- Prédicats d'accès
--
-- `security definer` est indispensable : ces fonctions interrogent plt_member,
-- or la politique de plt_member les appelle — sans cela, récursion RLS.
-- ---------------------------------------------------------------------------

create or replace function public.plt_is_member()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.plt_member m
    where m.id = auth.uid() and m.is_active
  );
$$;

create or replace function public.plt_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.plt_member m
    where m.id = auth.uid() and m.is_active and m.role = 'admin'
  );
$$;

-- ---------------------------------------------------------------------------
-- Portefeuilles modèles — remplace PORTFOLIO_META et le mapping positionnel
-- `portfolios[0..2]` : on joint sur hasura_portfolio_id.
-- ---------------------------------------------------------------------------

create table public.plt_portfolio (
  key                 text primary key check (key in ('efficient', 'dividende', 'antifragile')),
  name                text not null,
  tagline             text not null default '',
  position            int  not null unique,
  hasura_portfolio_id int  unique,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create trigger plt_portfolio_touch
  before update on public.plt_portfolio
  for each row execute function public.plt_touch_updated_at();

insert into public.plt_portfolio (key, name, tagline, position) values
  ('efficient',   'Portefeuille Efficient',
   'Croissance de qualité, valorisation stricte et discipline de sélection.', 1),
  ('dividende',   'Portefeuille Dividende',
   'Revenu récurrent, rendement élevé et distributions régulières.', 2),
  ('antifragile', 'Portefeuille Antifragile',
   'Résilience, décorrélation et protection en régime de stress.', 3);

-- ---------------------------------------------------------------------------
-- RLS — lecture pour les membres actifs, écriture pour les admins.
-- La clé service_role utilisée par les Server Actions contourne ces règles ;
-- elles protègent donc les accès directs depuis le navigateur.
-- ---------------------------------------------------------------------------

alter table public.plt_member    enable row level security;
alter table public.plt_portfolio enable row level security;

create policy plt_member_read_self on public.plt_member
  for select to authenticated
  using (id = auth.uid() or public.plt_is_admin());

create policy plt_member_admin_write on public.plt_member
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());

create policy plt_portfolio_read on public.plt_portfolio
  for select to authenticated
  using (public.plt_is_member());

create policy plt_portfolio_admin_write on public.plt_portfolio
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());
