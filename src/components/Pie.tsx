import { Pie as PieChart } from 'react-chartjs-2'
import {
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  TooltipCallbacks,
  registerables,
} from 'chart.js'

ChartJS.register(...registerables)

export type PieType = {
  dataset: ChartData<'pie', number[], string>
  title?: string
  formatTooltip?: Partial<TooltipCallbacks<'pie'>>
}

export const Pie = ({
  dataset,
  title = '',
  formatTooltip,
}: PieType) => {
  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: false
      },
      title: {
        display: true,
        text: title,
        color: "black",
        padding: { bottom: 30 },
        font: {
          size: 15,
          weight: 1
        },
      },
      tooltip: {
        mode: 'index',
        intersect: true,
        displayColors: false,
        callbacks: formatTooltip,
      },
    },
  }
  return <PieChart options={options} data={dataset} />
}
