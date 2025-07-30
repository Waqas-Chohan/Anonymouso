"use client"
import { useState, useEffect } from "react"

function QuoteGenerator() {
  const [quote, setQuote] = useState("Loading quote...")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(false)

  // Local fallback quotes
  const fallbackQuotes = [
    { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
    { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" }
  ]

  const fetchQuote = async () => {
    setLoading(true)
    try {
      // Try the API with timestamp to avoid caching
      const timestamp = Date.now()
      const response = await fetch(`https://type.fit/api/quotes?_=${timestamp}`)
      
      if (!response.ok) throw new Error("API request failed")
      
      const data = await response.json()
      
      // Verify the response structure
      if (!Array.isArray(data) || !data[0]?.q) {
        throw new Error("Invalid API response format")
      }
      
      setQuote(data[0].q)
      setAuthor(data[0].a || "Unknown")
      return

    } catch (error) {
      console.error("API Error:", error)
      // Only use fallback if we're definitely offline
      if (!navigator.onLine) {
        const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]
        setQuote(randomFallback.q)
        setAuthor(randomFallback.a)
      } else {
        // If online but API failed, show error message
        setQuote("Click the button to try loading a new quote")
        setAuthor("")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div style={{ 
      padding: "30px", 
      fontFamily: "Arial",
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#2c3e50" }}>🌟 Random Quote</h2>
      <div style={{ minHeight: "120px" }}>
        <p style={{ 
          fontStyle: "italic",
          fontSize: "1.2rem",
          lineHeight: "1.6"
        }}>
          "{quote}"
        </p>
        {author && <p style={{ fontWeight: "bold" }}>- {author}</p>}
      </div>
      <button 
        onClick={fetchQuote} 
        disabled={loading}
        style={{ 
          padding: "10px 20px",
          backgroundColor: loading ? "#95a5a6" : "#3498db",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem",
          marginTop: "20px"
        }}
      >
        {loading ? "Loading..." : "Get New Quote"}
      </button>
    </div>
  )
}

export default QuoteGenerator