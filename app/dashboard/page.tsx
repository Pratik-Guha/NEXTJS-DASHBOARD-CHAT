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

        {/* Charts in column layout */}
        <div className="space-y-8 mb-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Suspense fallback={<div>Loading chart...</div>}>
              <ActiveUsersChart />
            </Suspense>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Suspense fallback={<div>Loading chart...</div>}>
              <ActivityMetricsChart />
            </Suspense>
          </div>
        </div>

        {/* Bottom cards in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <LiveUserCounter />
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ActivityFeed />
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ConnectionStatus />
          </div>
        </div>
      </main>
    </div>
  )
}

