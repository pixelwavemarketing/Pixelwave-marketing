import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { trackLead } from '../components/FacebookPixel'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function ThankYou() {
  const navigate = useNavigate()

  // Track lead conversion when user reaches thank you page
  useEffect(() => {
    trackLead('contact_form', 0) // $0 value for lead generation
  }, [])


  return (
    <>
      <SEOOptimizer 
        title="Thank You | PixelWave Marketing"
        description="Thank you for contacting PixelWave Marketing. We'll get back to you within 24 hours to discuss your project needs."
        keywords="thank you, contact confirmation, PixelWave Marketing"
        canonicalUrl="https://usepixelwave.com/thank-you"
        structuredDataType="localBusiness"
      />
      <div className="other-page" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      
      <Header />
      <Breadcrumbs />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ 
            marginBottom: '20px',
            fontSize: '2.5rem',
            color: '#1e293b'
          }}>
            Thank You!
          </h1>
          <p style={{ 
            marginBottom: '30px',
            fontSize: '1.2rem',
            color: '#64748b',
            lineHeight: '1.6'
          }}>
            Your message has been received. We'll get back to you soon.
          </p>
          <button
            onClick={() => navigate('/')}
            className="cta-button"
            style={{
              fontSize: '1.1rem'
            }}
          >
            Return to Home
          </button>
        </div>
      </div>

      <Footer />
      </div>
    </>
  )
}

export default ThankYou 