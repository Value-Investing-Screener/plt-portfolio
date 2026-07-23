export const getCompaniesByTickersQuery = /* GraphQL */ `
  query GetCompaniesByTickers($tickers: [String!]!) {
    company(where: { ticker: { _in: $tickers } }) {
      name
      ticker
      currency
      sector
      country {
        continent {
          countryCode
          continentCode
        }
      }
      dividendYieldTTM
      stockPrice
    }
  }
`;

export const getPortfoliosQuery = /* GraphQL */ `
  query GetPortfolio($ownerEmail: String!) {
    portfolio(where: { userEmail: { _eq: $ownerEmail } }) {
      id
      name
      portfolioAllocations {
        allocation
        company {
          name
          ticker
          currency
          sector
          marketCapSize
          country {
            continent {
              countryCode
              continentCode
            }
          }
          dividendYieldTTM
          stockPrice
        }
      }
    }
  }
`;
