import { useState, useCallback } from "react"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(async (text: string) => {
    setIsLoading(true)
    setError(null)

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
      // Simulating API call to get bot response
      const response = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(`This is a simulated response to: "${text}"`)
        }, 1000)
      })

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
      }

      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { messages, sendMessage, isLoading, error }
}

