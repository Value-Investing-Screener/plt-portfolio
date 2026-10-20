-- ---------------------------------------------------------------------------
-- PLT Insider — dernière visite de chaque membre.
--
-- `auth.users.last_sign_in_at` ne bouge qu'à la saisie des identifiants ; la
-- session restant ouverte d'une visite à l'autre, elle sous-estime l'usage.
-- `last_seen_at` est mis à jour à chaque passage dans l'espace client, au plus
-- une fois par heure.
-- ---------------------------------------------------------------------------

alter table public.plt_member
  add column last_seen_at timestamptz;

-- Les membres ne peuvent pas modifier leur fiche (RLS) : cette fonction ne
-- touche que `last_seen_at`, et seulement pour le membre connecté. (Le trigger
-- `plt_member_touch` avance aussi `updated_at` au passage.)
create or replace function public.plt_touch_last_seen()
returns void
language sql
security definer
set search_path = public
as $$
  update public.plt_member
  set last_seen_at = now()
  where id = auth.uid()
    and is_active
    and (last_seen_at is null or last_seen_at < now() - interval '1 hour');
$$;

revoke execute on function public.plt_touch_last_seen() from public, anon;
grant execute on function public.plt_touch_last_seen() to authenticated;
