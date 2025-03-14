export const revalidate = 0;
import { getPortfolios } from "@/database/getPortfolios";


export async function GET(req: Request) {
  const portfolios = await getPortfolios();

  return Response.json(portfolios, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    }
  });
}
