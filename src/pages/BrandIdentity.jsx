import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faPalette, faEye, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function BrandIdentity() {
  const navigate = useNavigate()

  const serviceData = {
    name: "Brand Identity Design Services",
    description: "Professional brand identity design including logo design, business cards, brand guidelines, and visual identity development for businesses.",
    serviceType: "Brand Identity Design"
  }

  return (
    <div className="other-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <SEOOptimizer 
        title="Brand Identity Design | Pixelwave Marketing"
        description="Professional brand identity design. Logo design, business cards, brand guidelines, and visual identity development for businesses. Free consultation available."
        keywords="brand identity, logo design, business cards, brand guidelines, visual identity, graphic designer"
        canonicalUrl="https://usepixelwave.com/brand-identity"
        structuredDataType="service"
        ogImage="https://usepixelwave.com/PixelWave.png"
        serviceData={serviceData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#1e293b',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Brand Identity Design
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Create a memorable brand identity that reflects your business values and connects with your target audience.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              backgroundColor: '#dc2626',
              color: 'white',
              fontWeight: '700'
            }}
          >
            Design My Brand Now
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#1e293b'
          }}>
            Brand Identity Services
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            {/* Logo Design */}
            <div 
              className="service-box"
              style={{
                padding: '30px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '3rem',
                color: '#7c3aed',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Logo Design
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Custom logo designs that capture your brand essence and work across all platforms.
              </p>
            </div>

            {/* Business Cards */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              maxWidth: '400px',
              minWidth: '280px',
              flex: '1 1 350px',
              margin: '0 auto'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#059669',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Business Card Design
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Professional business cards that make a lasting impression.
              </p>
            </div>

            {/* Brand Guidelines */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              maxWidth: '400px',
              minWidth: '280px',
              flex: '1 1 350px',
              margin: '0 auto'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#dc2626',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Brand Guidelines
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Comprehensive brand guidelines ensuring consistent application across all materials.
              </p>
            </div>

            {/* Visual Identity */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              maxWidth: '400px',
              minWidth: '280px',
              flex: '1 1 350px',
              margin: '0 auto'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#2563eb',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Visual Identity
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Complete visual identity including color palettes, typography, and design elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#1e293b',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px'
          }}>
            Ready to Build Your Brand?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's create a brand identity that sets you apart from the competition.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              backgroundColor: '#dc2626',
              color: 'white',
              fontWeight: '700'
            }}
          >
            Create My Brand Identity
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BrandIdentity 