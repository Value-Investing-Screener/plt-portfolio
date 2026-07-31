# parlons-long-terme.com

Application Next.js (App Router) qui sert **deux surfaces** sur un seul domaine.

| URL | Contenu | Accès |
| --- | --- | --- |
| `/` | Site vitrine « Parlons Long Terme » | Public, statique |
| `/insider` | Espace client PLT Insider — allocation & portefeuilles | Session requise |
| `/insider/performances`, `/insider/review`, `/insider/revue-annuelle` | Onglets de l'espace | Session requise |
| `/insider/backoffice`, `/insider/config` | Backoffice | Administrateurs |
| `/insider/login`, `/insider/auth/*` | Connexion, invitation, réinitialisation | Public |
| `/api/*` | Données des portefeuilles, documents signés | Session requise |

Le préfixe `/insider` est déclaré une seule fois, dans [`src/lib/routes.ts`](src/lib/routes.ts).
Le middleware ([`src/middleware.ts`](src/middleware.ts)) ne s'exécute que sur `/insider`
et `/api` : la vitrine reste publique et prérendue.

### Ancien sous-domaine

`insider.parlons-long-terme.com` est redirigé en 308 vers
`www.parlons-long-terme.com/insider/…` (voir `redirects()` dans
[`next.config.js`](next.config.js)). Les deux domaines doivent rester rattachés
au projet Vercel pour que la redirection s'applique.

## Développement

```bash
npm install
cp .env.example .env   # puis renseigner les variables
npm run dev            # http://localhost:3000
```

Sans variables Supabase, l'authentification est désactivée en développement et
l'application renvoie 503 en production.

## Organisation

```
src/app/            routes — page.tsx (vitrine), insider/ (espace client), api/
src/components/site/  sections de la vitrine
src/components/insider/ interface de l'espace client
src/design/         tokens.ts (espace client) · site.ts (vitrine)
src/lib/            auth, Supabase, requêtes Hasura, e-mails, routes
supabase/           migrations
```

Les photos de la vitrine se déposent dans [`public/site/`](public/site/README.md).

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` / `build` / `start` | Cycle Next.js |
| `npm run lint` | ESLint |
| `npm run generate` | Types GraphQL (Hasura) |
| `npm run db:push` / `db:status` | Migrations Supabase |
| `npm run db:admin` | Création d'un compte administrateur |
