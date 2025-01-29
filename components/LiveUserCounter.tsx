"use client"

import { useState, useEffect } from "react"
import { useWebSocket } from "../hooks/useWebSocket"

export default function LiveUserCounter() {
  const [userCount, setUserCount] = useState(0)
  const { lastMessage } = useWebSocket()

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data)
      if (data.type === "userCount") {
        setUserCount(data.count)
      }
    }
  }, [lastMessage])

  return (
    <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Live Users</h2>
      <p className="text-4xl font-bold">{userCount}</p>
    </div>
  )
}

