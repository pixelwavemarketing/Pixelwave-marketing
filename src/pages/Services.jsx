import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SEOOptimizer from '../components/SEOOptimizer'
import { trackServiceView, trackButtonClick } from '../components/FacebookPixel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCode, 
  faPaintBrush, 
  faGears, 
  faChartLine, 
  faPrint,
  faRobot
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Services() {
  const navigate = useNavigate()

  // Track service page view
  useEffect(() => {
    trackServiceView('Services Overview')
  }, [])

  return (
    <>
      <SEOOptimizer 
        title="Digital Marketing & Web Services | Pixelwave Marketing"
        description="Explore our comprehensive services including digital marketing, web development, brand identity, marketing automation, analytics, and print design solutions."
        keywords="digital marketing services, web development, brand identity, marketing automation, business analytics, print design"
        canonicalUrl="https://usepixelwave.com/services"
        structuredDataType="service"
      />
      <div className="page-container" style={{
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
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#333' }}>
            Why Choose Pixelwave Marketing
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div 
              className="service-box"
              style={{ 
                padding: '20px'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                Expertise
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Experience in digital marketing and development
              </p>
            </div>

            <div 
              className="service-box"
              style={{ 
                padding: '20px'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                Custom Solutions
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Tailored strategies for your unique business needs
              </p>
            </div>

            <div 
              className="service-box"
              style={{ 
                padding: '20px'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                Results Driven
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
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
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Service 1 - Digital Marketing */}
            <div 
              onClick={() => navigate('/digital-marketing')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#4285F4', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Digital Marketing
              </h3>
              <p style={{ color: '#666' }}>
                Strategic online marketing solutions and automated systems to boost your brand's presence and streamline your business
              </p>
            </div>

            {/* Service 2 - Web Development */}
            <div 
              onClick={() => navigate('/web-development')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Web Development
              </h3>
              <p style={{ color: '#666' }}>
                Custom websites that engage visitors and drive conversions, built with modern technologies
              </p>
            </div>

            {/* Service 3 - Brand Identity */}
            <div 
              onClick={() => navigate('/brand-identity')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Brand Identity
              </h3>
              <p style={{ color: '#666' }}>
                Professional logo design and business card creation to establish your unique brand identity
              </p>
            </div>

            {/* Service 4 - Marketing Systems */}
            <div 
              onClick={() => navigate('/marketing-systems')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Marketing Systems
              </h3>
              <p style={{ color: '#666' }}>
                Automated marketing solutions and CRM systems to streamline your business operations
              </p>
            </div>

            {/* Service 5 - Analytics */}
            <div 
              onClick={() => navigate('/analytics')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Analytics
              </h3>
              <p style={{ color: '#666' }}>
                Comprehensive analytics to track and improve your business performance
              </p>
            </div>

            {/* Service 6 - Print Design */}
            <div 
              onClick={() => navigate('/print-design')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faPrint} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Print Design
              </h3>
              <p style={{ color: '#666' }}>
                Business cards, brochures, and other print materials to complement your digital presence
              </p>
            </div>
          </div>
        </div>
      </div>

              {/* Internal Links Section */}
        <div style={{
          padding: '60px 20px',
          backgroundColor: '#f8fafc',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '30px',
              color: '#1e293b'
            }}>
              Learn More About Our Services
            </h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
              marginBottom: '40px'
            }}>
              <a href="/blog" style={{
                padding: '12px 24px',
                backgroundColor: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}>
                Read Our Blog
              </a>
              <a href="/faq" style={{
                padding: '12px 24px',
                backgroundColor: '#64748b',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}>
                View FAQ
              </a>
              <a href="/portfolio" style={{
                padding: '12px 24px',
                backgroundColor: '#059669',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}>
                See Our Work
              </a>
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
              className="cta-button"
              style={{
                fontSize: '1.1rem'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      <Footer />
      </div>
    </>
  )
}

export default Services 