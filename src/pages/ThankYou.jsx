import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function ThankYou() {
  const navigate = useNavigate()

  console.log('ThankYou component rendering') // Debug log

  return (
    <div className="page-container" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Thank You | Pixelwave Marketing</title>
        <meta name="description" content="Thank you for contacting Pixelwave Marketing. We'll get back to you soon." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        marginTop: '10px',
        overflow: 'hidden'
      }}>
        <PixelwaveLogo />
      </div>

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
  )
}

export default ThankYou 