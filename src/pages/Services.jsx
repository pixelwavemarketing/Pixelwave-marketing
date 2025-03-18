import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
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
import truckImage from '../assets/truck-25.webp'

function Services() {
  const navigate = useNavigate()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Our Services - Digital Marketing, Web Development & Brand Identity | Pixelwave Marketing</title>
        <meta name="description" content="Explore our comprehensive services including digital marketing, web development, brand identity, marketing automation, analytics, and print design solutions." />
        <meta name="keywords" content="digital marketing services, web development, brand identity, marketing automation, business analytics, print design" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Marketing and Web Development",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Pixelwave Marketing",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ballston",
                  "addressRegion": "NY"
                }
              },
              "areaServed": "Ballston, NY and surrounding areas",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brand Identity"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing Systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Analytics"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Print Design"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                Expertise
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Experience in digital marketing and development
              </p>
            </div>

            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                Custom Solutions
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Tailored strategies for your unique business needs
              </p>
            </div>

            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Service 1 - Digital Marketing */}
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                color: '#4285F4', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Digital Marketing
              </h3>
              <p style={{ color: '#666' }}>
                Strategic online marketing solutions and automated systems to boost your brand's presence and streamline your business
              </p>
            </div>

            {/* Service 2 - Web Development */}
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Web Development
              </h3>
              <p style={{ color: '#666' }}>
                Custom websites that engage visitors and drive conversions, built with modern technologies
              </p>
            </div>

            {/* Service 3 - Brand Identity */}
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Brand Identity
              </h3>
              <p style={{ color: '#666' }}>
                Professional logo design and business card creation to establish your unique brand identity
              </p>
            </div>

            {/* Service 4 - Marketing Systems */}
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Marketing Systems
              </h3>
              <p style={{ color: '#666' }}>
                Automated marketing solutions and CRM systems to streamline your business operations
              </p>
            </div>

            {/* Service 5 - Analytics */}
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Analytics
              </h3>
              <p style={{ color: '#666' }}>
                Comprehensive analytics to track and improve your business performance
              </p>
            </div>

            {/* Service 6 - Print Design */}
            <div style={{ 
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                color: '#333', 
                marginBottom: '25px' 
              }}>
                <FontAwesomeIcon icon={faPrint} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                Print Design
              </h3>
              <p style={{ color: '#666' }}>
                Business cards, brochures, and other print materials to complement your digital presence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
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
            Portfolio
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '0 20px'
          }}>
            <a 
              href="https://thedumpsterman518.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <img 
                src={truckImage}
                alt="The Dumpster Man"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              />
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginTop: '15px',
                color: '#333'
              }}>
                The Dumpster Man
              </h3>
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