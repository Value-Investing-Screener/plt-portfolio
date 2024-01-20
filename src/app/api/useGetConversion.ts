import { QueryObserverResult, useQuery } from "react-query";

export const useGetConversionsQuery = (): QueryObserverResult<
  {
    [currency: string]: number;
  },
  any
> => {
  return useQuery(["conversions"], async () => {
    return fetch(`https://api.exchangerate-api.com/v4/latest/USD`, {
      method: "GET",
    }).then(async (res) => {
      const { rates } = await res?.json();
      return rates
    });
  });
};
