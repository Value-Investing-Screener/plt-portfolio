import { ChartData } from "chart.js";
import { groupBy, uniq, sum } from "lodash";
import { Pie } from "../Pie";
import {
  lightCoral,
  keppel,
  richBlack,
  lightKeppel,
  coral,
  darkCoral,
  darkKeppel,
  darkRichBlack,
  lightRichBlack,
  night,
} from "../../colors";
import { Company } from "../types";

const getSectorColors = (sector?: string | null) => {
  const colors = [
    lightCoral,
    coral,
    darkCoral,
    lightKeppel,
    keppel,
    darkKeppel,
    lightRichBlack,
    richBlack,
    darkRichBlack,
    night,
  ];
  return colors[Math.floor(Math.random() * colors.length)]
};

type SectorChartProps = {
  companies: Company[];
};

export const SectorChart = ({ companies }: SectorChartProps) => {
  const companiesBySector = groupBy(companies, ({ sector }) => sector);

  const sectorsDataset: ChartData<"pie", number[], string> = {
    labels: uniq(companies.map(({ sector }) => sector || "")),
    datasets: [
      {
        data: Object.values(companiesBySector).map((companies) =>
          sum(companies.map(({ allocation }) => allocation))
        ),
        backgroundColor: (ctx) => {
          const company = Object.values(companiesBySector)[ctx.dataIndex]?.[0];
          return getSectorColors(company.sector);
        },
      },
    ],
  };
  return <Pie title="Répartition Sectorielle" dataset={sectorsDataset} />;
};
