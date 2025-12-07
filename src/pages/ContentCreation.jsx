import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faPen, faImage, faBullhorn, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function ContentCreation() {
  const navigate = useNavigate()

  const serviceData = {
    name: "Content Creation Services",
    description: "Professional content creation including social media posts and digital marketing materials for service businesses.",
    serviceType: "Content Creation"
  }

  return (
    <div className="other-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <SEOOptimizer 
        title="Content Creation Services | Social Media Content for Service Businesses"
        description="Professional content creation for service businesses. Social media posts and digital marketing materials that engage your audience and drive conversions. Free consultation."
        keywords="content creation, social media content, content marketing, service business content, HVAC content, plumber content, electrician content"
        canonicalUrl="https://usepixelwave.com/content-creation"
        structuredDataType="service"
        ogImage="https://usepixelwave.com/PixelWave.png"
        serviceData={serviceData}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            <FontAwesomeIcon icon={faVideo} />
          </div>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Content Creation for Service Businesses
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            opacity: '0.9',
            lineHeight: '1.6'
          }}>
            Professional social media posts and digital marketing materials that engage your audience and drive conversions for your service business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
              color: '#ffffff',
              padding: '15px 35px',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.3)'
            }}
          >
            Get Content Created Today
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
            Content Creation Services
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            {/* Social Media Content */}
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
                color: '#06b6d4',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faBullhorn} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Social Media Content
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Engaging social media posts for Facebook, Instagram, LinkedIn, and other platforms that showcase your services and connect with your audience.
              </p>
            </div>

            {/* Visual Content */}
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
                color: '#0e7490',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faImage} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Visual Content
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Eye-catching graphics, infographics, and visual content that makes your brand stand out and drives engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Ready to Elevate Your Content?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            Let's create content that engages your audience and drives real results for your service business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'white',
              color: '#06b6d4',
              padding: '18px 45px',
              fontSize: '1.3rem',
              border: 'none',
              borderRadius: '10px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)'
            }}
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
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
            Why Choose Pixelwave for Content Creation?
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            <div style={{
              padding: '20px',
              textAlign: 'center',
              flex: '1 1 300px',
              maxWidth: '400px',
              minWidth: '280px'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Industry-Specific Content
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Content tailored specifically for service businesses including HVAC, plumbing, electrical, landscaping, and more.
              </p>
            </div>
            <div style={{
              padding: '20px',
              textAlign: 'center',
              flex: '1 1 300px',
              maxWidth: '400px',
              minWidth: '280px'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                SEO Optimized
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                All content is optimized for search engines to help you rank higher and attract more customers.
              </p>
            </div>
            <div style={{
              padding: '20px',
              textAlign: 'center',
              flex: '1 1 300px',
              maxWidth: '400px',
              minWidth: '280px'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Consistent Brand Voice
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Maintain a consistent brand voice across all content that reflects your business values and connects with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
            Our Content Creation Process
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px',
              flex: '1 1 250px',
              maxWidth: '300px',
              minWidth: '200px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#06b6d4',
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
                Content Strategy
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We develop a content strategy aligned with your business goals and target audience.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px',
              flex: '1 1 250px',
              maxWidth: '300px',
              minWidth: '200px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#06b6d4',
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
                Content Creation
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Our team creates high-quality, engaging content that resonates with your audience.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px',
              flex: '1 1 250px',
              maxWidth: '300px',
              minWidth: '200px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#06b6d4',
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
                Optimization
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Content is optimized for SEO and engagement to maximize reach and conversions.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px',
              flex: '1 1 250px',
              maxWidth: '300px',
              minWidth: '200px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#06b6d4',
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
                Publishing & Analysis
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We help publish content and analyze performance to continuously improve results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            Ready to Transform Your Content?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's discuss how our content creation services can help you engage your audience and drive more business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              fontWeight: '600'
            }}
          >
            Get Content Created Today
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContentCreation

