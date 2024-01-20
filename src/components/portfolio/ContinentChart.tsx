import { ChartData } from "chart.js";
import { groupBy, uniq, sum } from "lodash";
import { Pie } from "../Pie";
import { lightCoral, keppel, richBlack, lightKeppel, night, coral, darkCoral, lightRichBlack } from "../../colors";
import { Company } from "../types";

const getContinentColors = (continent?: string) => {
  switch (continent) {
    case "AF":
      return lightCoral;
    case "NA":
      return keppel;
    case "SA":
      return richBlack;
    case "AS":
      return coral;
    case "EU":
      return lightKeppel;
    case "OC":
      return lightRichBlack;
    case "AN":
      return darkCoral;
    default:
      return night;
  }
};

type ContinentChartProps = {
  companies: Company[];
};

export const ContinentChart = ({ companies }: ContinentChartProps) => {
  const companiesByContinent = groupBy(companies, ({ continentCode }) => continentCode);

  const continentsDataset: ChartData<"pie", number[], string> = {
    labels: uniq(companies.map(({ continentCode }) => continentCode || "")),
    datasets: [
      {
        data: Object.values(companiesByContinent).map((companies) =>
          sum(companies.map(({ allocation }) => allocation))
        ),
        backgroundColor: (ctx) => {
          const company =
            Object.values(companiesByContinent)[ctx.dataIndex]?.[0];
          return getContinentColors(company.continentCode);
        },
      },
    ],
  };
  return <Pie title="Répartition Géographique" dataset={continentsDataset} />;
};
