"use client"

import { useState, useEffect } from "react"
import { useWebSocket } from "../hooks/useWebSocket"

type Activity = {
  id: string
  type: string
  user: string
  timestamp: string
}

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([])
  const { lastMessage } = useWebSocket()

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data)
      if (data.type === "activity") {
        setActivities((prev) => [data.activity, ...prev.slice(0, 9)])
      }
    }
  }, [lastMessage])

  return (
    <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Activity Feed</h2>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="text-sm">
            <span className="font-medium">{activity.user}</span> {activity.type} at{" "}
            {new Date(activity.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  )
}

