import { ChartData } from "chart.js";
import { groupBy, uniq, sum } from "lodash";
import { Pie } from "../Pie";
import { lightCoral, keppel, richBlack, lightKeppel } from "../../colors";
import { Company } from "../types";

const getSizeColors = (marketCapSize?: string | null) => {
  switch (marketCapSize) {
    case "large":
      return lightCoral;
    case "medium":
      return keppel;
    case "small":
      return richBlack;
    default:
      return lightKeppel;
  }
};

type SizeChartProps = {
  companies: Company[];
};

export const SizeChart = ({ companies }: SizeChartProps) => {
  const companiesBySize = groupBy(companies, ({ marketCapSize }) => marketCapSize);

  const sizesDataset: ChartData<"pie", number[], string> = {
    labels: uniq(companies.map(({ marketCapSize }) => marketCapSize || '')),
    datasets: [
      {
        data: Object.values(companiesBySize).map((companies) =>
          sum(companies.map(({ allocation }) => allocation))
        ),
        backgroundColor: (ctx) => {
          const company = Object.values(companiesBySize)[ctx.dataIndex]?.[0];
          return getSizeColors(company.marketCapSize);
        },
      },
    ],
  };
  return <Pie title="Répartition Asset Sizing" dataset={sizesDataset} />;
};
