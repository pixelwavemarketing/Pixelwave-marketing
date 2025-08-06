import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      paddingTop: '40px'
    }}>
      <Helmet>
        <title>Contact Us | Pixelwave Marketing - Digital Solutions</title>
        <link rel="canonical" href="https://pixelwavemarketing.com/contact" />
        <meta name="description" content="Get in touch with Pixelwave Marketing for expert digital marketing, web development, and business growth solutions. Call us at (802) 445-5570 or send us a message." />
        <meta name="keywords" content="contact pixelwave marketing, digital marketing contact, web development contact, marketing agency contact, Ballston NY" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pixelwave Marketing",
              "description": "Expert digital marketing agency in Ballston, NY",
              "url": "https://pixelwavemarketing.com",
              "telephone": "+18024555570",
              "email": "pixelwavemarketing0@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Ballston",
                "addressRegion": "NY",
                "postalCode": "12020",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.9498,
                "longitude": -73.8618
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 42.9498,
                  "longitude": -73.8618
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services"
              }
            }
          `}
        </script>
      </Helmet>
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
            href="tel:+18024555570"
            style={{
              display: 'inline-block',
              padding: '15px 40px',
              backgroundColor: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginTop: '20px',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.25)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#1e40af',
                transform: 'translateY(-4px) scale(1.05)',
                boxShadow: '0 8px 15px rgba(37, 99, 235, 0.4)'
              }
            }}
          >
            📞 Call Us Now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact 