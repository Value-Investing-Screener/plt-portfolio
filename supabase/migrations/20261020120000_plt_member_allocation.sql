-- ---------------------------------------------------------------------------
-- PLT Insider — réglages d'allocation de chaque membre.
--
-- Capital investi, devise de référence et exposition à chaque portefeuille
-- modèle, tels que le membre les a laissés dans l'onglet Allocation. Réécrits
-- à chaque modification, via `plt_save_allocation`.
-- ---------------------------------------------------------------------------

-- Une ligne par membre.
create table public.plt_member_allocation (
  member_id   uuid primary key references public.plt_member (id) on delete cascade,
  capital     numeric(16, 2) not null check (capital >= 0),
  currency    text not null check (currency in ('EUR', 'CHF', 'USD')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger plt_member_allocation_touch
  before update on public.plt_member_allocation
  for each row execute function public.plt_touch_updated_at();

-- Exposition en pourcentage, par membre et par portefeuille : 40 = 40 %.
create table public.plt_member_exposure (
  member_id     uuid not null references public.plt_member_allocation (member_id) on delete cascade,
  portfolio_key text not null references public.plt_portfolio (key),
  exposure_pct  int  not null check (exposure_pct between 0 and 100),
  primary key (member_id, portfolio_key)
);

-- ---------------------------------------------------------------------------
-- RLS — chacun lit et écrit ses propres réglages ; les admins les consultent.
-- ---------------------------------------------------------------------------

alter table public.plt_member_allocation enable row level security;
alter table public.plt_member_exposure   enable row level security;

create policy plt_member_allocation_read on public.plt_member_allocation
  for select to authenticated
  using (
    (member_id = auth.uid() and public.plt_is_member())
    or public.plt_is_admin()
  );

create policy plt_member_allocation_insert_self on public.plt_member_allocation
  for insert to authenticated
  with check (member_id = auth.uid() and public.plt_is_member());

create policy plt_member_allocation_update_self on public.plt_member_allocation
  for update to authenticated
  using (member_id = auth.uid() and public.plt_is_member())
  with check (member_id = auth.uid() and public.plt_is_member());

create policy plt_member_exposure_read on public.plt_member_exposure
  for select to authenticated
  using (
    (member_id = auth.uid() and public.plt_is_member())
    or public.plt_is_admin()
  );

create policy plt_member_exposure_insert_self on public.plt_member_exposure
  for insert to authenticated
  with check (member_id = auth.uid() and public.plt_is_member());

create policy plt_member_exposure_update_self on public.plt_member_exposure
  for update to authenticated
  using (member_id = auth.uid() and public.plt_is_member())
  with check (member_id = auth.uid() and public.plt_is_member());

-- ---------------------------------------------------------------------------
-- Enregistrement — capital, devise et expositions en une seule transaction.
--
-- `security invoker` : la fonction s'exécute avec les droits du membre, les
-- politiques ci-dessus s'appliquent donc telles quelles.
-- `p_exposures` : {"efficient": 40, "dividende": 35, "antifragile": 25}.
-- ---------------------------------------------------------------------------

create or replace function public.plt_save_allocation(
  p_capital   numeric,
  p_currency  text,
  p_exposures jsonb
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Session requise.';
  end if;

  insert into public.plt_member_allocation (member_id, capital, currency)
  values (auth.uid(), p_capital, p_currency)
  on conflict (member_id) do update
  set capital  = excluded.capital,
      currency = excluded.currency;

  insert into public.plt_member_exposure (member_id, portfolio_key, exposure_pct)
  select auth.uid(), entry.key, entry.value::int
  from jsonb_each_text(p_exposures) as entry
  on conflict (member_id, portfolio_key) do update
  set exposure_pct = excluded.exposure_pct;
end;
$$;

revoke execute on function public.plt_save_allocation(numeric, text, jsonb) from public, anon;
grant execute on function public.plt_save_allocation(numeric, text, jsonb) to authenticated;
