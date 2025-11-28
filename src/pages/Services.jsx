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
  faRobot,
  faVideo
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
        title="Service Business Marketing Services | AI Chatbot & Website Design"
        description="Complete digital marketing services for contractors, HVAC, plumbing, and electrical businesses. AI chatbots, websites, SEO, Google Ads, and lead generation."
        keywords="service business marketing, contractor marketing, HVAC marketing, plumber website design, electrician marketing, AI chatbot, SEO services, contractor lead generation, service business websites, digital marketing agency"
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
      
      {/* Hero Section */}
      <div style={{
        padding: '80px 20px 60px',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: '2.8rem', 
            marginBottom: '20px', 
            color: '#ffffff',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            Complete Marketing Services for Service Businesses
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(226, 232, 240, 0.9)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            From AI chatbots to content creation, we provide everything your contractor, HVAC, plumbing, or electrical business needs to dominate online.
          </p>
        </div>
      </div>

      {/* Key Services Section - Moved to Top */}
      <div style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px', 
            color: '#1e293b',
            fontWeight: '700'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px auto'
          }}>
            Everything you need to attract, convert, and retain customers
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Service 1 - Digital Marketing */}
            <div 
              onClick={() => {
                trackButtonClick('Digital Marketing Service', 'Services Page')
                navigate('/contact?service=digital-marketing')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Digital Marketing
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                SEO, Google Ads, and social media marketing for contractors, HVAC, plumbing, and electrical businesses. Proven strategies to get found on Google.
              </p>
            </div>

            {/* Service 2 - AI Chatbot Solutions */}
            <div 
              onClick={() => {
                trackButtonClick('AI Chatbot Service', 'Services Page')
                navigate('/contact?service=ai-chatbot')
              }}
              className="service-card service-box"
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                NEW!
              </div>
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                AI Chatbot Solutions
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Custom AI chatbot development for contractors, HVAC, plumbing, and electrical businesses. Automated lead capture, customer support, and appointment booking 24/7.
              </p>
            </div>

            {/* Service 3 - Web Development */}
            <div 
              onClick={() => {
                trackButtonClick('Web Development Service', 'Services Page')
                navigate('/contact?service=web-development')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(71, 85, 105, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Website Design
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Professional website development for contractors, HVAC, plumbing, and electrical businesses. Mobile-responsive sites with lead capture and online booking.
              </p>
            </div>

            {/* Service 4 - Content Creation */}
            <div 
              onClick={() => {
                trackButtonClick('Content Creation Service', 'Services Page')
                navigate('/contact?service=content-creation')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Content Creation
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Professional social media posts, blog articles, and digital marketing materials that engage your audience and drive conversions for your service business.
              </p>
            </div>

            {/* Service 5 - Brand Identity */}
            <div 
              onClick={() => {
                trackButtonClick('Brand Identity Service', 'Services Page')
                navigate('/contact?service=brand-identity')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Brand Identity
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Professional logo design and business card creation to establish your unique brand identity and make a lasting impression.
              </p>
            </div>

            {/* Service 6 - Marketing Systems */}
            <div 
              onClick={() => {
                trackButtonClick('Marketing Systems Service', 'Services Page')
                navigate('/contact?service=marketing-systems')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faGears} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Marketing Systems
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Marketing solutions and systems to streamline your business operations and automate your lead generation process.
              </p>
            </div>

            {/* Service 7 - Analytics */}
            <div 
              onClick={() => {
                trackButtonClick('Analytics Service', 'Services Page')
                navigate('/contact?service=analytics')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #1e40af 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(96, 165, 250, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Analytics & Reporting
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Comprehensive analytics to track and improve your business performance with clear, actionable insights.
              </p>
            </div>

            {/* Service 8 - Print Design */}
            <div 
              onClick={() => {
                trackButtonClick('Print Design Service', 'Services Page')
                navigate('/contact?service=print-design')
              }}
              className="service-card service-box"
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #4338ca 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(129, 140, 248, 0.3)'
              }}
            >
              <div className="service-icon" style={{ 
                fontSize: '3.5rem', 
                color: '#ffffff', 
                marginBottom: '20px',
                opacity: '0.95'
              }}>
                <FontAwesomeIcon icon={faPrint} />
              </div>
              <h3 className="service-title" style={{ 
                fontSize: '1.6rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '700'
              }}>
                Print Design
              </h3>
              <p style={{ 
                color: '#ffffff', 
                opacity: '0.92',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Business cards, brochures, and other print materials to complement your digital presence and strengthen your brand.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div style={{
            marginTop: '60px',
            textAlign: 'center'
          }}>
            <button
              onClick={() => {
                trackButtonClick('Get Started CTA', 'Services Page')
                navigate('/contact')
              }}
              style={{
                fontSize: '1.3rem',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                fontWeight: '600',
                padding: '22px 48px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(59, 130, 246, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.2)'
              }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{
        padding: '80px 20px',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px', 
            color: '#1e293b',
            fontWeight: '700'
          }}>
            Why Service Businesses Choose Pixelwave
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px auto'
          }}>
            We understand the unique challenges service businesses face
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div 
              className="service-box"
              style={{ 
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '16px', 
                color: '#1e293b',
                fontWeight: '700'
              }}>
                Industry Expertise
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Deep experience in digital marketing and development specifically for service businesses and contractors.
              </p>
            </div>

            <div 
              className="service-box"
              style={{ 
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '16px', 
                color: '#1e293b',
                fontWeight: '700'
              }}>
                Custom Solutions
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Tailored strategies and solutions designed for your unique business needs and target market.
              </p>
            </div>

            <div 
              className="service-box"
              style={{ 
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '16px', 
                color: '#1e293b',
                fontWeight: '700'
              }}>
                Results Driven
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Focus on measurable outcomes and ROI with clear tracking and reporting on every campaign.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Services Section */}
      <div style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#1e293b',
            fontWeight: '700'
          }}>
            Technical Services That Most Agencies Don't Offer
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '50px',
            maxWidth: '800px',
            margin: '0 auto 50px auto',
            lineHeight: '1.6'
          }}>
            We handle the technical setup that most business owners can't or won't do themselves
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            padding: '0 20px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Google Business Profile */}
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              flex: '1 1 320px',
              maxWidth: '400px',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4285F4';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(66, 133, 244, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
            }}>
              <h3 style={{ 
                color: '#4285F4', 
                fontSize: '1.4rem', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                🏢 Google Business Profile Optimization
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7', 
                marginBottom: '16px',
                fontSize: '1rem'
              }}>
                Most businesses have a Google listing, but 90% aren't optimized correctly. We claim, verify, and optimize your profile for maximum local visibility.
              </p>
              <ul style={{ 
                color: '#64748b', 
                paddingLeft: '20px', 
                lineHeight: '1.8', 
                fontSize: '0.95rem',
                listStyle: 'disc',
                flex: '1',
                margin: 0
              }}>
                <li>Photo optimization and posting schedule</li>
                <li>Review response management setup</li>
                <li>UTM tracking for lead attribution</li>
              </ul>
            </div>

            {/* Analytics & Tracking */}
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              flex: '1 1 320px',
              maxWidth: '400px',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#10b981';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
            }}>
              <h3 style={{ 
                color: '#10b981', 
                fontSize: '1.4rem', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                📊 Analytics & Tracking Setup
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7', 
                marginBottom: '16px',
                fontSize: '1rem'
              }}>
                Know exactly where your leads come from with professional analytics setup and clean reporting dashboards.
              </p>
              <ul style={{ 
                color: '#64748b', 
                paddingLeft: '20px', 
                lineHeight: '1.8', 
                fontSize: '0.95rem',
                listStyle: 'disc',
                flex: '1',
                margin: 0
              }}>
                <li>Google Analytics 4 installation</li>
                <li>Google Search Console connection</li>
                <li>Facebook Pixel implementation</li>
                <li>Monthly report card dashboards</li>
              </ul>
            </div>

            {/* Local SEO Tools */}
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              flex: '1 1 320px',
              maxWidth: '400px',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 58, 237, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
            }}>
              <h3 style={{ 
                color: '#7c3aed', 
                fontSize: '1.4rem', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                🎯 Local SEO Foundation
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7', 
                marginBottom: '16px',
                fontSize: '1rem'
              }}>
                Consistent business information across all directories is crucial for local search rankings. We audit and fix everything.
              </p>
              <ul style={{ 
                color: '#64748b', 
                paddingLeft: '20px', 
                lineHeight: '1.8', 
                fontSize: '0.95rem',
                listStyle: 'disc',
                flex: '1',
                margin: 0
              }}>
                <li>Citation audit and cleanup</li>
                <li>Directory listing optimization</li>
                <li>NAP (Name, Address, Phone) consistency across platforms</li>
                <li>Ongoing citation management</li>
              </ul>
            </div>

            {/* Website Add-Ons */}
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              flex: '1 1 320px',
              maxWidth: '400px',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#f59e0b';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(245, 158, 11, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
            }}>
              <h3 style={{ 
                color: '#f59e0b', 
                fontSize: '1.4rem', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                🚀 Website Enhancement Tools
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7', 
                marginBottom: '16px',
                fontSize: '1rem'
              }}>
                Turn your website into a lead generating machine with professional tools that capture and convert visitors.
              </p>
              <ul style={{ 
                color: '#64748b', 
                paddingLeft: '20px', 
                lineHeight: '1.8', 
                fontSize: '0.95rem',
                listStyle: 'disc',
                flex: '1',
                margin: 0
              }}>
                <li>Live chat widget setup and styling</li>
                <li>Booking calendar integration (Calendly)</li>
                <li>Lead capture form optimization</li>
              </ul>
            </div>

            {/* Performance & Ads Infrastructure */}
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              flex: '1 1 320px',
              maxWidth: '400px',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(239, 68, 68, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
            }}>
              <h3 style={{ 
                color: '#ef4444', 
                fontSize: '1.4rem', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                ⚡ Performance & Ad Readiness
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7', 
                marginBottom: '16px',
                fontSize: '1rem'
              }}>
                Speed optimization and advertising infrastructure setup. Start collecting data now, run ads later.
              </p>
              <ul style={{ 
                color: '#64748b', 
                paddingLeft: '20px', 
                lineHeight: '1.8', 
                fontSize: '0.95rem',
                listStyle: 'disc',
                flex: '1',
                margin: 0
              }}>
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
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: '#FFFFFF',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '24px',
              color: '#FFFFFF',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{ 
              marginBottom: '36px', 
              fontSize: '1.2rem',
              color: 'rgba(226, 232, 240, 0.9)',
              lineHeight: '1.6'
            }}>
              Contact us today to discuss how we can help grow your service business
            </p>
            <button
              onClick={() => {
                trackButtonClick('Get Free Strategy Session', 'Services Page CTA')
                navigate('/contact')
              }}
              className="cta-button"
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