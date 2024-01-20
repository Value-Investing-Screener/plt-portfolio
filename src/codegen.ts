import type { CodegenConfig } from '@graphql-codegen/cli'

import { config } from 'dotenv'

config()

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error(
    'You need to provide a valid .env file with NEXT_PUBLIC_API_URL',
  )
}

const scalarsConfig = {
  scalars: {
    JSONB: 'any',
    timestamptz: 'string',
  },
}

const generateConfig = async (): Promise<CodegenConfig> => {
  return {
    overwrite: true,
    generates: {
      "src/database/generated-hasura-types.ts": {
        schema: {
          [process.env.HASURA_ENDPOINT!]: {
            headers: {
              "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
            },
          },
        },
        documents: ["src/database/*/mutations.ts", "src/database/*/queries.ts"],
        plugins: [
          {
            typescript: scalarsConfig,
          },
          {
            "typescript-operations": scalarsConfig,
          },
        ],
      },
    },
  }
}

export default generateConfig()
