import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChartLine, faBullseye, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function DigitalMarketing() {
  const navigate = useNavigate()

  const serviceData = {
    name: "Digital Marketing Services",
    description: "Expert digital marketing services including Google Ads, social media marketing, SEO, and email marketing to grow your business.",
    serviceType: "Digital Marketing"
  }

  return (
    <div className="other-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <SEOOptimizer 
        title="Digital Marketing Agency | SEO & Google Ads for Service Businesses"
        description="Leading digital marketing agency for contractors. SEO, Google Ads, and social media marketing for HVAC, plumbing, and electrical businesses. Free consultation."
        keywords="digital marketing agency, SEO services, Google Ads, contractor marketing, HVAC marketing, plumber marketing, electrician marketing, service business marketing, SEO services, business marketing"
        canonicalUrl="https://usepixelwave.com/digital-marketing"
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
            Digital Marketing Agency for Service Businesses
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Leading digital marketing agency specializing in SEO, Google Ads, and social media marketing for contractors, HVAC, plumbing, and electrical businesses.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              fontWeight: '600'
            }}
          >
            Get More Leads Today
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
            Digital Marketing Services for Service Businesses
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            {/* Google Ads */}
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
                color: '#4285F4',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Google Ads Management
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Strategic Google Ads campaigns for contractors, HVAC, plumbing, and electrical businesses. Target customers and maximize your advertising ROI with our proven strategies.
              </p>
            </div>

            {/* Social Media Marketing */}
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
                color: '#1d4ed8',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Social Media Marketing
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Build your service business brand across Facebook, Instagram, LinkedIn, and other platforms with engaging content that drives customer engagement and conversions.
              </p>
            </div>

            {/* SEO */}
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
                color: '#059669',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                SEO Services
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Improve your service business search rankings and drive organic traffic with our comprehensive SEO strategies tailored for contractors, HVAC, and service businesses.
              </p>
            </div>

            {/* Email Marketing */}
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
                color: '#dc2626',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Email Marketing
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Nurture leads and drive sales with targeted email campaigns that convert. From automation to segmentation, we handle it all.
              </p>
            </div>
          </div>
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
            Why Choose Pixelwave for Digital Marketing?
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
                Industry Expertise
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We understand various industries and can help you reach your target customers effectively.
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
                Data Driven Results
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Every strategy is backed by analytics and reporting so you can see your ROI.
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
                Transparent Communication
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Regular updates and clear reporting keep you informed about your campaign performance.
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
            Our Digital Marketing Process
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
                Strategy Development
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We analyze your business, competitors, and target audience to create a customized marketing strategy.
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
                Campaign Setup
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We implement your marketing campaigns across all relevant channels with optimized targeting.
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
                Optimization
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Continuous monitoring and optimization ensure your campaigns perform at their best.
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
                Results & Growth
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Regular reporting shows your growth and we scale successful strategies for continued success.
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
            Ready to Grow Your Business?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's discuss how our digital marketing services can help you achieve your goals. Get a free consultation and custom strategy.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              fontWeight: '600'
            }}
          >
            Get More Leads Today
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default DigitalMarketing 