import { useEffect, useState } from 'react'

const ChatbotLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load chatbot on first user interaction
    const loadChatbot = () => {
      if (isLoaded) return
      
      // Check if script is already loaded
      if (document.querySelector('script[src="https://ai-chatbot-p.netlify.app/embed.js"]')) {
        console.log('Chatbot script already loaded')
        return
      }

      const script = document.createElement('script')
      script.src = 'https://ai-chatbot-p.netlify.app/embed.js'
      script.setAttribute('data-width', '400px') // Set chat window width
      script.setAttribute('data-height', '600px') // Set chat window height
      script.setAttribute('data-button-color', '#3b82f6') // Blue color to match your brand
      script.setAttribute('data-button-text', 'Need Help?') // Custom button text
      script.setAttribute('data-position', 'bottom-right') // Explicit positioning
      script.setAttribute('data-draggable', 'true') // Allow dragging
      script.setAttribute('data-resizable', 'true') // Allow resizing
      script.setAttribute('data-theme', 'light') // Light theme
      script.setAttribute('data-button-size', 'large') // Large button size
      script.async = true
      
      // Add error handling
      script.onload = () => {
        console.log('Chatbot script loaded successfully')
        setIsLoaded(true)
      }
      
      script.onerror = (error) => {
        console.error('Failed to load chatbot script:', error)
      }
      
      document.body.appendChild(script)
    }

    // Load on user interaction
    const events = ['mousedown', 'touchstart', 'keydown', 'scroll']
    const loadOnInteraction = () => {
      loadChatbot()
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction)
      })
    }

    events.forEach(event => {
      document.addEventListener(event, loadOnInteraction, { once: true, passive: true })
    })

    // Fallback: load after 3 seconds if no interaction
    const fallbackTimer = setTimeout(loadChatbot, 3000)

    return () => {
      clearTimeout(fallbackTimer)
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction)
      })
    }
  }, [isLoaded])

  // This component doesn't render anything - just loads the original chatbot
  return null
}

export default ChatbotLoader
