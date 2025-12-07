import { useState, useEffect } from 'react'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Breadcrumbs from '../components/Breadcrumbs'
import siteConfig from '../config/siteConfig'

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <SEOOptimizer 
        title="Contact Us | PixelWave Marketing Digital Marketing"
        description="Get in touch with PixelWave Marketing for digital marketing, web development, and SEO services. Contact us for a free consultation."
        keywords="contact PixelWave Marketing, digital marketing contact, web development consultation, SEO services"
        canonicalUrl="https://usepixelwave.com/contact"
        structuredDataType="Organization"
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
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #667eea 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '20px',
            color: '#ffffff',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            Let's Grow Your Business Together
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: '1.6',
            marginBottom: '0'
          }}>
            Ready to turn more website visitors into booked jobs? Get in touch and let's discuss how we can help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#ffffff'
      }}>
        
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* Company Information - Left Side (Desktop) / Bottom (Mobile) */}
          <div style={{
            flex: isMobile ? '1' : '1 1 45%',
            order: isMobile ? 2 : 1,
            width: '100%'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
              padding: '40px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)',
                zIndex: 0
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontSize: '2rem',
                  marginBottom: '16px',
                  color: '#1e293b',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #667eea 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Let's Start a Conversation
                </h2>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#64748b',
                  lineHeight: '1.7',
                  marginBottom: '32px'
                }}>
                  {siteConfig.company.description}
                </p>

              {/* Contact Information */}
              <div style={{
                marginBottom: '32px'
              }}>
                <div style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)'
                  e.currentTarget.style.borderColor = '#3b82f6'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = '#e2e8f0'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    📞
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#64748b',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '0.75rem'
                    }}>
                      Phone
                    </h3>
                    <a 
                      href={`tel:${siteConfig.company.telephone}`}
                      style={{
                        color: '#1e293b',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#3b82f6'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1e293b'
                      }}
                    >
                      {siteConfig.company.telephone}
                    </a>
                  </div>
                </div>

                <div style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.15)'
                  e.currentTarget.style.borderColor = '#667eea'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = '#e2e8f0'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    ✉️
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#64748b',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '0.75rem'
                    }}>
                      Email
                    </h3>
                    <a 
                      href={`mailto:${siteConfig.company.email}`}
                      style={{
                        color: '#1e293b',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        display: 'block',
                        wordBreak: 'break-word'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#667eea'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1e293b'
                      }}
                    >
                      {siteConfig.company.email}
                    </a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.15)'
                  e.currentTarget.style.borderColor = '#10b981'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = '#e2e8f0'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    🕒
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#64748b',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '0.75rem'
                    }}>
                      Business Hours
                    </h3>
                    <p style={{
                      color: '#1e293b',
                      fontSize: '1rem',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div style={{ marginTop: '32px' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '20px'
                }}>
                  Connect With Us
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  {siteConfig.company.socialMedia.facebook && (
                    <a
                      href={siteConfig.company.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '12px 20px',
                        background: 'linear-gradient(135deg, #1877f2 0%, #166fe5 100%)',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(24, 119, 242, 0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 119, 242, 0.3)'
                      }}
                    >
                      Facebook
                    </a>
                  )}
                  {siteConfig.company.socialMedia.instagram && (
                    <a
                      href={siteConfig.company.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '12px 20px',
                        background: 'linear-gradient(135deg, #e4405f 0%, #d32e4a 100%)',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(228, 64, 95, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(228, 64, 95, 0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(228, 64, 95, 0.3)'
                      }}
                    >
                      Instagram
                    </a>
                  )}
                  {siteConfig.company.socialMedia.linkedin && (
                    <a
                      href={siteConfig.company.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '12px 20px',
                        background: 'linear-gradient(135deg, #0077b5 0%, #006399 100%)',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 119, 181, 0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 119, 181, 0.3)'
                      }}
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side (Desktop) / Top (Mobile) */}
          <div style={{
            flex: isMobile ? '1' : '1 1 55%',
            order: isMobile ? 1 : 2,
            width: '100%'
          }}>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </>
  )
}

export default Contact 