import Link from "next/link"
import { ArrowRight } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
import { Card,CardContent } from "../components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center flex-1 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Welcome to the Dashboard & Chat App
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
          <Link href="/dashboard" className="group">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary">Dashboard</h3>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-4 text-muted-foreground text-lg">View real-time metrics and user activity</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/chat" className="group">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary">Support Chat</h3>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-4 text-muted-foreground text-lg">Get help from our support team</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}

