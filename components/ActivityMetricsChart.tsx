"use client"

import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ActivityMetricsChart() {
  const [chartData, setChartData] = useState({
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
  })

  useEffect(() => {
    // Simulating real-time data updates
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Activity Metrics",
      },
    },
  }

  return <Bar options={options} data={chartData} />
}

