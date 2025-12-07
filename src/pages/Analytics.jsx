import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faSearch, faBullseye, faUsers } from '@fortawesome/free-solid-svg-icons'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function Analytics() {
  const navigate = useNavigate()

  return (
    <>
      <SEOOptimizer 
        title="Business Analytics Services | PixelWave Marketing"
        description="Comprehensive business analytics services. Data analysis, performance tracking, and insights to improve your business performance and ROI."
        keywords="business analytics, data analysis, performance tracking, ROI measurement, analytics services"
        canonicalUrl="https://usepixelwave.com/analytics"
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
            Business Analytics Services
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Transform your data into actionable insights. Comprehensive analytics to track performance, measure ROI, and drive business growth.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              fontWeight: '600'
            }}
          >
            See My Marketing Data
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
            Analytics Services
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            {/* Performance Tracking */}
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
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Performance Tracking
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Comprehensive tracking of key performance indicators to measure your business success.
              </p>
            </div>

            {/* Data Analysis */}
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
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Data Analysis
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Deep analysis of your business data to uncover trends and opportunities for growth.
              </p>
            </div>

            {/* ROI Measurement */}
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
                ROI Measurement
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Accurate measurement of return on investment for all your marketing and business activities.
              </p>
            </div>

            {/* Customer Insights */}
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
                color: '#2563eb',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Customer Insights
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Understand your customers better with detailed analytics and behavioral insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #60a5fa 0%, #1e40af 100%)',
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
            Ready to Track Your Success?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            Let's set up comprehensive analytics to track your performance and make data-driven decisions.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'white',
              color: '#60a5fa',
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
            Why Choose Pixelwave for Analytics?
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>

            {/* Proven Results */}
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
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Proven Results
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We've helped businesses increase their ROI through data driven insights and strategic optimization. Your success is our mission.
              </p>
            </div>

            {/* Personalized Strategy */}
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
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Personalized Strategy
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Every business is unique. We create custom analytics strategies tailored to your specific industry, goals, and challenges.
              </p>
            </div>

            {/* Expert Team */}
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
                Expert Team
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Our certified analytics experts bring years of experience and deep industry knowledge to every project. We speak your language.
              </p>
            </div>

            {/* Ongoing Support */}
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
                color: '#2563eb',
                marginBottom: '20px'
              }}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Ongoing Support
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                We don't just set up analytics we're your long term partner. Reports, strategy sessions, and continuous optimization.
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
            Ready to Optimize Your Business?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's analyze your data and create strategies that drive measurable results.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              fontWeight: '600'
            }}
          >
            Track My Results Now
          </button>
        </div>
      </section>
      <Footer />
      </div>
    </>
  )
}

export default Analytics 