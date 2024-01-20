import axios from "axios";

const getQueryName = (query: string) =>
  query.toString().split(" ")[3]?.split("(")[0];

export const callDatabase = <T>({
  query,
  variables,
}: {
  query: string;
  variables?: unknown;
}): Promise<T> => {
  return axios
    .post(
      process.env.HASURA_ENDPOINT!,
      {
        query,
        variables,
      },
      {
        headers: { "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET },
        timeout: 5000,
      }
    )
    .then((response) => {
      if (response.data.errors) {
        throw response.data.errors;
      }
      return response.data;
    })
    .catch((errors) => {
      const queryName = getQueryName(query);
      if (
        errors.message === "timeout of 5000ms exceeded" ||
        errors.message === "socket hang up"
      ) {
        const error = {
          queryName,
          message: errors.message,
        };
        console.error(JSON.stringify(error));
        throw error;
      }
      console.error(`${queryName} - ${JSON.stringify(errors)}`);
      throw {
        queryName,
        errors: JSON.stringify(errors),
        variables,
      };
    });
};

export * from "./generated-hasura-types";
