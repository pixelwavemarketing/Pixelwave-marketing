import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

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
        marginTop: '80px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '80px auto 0'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '30px',
          color: '#333',
          textAlign: 'center'
        }}>
          Contact Us
        </h1>
        <ContactForm />
        
        {/* New Quick Contact Section */}
        <div style={{
          width: '100%',
          maxWidth: '500px',
          marginTop: '40px',
          padding: '30px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            marginBottom: '20px',
            color: '#333'
          }}>
            Looking for a Faster Response?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '20px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            For faster assistance, feel free to reach out directly:
          </p>
          <a
            href="tel:+18024455570" // Replace with your actual phone number
            style={{
              display: 'inline-block',
              padding: '15px 30px',
              backgroundColor: '#333',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              fontWeight: '500',
              marginTop: '10px'
            }}
          >
            Call Us Now!
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact 