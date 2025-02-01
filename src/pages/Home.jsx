import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Home() {
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
      
      {/* Who We Are Section */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '20px'
        }}>
          Who We Are
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '40px'
        }}>
          At Pixelwave Marketing, we specialize in creating digital solutions that help businesses thrive in the modern marketplace. Our team combines creativity with technical expertise to deliver exceptional results for our clients.
        </p>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => navigate('/services')}
            style={{
              padding: '15px 90px',
              fontSize: '1.1rem',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontWeight: '500'
            }}
          >
            Our Services
          </button>

          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '15px 90px',
              fontSize: '1.1rem',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontWeight: '500'
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Key Services Preview */}
      <div style={{
        padding: '40px 20px',
        backgroundColor: '#f8f8f8'
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Digital Marketing
              </h3>
              <p style={{ color: '#666' }}>
                Strategic online marketing solutions to boost your brand's presence
              </p>
            </div>

            {/* Service 2 */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Web Development
              </h3>
              <p style={{ color: '#666' }}>
                Custom websites that engage visitors and drive conversions
              </p>
            </div>

            {/* Service 3 */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Analytics
              </h3>
              <p style={{ color: '#666' }}>
                Comprehensive analytics to track your business performance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        padding: '60px 20px',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Ready to Grow Your Business?
          </h2>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
            Let's discuss how we can help you achieve your goals
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '15px 90px',
              fontSize: '1.1rem',
              backgroundColor: 'white',
              color: '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home 