import { useQuery, QueryObserverResult } from "react-query";
import { Portfolio } from "@/database/getPortfolios";

export const useGetPortofliosQuery = (): QueryObserverResult<
  Portfolio[],
  any
> => {
  return useQuery(
    ["portoflios"],
    async () => {
      // URL relative : la route vit dans cette application. Une URL absolue
      // ferait une requête inter-origines dès qu'on navigue sur un autre alias
      // du déploiement — bloquée par CORS, et sans cookie de session.
      const response = await fetch("/api", { method: "GET" });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Session expirée — reconnectez-vous."
            : `Chargement des portefeuilles impossible (${response.status}).`
        );
      }

      return response.json();
    },
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: true,
    }
  );
};
