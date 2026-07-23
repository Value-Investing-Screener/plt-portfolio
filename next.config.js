/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    serverActions: {
      // Les rapports mensuels et les revues annuelles pèsent une dizaine de Mo ;
      // la limite par défaut des Server Actions est de 1 Mo.
      bodySizeLimit: '30mb',
    },
  },
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
