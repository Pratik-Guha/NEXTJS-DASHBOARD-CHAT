"use client"

import { useWebSocket } from "../hooks/useWebSocket"


export default function ConnectionStatus() {
  const { readyState } = useWebSocket()

  let status = "Connecting"
  let statusClass = "bg-yellow-500"

  if (readyState === WebSocket.OPEN) {
    status = "Connected"
    statusClass = "bg-green-500"
  } else if (readyState === WebSocket.CLOSED) {
    status = "Disconnected"
    statusClass = "bg-red-500"
  }

  return (
    <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Connection Status</h2>
      <div className={`px-2 py-1 rounded ${statusClass} text-white inline-block`}>{status}</div>
    </div>
  )
}

