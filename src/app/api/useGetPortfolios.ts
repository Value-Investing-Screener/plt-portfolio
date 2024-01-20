import { Portfolio } from "@/database/getPortfolios";
import { QueryObserverResult, useQuery } from "react-query";

export const useGetPortofliosQuery = (): QueryObserverResult<
  Portfolio[],
  any
> => {
  return useQuery(["portoflios"], async () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
      method: "GET",
    }).then(async (res) => {
      return res?.json();
    });
  });
};
