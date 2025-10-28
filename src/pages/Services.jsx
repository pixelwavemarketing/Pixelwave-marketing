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
import Breadcrumbs from '../components/Breadcrumbs'

function Services() {
  const navigate = useNavigate()

  // Track service page view
  useEffect(() => {
    trackServiceView('Services Overview')
  }, [])

  return (
    <>
      <SEOOptimizer 
        title="Nashville Service Business Marketing Services | AI Chatbot & Website Design"
        description="Complete digital marketing services for Nashville contractors, HVAC, plumbing, electrical businesses. AI chatbots, website design, local SEO, Google Ads, and lead generation solutions."
        keywords="Nashville service business marketing, contractor marketing Nashville, HVAC marketing Nashville, plumber website design, electrician marketing Nashville, AI chatbot Nashville, local SEO Nashville, contractor lead generation, service business websites Nashville, Nashville digital marketing agency"
        canonicalUrl="https://usepixelwave.com/services"
        structuredDataType="service"
      />
      <div className="other-page" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      <Header />
      <Breadcrumbs />
      
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
            Why Nashville Service Businesses Choose Pixelwave Marketing
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
            Nashville Service Business Marketing Solutions
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
            {/* Service 1 - AI Chatbot Solutions */}
            <div 
              onClick={() => navigate('/chatbot-solutions')}
              className="service-card service-box"
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                NEW!
              </div>
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#ffffff', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#ffffff' }}>
                AI Chatbot for Nashville Service Businesses
              </h3>
              <p style={{ color: '#ffffff', opacity: '0.9' }}>
                Custom AI chatbot development for contractors, HVAC, plumbing, and electrical businesses. Automated lead capture, customer support, and appointment booking 24/7.
              </p>
            </div>

            {/* Service 2 - Digital Marketing */}
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
                Nashville Digital Marketing Agency
              </h3>
              <p style={{ color: '#666' }}>
                Local SEO, Google Ads, and social media marketing for Nashville contractors, HVAC, plumbing, and electrical businesses. Proven strategies to get found on Google.
              </p>
            </div>

            {/* Service 3 - Web Development */}
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
                Contractor Website Design Nashville
              </h3>
              <p style={{ color: '#666' }}>
                Professional website development for Nashville contractors, HVAC, plumbing, and electrical businesses. Mobile-responsive sites with lead capture and online booking.
              </p>
            </div>

            {/* Service 4 - Brand Identity */}
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

            {/* Service 5 - Marketing Systems */}
            <div 
              onClick={() => navigate('/marketing-systems')}
              className="service-card service-box"
            >
              <div className="service-icon" style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faGears} />
              </div>
              <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Marketing Systems
              </h3>
              <p style={{ color: '#666' }}>
                Marketing solutions and systems to streamline your business operations
              </p>
            </div>

            {/* Service 6 - Analytics */}
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

            {/* Service 7 - Print Design */}
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

      {/* Technical Services Section */}
      <div style={{
        padding: '60px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            color: '#333'
          }}>
            Technical Services That Most Agencies Don't Offer
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px auto'
          }}>
            We handle the technical setup that most business owners can't or won't do themselves
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            padding: '0 20px'
          }}>
            {/* Google Business Profile */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              flex: '1 1 320px',
              maxWidth: '400px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4285F4';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <h3 style={{ color: '#4285F4', fontSize: '1.3rem', marginBottom: '15px' }}>
                🏢 Google Business Profile Optimization
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                Most businesses have a Google listing, but 90% aren't optimized correctly. We claim, verify, and optimize your profile for maximum local visibility.
              </p>
              <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <li>Photo optimization and posting schedule</li>
                <li>Review response management setup</li>
                <li>UTM tracking for lead attribution</li>
              </ul>
            </div>

            {/* Analytics & Tracking */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              flex: '1 1 320px',
              maxWidth: '400px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#10b981';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <h3 style={{ color: '#10b981', fontSize: '1.3rem', marginBottom: '15px' }}>
                📊 Analytics & Tracking Setup
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                Know exactly where your leads come from with professional analytics setup and clean reporting dashboards.
              </p>
              <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <li>Google Analytics 4 installation</li>
                <li>Google Search Console connection</li>
                <li>Facebook Pixel implementation</li>
                <li>Monthly report card dashboards</li>
              </ul>
            </div>

            {/* Local SEO Tools */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              flex: '1 1 320px',
              maxWidth: '400px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', marginBottom: '15px' }}>
                🎯 Local SEO Foundation
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                Consistent business information across all directories is crucial for local search rankings. We audit and fix everything.
              </p>
              <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <li>Citation audit and cleanup</li>
                <li>Directory listing optimization</li>
                <li>NAP (Name, Address, Phone) consistency across platforms</li>
                <li>Ongoing citation management</li>
              </ul>
            </div>

            {/* Website Add-Ons */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              flex: '1 1 320px',
              maxWidth: '400px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#f59e0b';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', marginBottom: '15px' }}>
                🚀 Website Enhancement Tools
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                Turn your website into a lead generating machine with professional tools that capture and convert visitors.
              </p>
              <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <li>Live chat widget setup and styling</li>
                <li>Booking calendar integration (Calendly)</li>
                <li>Lead capture form optimization</li>
              </ul>
            </div>

            {/* Performance & Ads Infrastructure */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              flex: '1 1 320px',
              maxWidth: '400px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <h3 style={{ color: '#ef4444', fontSize: '1.3rem', marginBottom: '15px' }}>
                ⚡ Performance & Ad Readiness
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                Speed optimization and advertising infrastructure setup. Start collecting data now, run ads later.
              </p>
              <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <li>PageSpeed optimization and Core Web Vitals</li>
                <li>Google Ads conversion tracking setup</li>
                <li>Retargeting pixel installation</li>
                <li>Campaign ready infrastructure</li>
              </ul>
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
                fontSize: '1.1rem',
                backgroundColor: '#dc2626',
                color: 'white',
                fontWeight: '700'
              }}
            >
              Get My Free Strategy Session
            </button>
          </div>
        </div>
      <Footer />
      </div>
    </>
  )
}

export default Services 