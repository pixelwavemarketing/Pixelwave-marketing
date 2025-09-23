import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faPalette, faEye, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function PrintDesign() {
  const navigate = useNavigate()

  return (
    <>
      <SEOOptimizer 
        title="Print Design Services | PixelWave Marketing - Nashville"
        description="Professional print design services in Nashville. Business cards, brochures, flyers, and print materials that complement your digital presence."
        keywords="print design Nashville, business cards Nashville, brochures, flyers, print materials, graphic designer Nashville"
        canonicalUrl="https://usepixelwave.com/print-design"
        structuredDataType="service"
      />
      <div className="other-page" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
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
            Print Design Services
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Professional print materials that complement your digital presence and leave a lasting impression on your customers.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem'
            }}
          >
            Start Your Print Project
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
            Print Design Services
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
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
                color: '#7c3aed',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faPrint} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Business Cards
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Professional business cards that make a strong first impression and reflect your brand identity.
              </p>
            </div>

            {/* Brochures */}
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
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Brochures & Flyers
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Informative and visually appealing brochures and flyers to promote your products and services.
              </p>
            </div>

            {/* Marketing Materials */}
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
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Marketing Materials
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Complete marketing collateral including posters, banners, and promotional materials.
              </p>
            </div>

            {/* Brand Consistency */}
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
                Brand Consistency
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Ensure all print materials maintain consistent branding with your digital presence.
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
            Ready to Print Your Brand?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's create print materials that complement your digital presence and strengthen your brand.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem'
            }}
          >
            Get Started
          </button>
        </div>
      </section>
      <Footer />
      </div>
    </>
  )
}

export default PrintDesign 