import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-3">
      <main className="flex flex-col items-center justify-center w-full  gap-3 m-auto text-center">
        <div className="flex flex-col items-center justify-center w-full gap-3 m-auto text-center">
        <h1 className="text-6xl mx-auto text-center font-bold">Welcome to the Dashboard & Chat App</h1>
        </div>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full gap-4 p-4">
          <Link
            href="/dashboard"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p className="mt-4 text-xl">View real-time metrics and user activity</p>
          </Link>
          <Link
            href="/chat"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Support Chat &rarr;</h3>
            <p className="mt-4 text-xl">Get help from our support team</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

