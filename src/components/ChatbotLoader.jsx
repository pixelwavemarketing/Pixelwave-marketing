import { useEffect } from 'react'

const ChatbotLoader = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://ai-chatbot-p.netlify.app/embed.js'
    script.setAttribute('data-width', '350px') // Set chat window width
    script.setAttribute('data-height', '500px') // Set chat window height
    script.setAttribute('data-button-color', '#3b82f6') // Blue color to match your brand
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
