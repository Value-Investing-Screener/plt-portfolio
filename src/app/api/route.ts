export const revalidate = 0;

import { getPortfolios } from "@/database/getPortfolios";

const NO_STORE = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

export async function GET() {
  try {
    const portfolios = await getPortfolios();
    return Response.json(portfolios, { headers: NO_STORE });
  } catch (error) {
    // Hasura injoignable, variable d'environnement absente, EODHD en panne :
    // on renvoie un message exploitable plutôt qu'une 500 opaque.
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "object" && error !== null
        ? JSON.stringify(error)
        : "Erreur inconnue";

    console.error("[PLT] /api :", message);

    return Response.json(
      { error: `Portefeuilles indisponibles : ${message}` },
      { status: 502, headers: NO_STORE }
    );
  }
}
