-- ---------------------------------------------------------------------------
-- PLT Insider — jetons de définition de mot de passe.
--
-- Générés par un administrateur depuis le backoffice, remis à la main au client
-- (lien copiable). Indépendants des e-mails Supabase, avec une validité de 48 h
-- garantie côté application — l'expiration des liens Supabase est un réglage
-- global plafonné.
-- ---------------------------------------------------------------------------

create table public.plt_password_reset_token (
  token       uuid primary key default gen_random_uuid(),
  member_id   uuid not null references auth.users (id) on delete cascade,
  email       text not null,
  created_at  timestamptz not null default now(),
  expires_at  timestamptz not null,
  used_at     timestamptz
);

create index plt_password_reset_member_idx
  on public.plt_password_reset_token (member_id);

-- RLS active sans aucune politique : la table est inaccessible depuis le
-- navigateur. Seule la clé service_role (Server Actions) la lit et l'écrit.
alter table public.plt_password_reset_token enable row level security;
