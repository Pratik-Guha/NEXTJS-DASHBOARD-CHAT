"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js"

// Register ChartJS components
const registerChartJS = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
}

const initialChartData: ChartData<"line"> = {
  labels: [],
  datasets: [
    {
      label: "Active Users",
      data: [],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
      fill: false,
    },
  ],
}

export default function ActiveUsersChart() {
  const [isClient, setIsClient] = useState(false)
  const [chartData, setChartData] = useState<ChartData<"line">>(initialChartData)

  useEffect(() => {
    registerChartJS()
    setIsClient(true)

    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newLabel = new Date().toLocaleTimeString()
        const newData = Math.floor(Math.random() * 100) + 1

        return {
          labels: [...(prevData.labels?.slice(-11) || []), newLabel],
          datasets: [
            {
              ...(prevData.datasets[0] || {}),
              data: [...(prevData.datasets[0]?.data?.slice(-11) || []), newData],
            },
          ],
        }
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Active Users Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  if (!isClient) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-[300px]">
      <Line options={options} data={chartData} />
    </div>
  )
}

