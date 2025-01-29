"use client"

import { useState, useEffect } from "react"
import Header from "../../components/Header"
import ChatWindow from "../../components/ChatWindow"
import ChatInput from "../../components/ChatInput"
import { useChat } from "../../hooks/useChat"


export default function Chat() {
  const { messages, sendMessage, isLoading, error } = useChat()
  const [isInactive, setIsInactive] = useState(false)

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer)
      setIsInactive(false)
      inactivityTimer = setTimeout(() => setIsInactive(true), 60000) // 1 minute
    }

    window.addEventListener("mousemove", resetInactivityTimer)
    window.addEventListener("keypress", resetInactivityTimer)

    resetInactivityTimer()

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer)
      window.removeEventListener("keypress", resetInactivityTimer)
      clearTimeout(inactivityTimer)
    }
  }, [])

  useEffect(() => {
    if (isInactive) {
      sendMessage("Are you still there? How can I assist you?")
    }
  }, [isInactive, sendMessage])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Support Chat</h1>
        <div className="max-w-2xl mx-auto">
          <ChatWindow messages={messages} isLoading={isLoading} error={error} />
          <ChatInput onSendMessage={sendMessage} />
        </div>
      </main>
    </div>
  )
}

