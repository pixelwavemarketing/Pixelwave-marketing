import { useNavigate } from 'react-router-dom'
import googleLogo from '../assets/google-logo.png'
import codingIcon from '../assets/coding.png'
import analyticsIcon from '../assets/analytics.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Services() {
  const navigate = useNavigate()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header />
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        marginTop: '10px',  // Changed from 0px to account for header height
        overflow: 'hidden'  // Prevent content from going behind header
      }}>
        <PixelwaveLogo />
      </div>
      
      {/* Why Choose Us Section */}
      <div style={{
        padding: '60px 20px',
        backgroundColor: '#f8f8f8'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#333' }}>
            Why Choose Pixelwave Marketing
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#333' }}>
                Expertise
              </h3>
              <p style={{ color: '#666' }}>
                Experience in digital marketing and development
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#333' }}>
                Custom Solutions
              </h3>
              <p style={{ color: '#666' }}>
                Tailored strategies for your unique business needs
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#333' }}>
                Results Driven
              </h3>
              <p style={{ color: '#666' }}>
                Focus on measurable outcomes and ROI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services Section */}
      <div style={{
        padding: '40px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#333' }}>
            What We Offer
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            padding: '0 20px'
          }}>
            {/* Service 1 */}
            <div style={{ padding: '20px' }}>
              <img 
                src={googleLogo} 
                alt="Google Logo"
                style={{
                  width: '120px',
                  height: '120px',
                  marginBottom: '25px',
                  objectFit: 'contain'
                }}
              />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Digital Marketing
              </h3>
              <p style={{ color: '#666' }}>
                Strategic online marketing solutions to boost your brand's presence
              </p>
            </div>

            {/* Service 2 */}
            <div style={{ padding: '20px' }}>
              <img 
                src={codingIcon} 
                alt="Coding Icon"
                style={{
                  width: '160px',
                  height: '130px',
                  marginBottom: '15px',
                }}
              />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Web Development
              </h3>
              <p style={{ color: '#666' }}>
                Custom websites that engage visitors and drive conversions
              </p>
            </div>

            {/* Service 3 */}
            <div style={{ padding: '20px' }}>
              <img 
                src={analyticsIcon} 
                alt="Analytics Icon"
                style={{
                  width: '120px',
                  height: '120px',
                  marginBottom: '25px',
                  objectFit: 'contain'
                }}
              />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Brand Strategy
              </h3>
              <p style={{ color: '#666' }}>
                Comprehensive branding solutions to establish your market presence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        padding: '60px 20px',
        backgroundColor: '#333',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '20px',
            color: '#FFFFFF'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            marginBottom: '30px', 
            fontSize: '1.1rem',
            color: '#FFFFFF'
          }}>
            Contact us today to discuss how we can help grow your business
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              backgroundColor: '#FFFFFF',
              color: '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services 