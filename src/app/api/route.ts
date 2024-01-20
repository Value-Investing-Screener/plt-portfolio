import { getPortfolios } from "@/database/getPortfolios";


export async function GET(req: Request) {
  const portfolios = await getPortfolios();

  return Response.json(portfolios);
}
