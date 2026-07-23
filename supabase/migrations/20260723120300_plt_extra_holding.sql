-- ---------------------------------------------------------------------------
-- PLT Insider — lignes hors référentiel Value Investing Screener.
--
-- Les ETF obligataires et le cash ne sont pas des `company` du screener : ils
-- étaient codés en dur dans `src/database/getPortfolios.ts`. Ils vivent ici,
-- et sont fusionnés avec les allocations Hasura à la lecture.
-- ---------------------------------------------------------------------------

create table public.plt_extra_holding (
  id                 uuid primary key default gen_random_uuid(),
  portfolio_key      text not null references public.plt_portfolio (key) on delete cascade,
  name               text not null,
  ticker             text not null,
  currency           text not null,
  sector             text not null default '',
  country_code       text,
  continent_code     text,
  -- Pondération dans le portefeuille, en % — même unité que
  -- `portfolioAllocation.allocation` côté Hasura.
  allocation         numeric(8, 4) not null,
  dividend_yield_ttm numeric(8, 4) not null default 0,
  market_cap_size    text,
  -- Cours figé : laisser nul pour interroger EODHD, 0 pour du cash.
  stock_price        numeric(16, 6),
  position           int not null default 0,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),
  unique (portfolio_key, ticker)
);

create trigger plt_extra_holding_touch
  before update on public.plt_extra_holding
  for each row execute function public.plt_touch_updated_at();

insert into public.plt_extra_holding
  (portfolio_key, name, ticker, currency, sector, country_code, continent_code,
   allocation, dividend_yield_ttm, stock_price, position)
values
  ('antifragile', 'iShares 3-7 Year Treasury Bond ETF', 'IEI.US', 'USD',
   'Bonds IT', 'US', 'NA', 13.4, 3.88, null, 1),
  ('antifragile', 'iShares China Bonds', 'CBND.SW', 'USD',
   'Bonds LT', 'CN', 'AS', 8.93, 0, null, 2),
  -- Le cash n'a pas de cours : la quantité de titres reste « — ».
  ('antifragile', 'Cash Franc Suisse', 'CHFEUR=X', 'CHF',
   'Cash', 'CH', 'EU', 5.95, 0, 0, 3);

alter table public.plt_extra_holding enable row level security;

create policy plt_extra_holding_read on public.plt_extra_holding
  for select to authenticated
  using (public.plt_is_member());

create policy plt_extra_holding_admin_write on public.plt_extra_holding
  for all to authenticated
  using (public.plt_is_admin())
  with check (public.plt_is_admin());
