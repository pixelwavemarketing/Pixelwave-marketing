import { useEffect } from 'react'

const ChatbotLoader = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://ai-chatbot-eta-sandy.vercel.app/embed.js'
    script.setAttribute('data-button-color', '#3b82f6') // Blue color to match your brand
    script.setAttribute('data-width', '400px') // Set chat window width
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // This component doesn't render anything - just loads the original chatbot
  return null
}

export default ChatbotLoader
