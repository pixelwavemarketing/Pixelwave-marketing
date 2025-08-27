import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faCogs, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function MarketingSystems() {
  const navigate = useNavigate()

  return (
    <div className="page-container" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Marketing Automation Systems | Pixelwave Marketing</title>
        <link rel="canonical" href="https://usepixelwave.com/marketing-systems" />
        <meta name="description" content="Marketing automation and CRM systems. Streamline your business operations with automated marketing solutions and customer relationship management." />
        <meta name="keywords" content="marketing automation, CRM systems, automated marketing, business automation, marketing systems" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Marketing Automation Systems",
              "description": "Marketing automation and CRM systems to streamline business operations for companies",
              "provider": {
                "@type": "Organization",
                "name": "Pixelwave Marketing",
                "telephone": "+18024555570",
                		"email": "usepixelwave@gmail.com"
              },
              "serviceType": "Marketing Automation"
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
            Marketing Automation Systems
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Streamline your business operations with automated marketing solutions and CRM systems that save time and increase efficiency.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem'
            }}
          >
            Automate Your Marketing
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
            Marketing Systems Services
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}>
            {/* Email Automation */}
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
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Email Automation
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Automated email sequences that nurture leads and drive conversions without manual intervention.
              </p>
            </div>

            {/* CRM Integration */}
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
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                CRM Integration
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Seamless integration with popular CRM platforms to manage customer relationships effectively.
              </p>
            </div>

            {/* Workflow Automation */}
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
                <FontAwesomeIcon icon={faCogs} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#1e293b'
              }}>
                Workflow Automation
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Automated workflows that streamline repetitive tasks and improve team productivity.
              </p>
            </div>

            {/* Performance Tracking */}
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
                Comprehensive tracking and reporting to measure the success of your automated marketing campaigns.
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
            Ready to Automate Your Marketing?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1'
          }}>
            Let's set up automated systems that work while you focus on growing your business.
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
  )
}

export default MarketingSystems 