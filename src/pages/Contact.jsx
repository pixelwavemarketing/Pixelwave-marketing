import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Contact() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    number: '',
    notes: ''
  })

  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('Sending...')

    const templateParams = {
      to_name: "Pixelwave Marketing",
      from_name: formData.name,
      from_email: formData.email,
      business: formData.business,
      phone: formData.number,
      message: formData.notes,
      reply_to: formData.email
    }

    try {
      console.log('Sending email with params:', templateParams)
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Success:', result)
      setSubmitStatus('Message sent successfully!')
      setFormData({
        name: '',
        business: '',
        email: '',
        number: '',
        notes: ''
      })

      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)

    } catch (error) {
      console.error('Error details:', error)
      setSubmitStatus(`Failed to send message: ${error.text || 'Unknown error'}`)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '2px solid #333',
    backgroundColor: '#f8f8f8',
    fontSize: '16px',
    color: '#333'
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px'
  }

  const requiredStyle = {
    color: '#ff0000',
    marginLeft: '4px'
  }

  return (
    <div>
      <Header />
      <div style={{
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        <form 
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Contact Us</h1>
         
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" style={labelStyle}>
              Name<span style={requiredStyle}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={inputStyle}
            />
          </div>

          {/* Business Input */}
          <div>
            <label htmlFor="business" style={labelStyle}>
              Business<span style={requiredStyle}>*</span>
            </label>
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              placeholder="Enter your business name"
              style={inputStyle}
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email<span style={requiredStyle}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              style={inputStyle}
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label htmlFor="number" style={labelStyle}>
              Phone Number<span style={requiredStyle}>*</span>
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              style={inputStyle}
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="notes" style={labelStyle}>
              Additional Notes <span style={{ color: '#666', fontSize: '14px' }}>(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Enter any additional information or questions"
              style={{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '100px'
              }}
            />
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div style={{
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: submitStatus.includes('success') ? '#e0f2e0' : '#fff3cd',
              color: submitStatus.includes('success') ? '#155724' : '#856404',
              textAlign: 'center'
            }}>
              {submitStatus}
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
          >
            Submit
          </button>
        </form>
        
        <div style={{
          borderTop: '1px solid #ddd',
          paddingTop: '40px',
          width: '100%',
          maxWidth: '800px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Response time may vary with emailing. Please reach out by phone for a quicker response</h2>
          <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Phone: +1 (802) 445 - 5570</h3>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Contact 