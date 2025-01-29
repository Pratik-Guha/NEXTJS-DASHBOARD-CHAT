import { Suspense } from "react"
import Header from "../../components/Header"
import ActiveUsersChart from "../../components/ActiveUsersChart"
import ActivityMetricsChart from "../../components/ActivityMetricsChart"
import LiveUserCounter from "../../components/LiveUserCounter"
import ActivityFeed from "../../components/ActivityFeed"
import ConnectionStatus from "../../components/ConnectionStatus"


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Suspense fallback={<div>Loading chart...</div>}>
            <ActiveUsersChart />
          </Suspense>
          <Suspense fallback={<div>Loading chart...</div>}>
            <ActivityMetricsChart />
          </Suspense>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <LiveUserCounter />
          <ActivityFeed />
          <ConnectionStatus />
        </div>
      </main>
    </div>
  )
}

