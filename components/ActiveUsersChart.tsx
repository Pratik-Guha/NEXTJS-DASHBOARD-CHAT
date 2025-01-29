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
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ActiveUsersChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Active Users",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  })

  useEffect(() => {
    // Simulating real-time data updates
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newLabel = new Date().toLocaleTimeString()
        const newData = Math.floor(Math.random() * 100) + 1

        return {
          labels: [...prevData.labels.slice(-11), newLabel],
          datasets: [
            {
              ...prevData.datasets[0],
              data: [...prevData.datasets[0].data.slice(-11), newData],
            },
          ],
        }
      })
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
        text: "Active Users Over Time",
      },
    },
  }

  return <Line options={options} data={chartData} />
}

