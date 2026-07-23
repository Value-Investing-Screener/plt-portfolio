# Supabase — mise en route

Supabase porte les **accès** (comptes, rôles), le **contenu éditorial** (publications
mensuelles, revues annuelles) et le **stockage privé** des PDF.
La composition des portefeuilles, les cours et les dividendes restent dans le Hasura
Value Investing Screener.

## 1. Créer le projet

1. <https://supabase.com/dashboard> → **New project** (région Europe, offre gratuite).
2. **Project Settings → API**, reporter dans `.env` :
   - `NEXT_PUBLIC_SUPABASE_URL` ← *Project URL*
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ← clé *anon / public*
   - `SUPABASE_SERVICE_ROLE_KEY` ← clé *service_role* (**secrète**)

## 2. Appliquer les migrations

La CLI est installée **dans le projet** : elle n'existe pas dans le `PATH`, il faut passer
par les scripts npm (ou `npx supabase …`).

```bash
npm run db:login   # ouvre le navigateur, colle le jeton retourné
npm run db:link    # demande le project-ref puis le mot de passe de la base
npm run db:push    # applique les migrations manquantes, dans l'ordre
```

Le *project-ref* est la partie variable de l'URL (`https://<ref>.supabase.co`), le mot de
passe est celui saisi à la création du projet (Project Settings → Database si oublié).

> **`SUPABASE_ACCESS_TOKEN` n'est ni la clé anon ni la clé service_role.** C'est un jeton
> personnel de compte, au format `sbp_…`, créé sur
> <https://supabase.com/dashboard/account/tokens>. `npm run db:login` le pose au bon
> endroit (`~/.supabase`) — inutile de le mettre dans `.env`, et une valeur erronée y fait
> échouer `db:link` avec « Invalid access token format ».

`npm run db:status` liste ce qui est appliqué localement et à distance. Les migrations
déjà passées sont ignorées : `db:push` est rejouable sans risque après l'ajout d'un
fichier.

> Alternative sans CLI : coller le contenu des fichiers de `supabase/migrations/` dans le
> **SQL Editor** du dashboard, dans l'ordre de leur nom. Supabase ne saura alors pas
> qu'elles sont appliquées — ne pas mélanger les deux méthodes.

## 3. Désactiver l'inscription publique

**Authentication → Sign In / Providers → Email** : décocher *Allow new users to sign up*.
Les comptes sont créés uniquement par un administrateur depuis le Backoffice.

## 4. Adapter les gabarits d'e-mail

**Authentication → Emails**, pour *Invite user* et *Reset password*, remplacer le lien par :

```
{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite&next=/auth/reset
```

(`type=recovery` pour la réinitialisation.) La route `/auth/confirm` accepte aussi le
format `?code=…` par défaut, mais ce gabarit est le plus fiable côté serveur.

Renseigner **Authentication → URL Configuration → Site URL** avec la même valeur que
`NEXT_PUBLIC_SITE_URL`, et ajouter l'URL de production aux *Redirect URLs*.

## 5. Créer le premier administrateur

Le Backoffice ne peut inviter personne tant qu'aucun administrateur n'existe — il faut
donc amorcer à la main :

1. **Authentication → Users → Add user**, avec une adresse réelle.
   Le trigger `plt_on_auth_user_created` crée automatiquement le profil `plt_member`.
2. Dans le **SQL Editor** :

```sql
update public.plt_member
set role = 'admin', full_name = 'Prénom Nom'
where email = 'admin@exemple.fr';
```

## Rôles

| Rôle | Accès |
|---|---|
| `admin` | Espace client **et** Backoffice (publications, revues, contacts), page `/config` |
| `user` | Espace client seul — l'onglet Backoffice n'est ni affiché ni exécutable |

Le masquage de l'onglet n'est qu'un confort : chaque Server Action revérifie le rôle
(`requireAdmin` dans `src/lib/auth.ts`) et la RLS refuse les écritures non-admin.
