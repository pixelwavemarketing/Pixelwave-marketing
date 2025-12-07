import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { trackContactForm, trackButtonClick } from './FacebookPixel'
import { trackApolloFormSubmit, trackApolloLead } from './Apollo'

function ContactForm() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [otherService, setOtherService] = useState('')

  const services = [
    'Digital Marketing',
    'AI Chatbot Solutions',
    'Website Design',
    'Content Creation',
    'Brand Identity',
    'Marketing Systems',
    'Analytics & Reporting',
    'Print Design'
  ]

  const handleServiceChange = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    
    // Get form data
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    // Build services string
    let servicesText = ''
    if (selectedServices.length > 0) {
      servicesText = selectedServices.join(', ')
      if (selectedServices.includes('Other') && otherService.trim()) {
        servicesText += ` (Other: ${otherService.trim()})`
      }
    }
    
    // Add services to form data
    data.services = servicesText || 'None selected'
    if (otherService.trim()) {
      data.other_service = otherService.trim()
    }
    
    // Append services to message so it's visible in email
    if (servicesText) {
      const originalMessage = data.message || ''
      data.message = originalMessage + (originalMessage ? '\n\n' : '') + 
        `Services of Interest: ${servicesText}`
    }
    
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
      
      {/* Hidden inputs for selected services - Always present for Netlify */}
      <input 
        type="hidden" 
        name="services" 
        value={selectedServices.length > 0 
          ? (selectedServices.includes('Other') && otherService.trim()
              ? selectedServices.join(', ') + ` (Other: ${otherService.trim()})`
              : selectedServices.join(', '))
          : 'None selected'
        } 
      />
      <input 
        type="hidden" 
        name="other_service" 
        value={otherService.trim() || ''} 
      />
      
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
          marginBottom: '10px',
          color: '#333',
          fontWeight: '500'
        }}>
          Services of Interest (Select all that apply)
        </label>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '15px',
          backgroundColor: '#f8fafc',
          borderRadius: '4px',
          border: '1px solid #e2e8f0'
        }}>
          {services.map((service) => (
            <label
              key={service}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#333'
              }}
            >
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceChange(service)}
                style={{
                  marginRight: '10px',
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer'
                }}
              />
              <span>{service}</span>
            </label>
          ))}
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '15px',
              color: '#333',
              marginTop: '5px'
            }}
          >
            <input
              type="checkbox"
              name="services"
              value="Other"
              checked={selectedServices.includes('Other')}
              onChange={() => handleServiceChange('Other')}
              style={{
                marginRight: '10px',
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            <span>Other</span>
          </label>
          {selectedServices.includes('Other') && (
            <input
              type="text"
              name="other_service"
              placeholder="Please specify..."
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              style={{
                marginLeft: '28px',
                marginTop: '8px',
                width: 'calc(100% - 28px)',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            />
          )}
        </div>
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