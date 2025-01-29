import { useState, useEffect, useCallback } from "react"

export function useWebSocket(url = "wss://your-websocket-server-url") {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [lastMessage, setLastMessage] = useState<MessageEvent | null>(null)
  const [readyState, setReadyState] = useState<number>(WebSocket.CONNECTING)

  useEffect(() => {
    const ws = new WebSocket(url)

    ws.onopen = () => setReadyState(WebSocket.OPEN)
    ws.onclose = () => setReadyState(WebSocket.CLOSED)
    ws.onmessage = (event) => setLastMessage(event)

    setSocket(ws)

    return () => {
      ws.close()
    }
  }, [url])

  const sendMessage = useCallback(
    (message: string) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(message)
      }
    },
    [socket],
  )

  return { lastMessage, readyState, sendMessage }
}

