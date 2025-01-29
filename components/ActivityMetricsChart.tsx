"use client"

import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js"

// Register ChartJS components
const registerChartJS = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
}

const initialChartData: ChartData<"bar"> = {
  labels: ["Logins", "Messages", "Purchases", "Page Views"],
  datasets: [
    {
      label: "Activity Metrics",
      data: [0, 0, 0, 0],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
    },
  ],
}

export default function ActivityMetricsChart() {
  const [isClient, setIsClient] = useState(false)
  const [chartData, setChartData] = useState<ChartData<"bar">>(initialChartData)

  useEffect(() => {
    registerChartJS()
    setIsClient(true)

    const interval = setInterval(() => {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: prevData.datasets[0].data.map(() => Math.floor(Math.random() * 100) + 1),
          },
        ],
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Activity Metrics",
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
      <Bar options={options} data={chartData} />
    </div>
  )
}

