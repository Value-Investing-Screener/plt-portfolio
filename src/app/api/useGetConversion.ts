import { QueryObserverResult, useQuery } from "react-query";

export const useGetConversionsQuery = (): QueryObserverResult<
  {
    [currency: string]: number;
  },
  any
> => {
  return useQuery(
    ["conversions"],
    async () => {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`, {
        method: "GET",
      });
      const { rates } = await response?.json();
      return rates
    },
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: true,
    }
  );
};
