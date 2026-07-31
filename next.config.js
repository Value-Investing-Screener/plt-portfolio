/**
 * @type {import('next').NextConfig}
 */

// Ces constantes doublent `src/lib/routes.ts` : next.config.js est chargé par
// Node avant toute compilation TypeScript et ne peut pas importer le module.
const LEGACY_INSIDER_HOST = 'insider.parlons-long-terme.com';
const SITE_ORIGIN = 'https://www.parlons-long-terme.com';

const nextConfig = {
  experimental: {
    serverActions: {
      // Les rapports mensuels et les revues annuelles pèsent une dizaine de Mo ;
      // la limite par défaut des Server Actions est de 1 Mo.
      bodySizeLimit: '30mb',
    },
  },

  /**
   * L'espace client a longtemps vécu sur son propre sous-domaine ; il est
   * désormais monté sous `/insider` du domaine principal, la racine revenant
   * au site vitrine. On redirige donc en 308 tout ce qui arrive encore sur
   * l'ancien hôte — les liens des e-mails déjà envoyés et les favoris des
   * membres continuent de fonctionner.
   */
  // async redirects() {
  //   const onLegacyHost = [{ type: 'host', value: LEGACY_INSIDER_HOST }];

  //   return [
  //     // Les routes d'API n'ont pas bougé : elles ne prennent pas le préfixe.
  //     {
  //       source: '/api/:path*',
  //       has: onLegacyHost,
  //       destination: `${SITE_ORIGIN}/api/:path*`,
  //       permanent: true,
  //     },
  //     {
  //       source: '/',
  //       has: onLegacyHost,
  //       destination: `${SITE_ORIGIN}/insider`,
  //       permanent: true,
  //     },
  //     {
  //       source: '/:path*',
  //       has: onLegacyHost,
  //       destination: `${SITE_ORIGIN}/insider/:path*`,
  //       permanent: true,
  //     },
  //   ];
  // },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
};

module.exports = nextConfig
