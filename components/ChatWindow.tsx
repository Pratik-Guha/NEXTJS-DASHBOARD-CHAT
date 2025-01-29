import { useEffect, useRef } from "react"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
}

type ChatWindowProps = {
  messages: Message[]
  isLoading: boolean
  error: string | null
}

export default function ChatWindow({ messages, isLoading, error }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messagesEndRef])

  return (
    <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md h-96 overflow-y-auto">
      {messages.map((message) => (
        <div key={message.id} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
          <span
            className={`inline-block p-2 rounded-lg ${
              message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {message.text}
          </span>
        </div>
      ))}
      {isLoading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div ref={messagesEndRef} />
    </div>
  )
}

