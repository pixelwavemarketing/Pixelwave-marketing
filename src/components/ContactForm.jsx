import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { trackContactForm, trackButtonClick } from './FacebookPixel'
import { trackApolloFormSubmit, trackApolloLead } from './Apollo'

function ContactForm() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    
    // Get form data
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    try {
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...data
        })
      })

      if (response.ok) {
        // Track successful form submission
        trackContactForm('contact')
        // Track with Apollo.io
        trackApolloFormSubmit('contact', {
          name: data.name,
          email: data.email,
          business: data.business,
          phone: data.phone
        })
        trackApolloLead('contact_form', {
          name: data.name,
          email: data.email,
          company: data.business
        })
        // Redirect to thank you page
        navigate('/thank-you')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('There was an error submitting the form. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify="true"
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        maxWidth: '500px',
        padding: '20px'
      }}
    >
      {/* Hidden input for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Bot field honeypot */}
      <p style={{ display: 'none' }}>
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Name <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Email <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Phone Number <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Business Name <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="text"
          name="business"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      {/* Error/Status Message */}
      {submitStatus && (
        <div style={{
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px',
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          {submitStatus}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        onClick={() => trackButtonClick('Contact Form Submit', 'contact_form')}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: isSubmitting ? '#9ca3af' : '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          fontWeight: '500',
          transition: 'background-color 0.3s ease'
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm 