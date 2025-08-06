import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobile, faDesktop, faShoppingCart, faSearch, faRocket } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function WebDevelopment() {
  const navigate = useNavigate()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Web Development Services | Pixelwave Marketing</title>
        <link rel="canonical" href="https://usepixelwave.com/web-development" />
        <meta name="description" content="Professional web development services. Custom websites, e-commerce solutions, and responsive design. Modern technologies for optimal performance." />
        <meta name="keywords" content="web development, custom websites, e-commerce development, responsive design, custom development" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web Development Services",
              "description": "Custom web development solutions including responsive design, e-commerce, and modern web applications for businesses",
              "provider": {
                "@type": "Organization",
                "name": "Pixelwave Marketing",
                "telephone": "+18024555570",
                "email": "pixelwavemarketing0@gmail.com"
              },
              "serviceType": "Web Development",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Maintenance"
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
        marginTop: '10px',
        overflow: 'hidden'
      }}>
        <PixelwaveLogo />
      </div>
      
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
            Professional Web Development
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Custom websites that convert visitors into customers. Built with modern technologies for optimal performance and user experience.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '15px 40px',
              fontSize: '1.2rem',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.25)'
            }}
          >
            Start Your Project
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
            Web Development Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 400px))',
            gap: '30px',
            justifyContent: 'center'
          }}>
            {/* Custom Websites */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#2563eb',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Custom Website Development
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Bespoke websites designed to reflect your brand and drive conversions. Built with clean code and modern frameworks.
              </p>
            </div>

            {/* E-commerce */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#059669',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                E-commerce Development
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Complete online stores with secure payment processing, inventory management, and customer account features.
              </p>
            </div>

            {/* Responsive Design */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#dc2626',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Responsive Design
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Websites that look and function perfectly on all devices - desktop, tablet, and mobile phones.
              </p>
            </div>

            {/* SEO Optimization */}
            <div style={{
              padding: '30px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#7c3aed',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                SEO-Optimized Development
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Websites built with search engine optimization in mind from the ground up for better visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#f8fafc'
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
            Technologies We Use
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 250px))',
            gap: '20px',
            justifyContent: 'center'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                React.js
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem'
              }}>
                Modern frontend framework
              </p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                Node.js
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem'
              }}>
                Server-side JavaScript
              </p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                Custom Website
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem'
              }}>
                Responsive design
              </p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                Shopify
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem'
              }}>
                E-commerce platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#1e293b'
          }}>
            Our Development Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
            gap: '30px',
            justifyContent: 'center'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Discovery & Planning
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We understand your business goals, target audience, and requirements to create a comprehensive project plan.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Design & Prototyping
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We create wireframes and design mockups for your approval before moving to development.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Development
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Our team builds your website using modern technologies and best practices for optimal performance.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                4
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Testing & Launch
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Thorough testing ensures everything works perfectly before we launch your website to the world.
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
            Ready to Build Your Website?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's discuss your project and create a custom website that drives results for your business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '15px 40px',
              fontSize: '1.2rem',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Get Free Quote
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default WebDevelopment 