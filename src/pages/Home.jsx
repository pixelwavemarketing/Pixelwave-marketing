import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Pixelwave Marketing - Digital Marketing & Web Development Services</title>
        <meta name="description" content="Pixelwave Marketing specializes in digital marketing, web development, and analytics solutions to help businesses thrive in the modern marketplace." />
        <meta name="keywords" content="digital marketing, web development, analytics, business growth, marketing agency," />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pixelwave Marketing",
              "description": "Digital marketing and web development services to help businesses thrive",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ballston",
                "addressRegion": "NY"
              },
              "telephone": "+18024555570",
              "email": "pixelwavemarketing0@gmail.com",
              "url": "https://pixelwavemarketing.com"
            }
          `}
        </script>
      </Helmet>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header />
        <section style={{ 
          position: 'relative',
          zIndex: 1,
          marginTop: '10px',
          overflow: 'hidden'
        }}>
          <PixelwaveLogo />
        </section>
        
        {/* Who We Are Section */}
        <section style={{
          padding: '40px 20px',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '20px'
          }}>
            Who We Are
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            At Pixelwave Marketing, we specialize in creating digital solutions that help businesses thrive in the modern marketplace. Our team combines creativity with technical expertise to deliver exceptional results for our clients.
          </p>

          {/* Single Button in Who We Are section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => navigate('/contact')}
              style={{
                padding: '15px 40px',
                width: '250px',
                fontSize: '1.2rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(37, 99, 235, 0.25)',
                ':hover': {
                  backgroundColor: '#1e40af',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 8px 15px rgba(37, 99, 235, 0.4)'
                }
              }}
            >
              Contact Us
            </button>
          </div>
        </section>

        {/* Key Services Preview */}
        <section style={{
          padding: '40px 20px',
          backgroundColor: '#f8f8f8'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#333' }}>
              Our Solutions
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              padding: '0 20px'
            }}>
              {/* Column 1 - Digital Solutions */}
              <div style={{ 
                padding: '30px', 
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                  Digital Solutions
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: '#666',
                  textAlign: 'left'
                }}>
                  <li style={{ marginBottom: '10px' }}>• Digital Marketing</li>
                  <li style={{ marginBottom: '10px' }}>• Web Development</li>
                  <li style={{ marginBottom: '10px' }}>• Analytics & Tracking</li>
                </ul>
              </div>

              {/* Column 2 - Brand Development */}
              <div style={{ 
                padding: '30px', 
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                  Brand Development
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: '#666',
                  textAlign: 'left'
                }}>
                  <li style={{ marginBottom: '10px' }}>• Logo Design</li>
                  <li style={{ marginBottom: '10px' }}>• Business Cards</li>
                  <li style={{ marginBottom: '10px' }}>• Print Materials</li>
                </ul>
              </div>

              {/* Column 3 - Business Systems */}
              <div style={{ 
                padding: '30px', 
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                  Business Systems
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: '#666',
                  textAlign: 'left'
                }}>
                  <li style={{ marginBottom: '10px' }}>• Marketing Automation</li>
                  <li style={{ marginBottom: '10px' }}>• CRM Integration</li>
                  <li style={{ marginBottom: '10px' }}>• Performance Tracking</li>
                </ul>
              </div>
            </div>
            {/* View All Services button */}
            <button
              onClick={() => navigate('/services')}
              style={{
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '40px',
                transition: 'all 0.3s ease',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(37, 99, 235, 0.25)',
                ':hover': {
                  backgroundColor: '#1e40af',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 8px 15px rgba(37, 99, 235, 0.4)'
                }
              }}
            >
              View All Services
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          padding: '60px 20px',
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
              Ready to Grow Your Business?
            </h2>
            <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
              Let's discuss how we can help you achieve your goals
            </p>
            {/* Get Started button in Call to Action section */}
            <button
              onClick={() => navigate('/contact')}
              style={{
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: 'white',
                color: '#2563eb',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: '#f8fafc',
                  color: '#1e40af',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home 