import { useQuery, QueryObserverResult } from "react-query";
import { Portfolio } from "@/database/getPortfolios";

export const useGetPortofliosQuery = (): QueryObserverResult<
  Portfolio[],
  any
> => {
  return useQuery(
    ["portoflios"],
    async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
        method: "GET",
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
      });
      return response.json();
    },
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: true,
    }
  );
};
