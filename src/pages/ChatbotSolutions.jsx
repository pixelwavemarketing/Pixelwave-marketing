import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SEOOptimizer from '../components/SEOOptimizer'
import { trackServiceView, trackButtonClick } from '../components/FacebookPixel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, 
  faComments, 
  faClock, 
  faChartLine,
  faUsers,
  faBolt,
  faShield,
  faMobile,
  faCode,
  faHeadset
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

function ChatbotSolutions() {
  const navigate = useNavigate()

  // Track service page view
  useEffect(() => {
    trackServiceView('Chatbot Solutions')
  }, [])

  const handleCTAClick = (action) => {
    trackButtonClick('Chatbot CTA', action)
    navigate('/contact')
  }

  return (
    <>
      <SEOOptimizer 
        title="AI Chatbot Solutions | 24/7 Customer Support Automation | Pixelwave Marketing"
        description="Transform your customer service with intelligent AI chatbots. Available 24/7, multilingual support, lead capture, and seamless integration. Boost conversions and reduce response times."
        keywords="AI chatbot, customer support automation, live chat, lead generation, 24/7 support, conversational AI, chatbot development, customer service bot"
        canonicalUrl="https://usepixelwave.com/chatbot-solutions"
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h1 style={{
              fontSize: '3rem',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
              AI Chatbot Solutions
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Transform your customer service with intelligent AI chatbots that work 24/7, 
              capture leads, and provide instant support to boost your conversions.
            </p>
            <button
              onClick={() => handleCTAClick('Hero CTA')}
              style={{
                backgroundColor: '#ffffff',
                color: '#667eea',
                padding: '15px 35px',
                fontSize: '1.2rem',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Get Your Custom Chatbot
            </button>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section style={{
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
              color: '#1e293b'
            }}>
              Why Your Business Needs a Chatbot
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '60px',
              maxWidth: '700px',
              margin: '0 auto 60px auto'
            }}>
              Don't lose potential customers to slow response times. Our AI chatbots provide instant, 
              intelligent responses that turn visitors into leads.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              justifyContent: 'center',
              marginBottom: '60px'
            }}>
              <div 
                className="service-box"
                style={{
                  backgroundColor: 'white',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', color: '#10b981', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1e293b' }}>
                  24/7 Availability
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Never miss a lead again. Your chatbot works around the clock, capturing inquiries 
                  even when you're sleeping or busy with other customers.
                </p>
              </div>

              <div 
                className="service-box"
                style={{
                  backgroundColor: 'white',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1e293b' }}>
                  Instant Lead Capture
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Qualify leads automatically and collect contact information while providing 
                  immediate value to your visitors.
                </p>
              </div>

              <div 
                className="service-box"
                style={{
                  backgroundColor: 'white',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1e293b' }}>
                  Improved Customer Experience
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Provide instant answers to common questions and guide customers to the 
                  information they need most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                color: '#1e293b'
              }}>
                Chatbot Features That Drive Results
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Our chatbots aren't just basic FAQ bots. They're sophisticated AI assistants 
                designed to understand context and provide meaningful interactions.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'center'
            }}>
              <div 
                className="service-box"
                style={{
                  padding: '30px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faBolt} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  Intelligent Responses
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  AI-powered natural language processing understands customer intent and provides relevant, helpful responses.
                </p>
              </div>

              <div 
                className="service-box"
                style={{
                  padding: '30px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <div style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  Email Integration
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Automatically sends detailed conversation summaries and lead information directly to your email inbox.
                </p>
              </div>

              <div 
                className="service-box"
                style={{
                  padding: '30px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#f59e0b';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '2.5rem', color: '#f59e0b', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faShield} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  Data Security
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Enterprise-grade security ensures customer data is protected with encryption and secure data handling.
                </p>
              </div>

              <div 
                className="service-box"
                style={{
                  padding: '30px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '2.5rem', color: '#3b82f6', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  Mobile Optimized
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Responsive design ensures perfect functionality across all devices and screen sizes.
                </p>
              </div>

              <div 
                className="service-box"
                style={{
                  padding: '30px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '2.5rem', color: '#8b5cf6', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  Easy Integration
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Simple one-line code integration that works with any website platform or CMS.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#f8fafc',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#1e293b'
            }}>
              See Our Chatbot in Action
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '40px'
            }}>
              Try our live chatbot right here on this page! Look for the chat bubble in the bottom right corner. 
              This is the same technology we'll customize for your business.
            </p>
            
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              marginBottom: '40px'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#1e293b'
              }}>
                What Makes Our Chatbots Different?
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                textAlign: 'left'
              }}>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Industry-Specific Training</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Trained on your business knowledge and industry best practices
                  </p>
                </div>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Lead Qualification</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Automatically scores and routes high-quality leads
                  </p>
                </div>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Appointment Booking</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Integrates with your calendar for seamless scheduling
                  </p>
                </div>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Analytics Dashboard</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Track conversations, leads, and ROI with detailed reports
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCTAClick('Demo CTA')}
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '15px 35px',
                fontSize: '1.2rem',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5a67d8';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              Get Your Custom Chatbot Quote
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: 'white'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#1e293b'
            }}>
              Custom Pricing for Your Business
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '50px'
            }}>
              Every business is unique, and so are your chatbot needs. We create custom solutions 
              tailored to your specific requirements and budget.
            </p>

            <div style={{
              backgroundColor: '#f8fafc',
              padding: '60px 40px',
              borderRadius: '16px',
              border: '2px solid #e2e8f0',
              marginBottom: '40px'
            }}>
              <div style={{
                fontSize: '4rem',
                color: '#667eea',
                marginBottom: '30px'
              }}>
                💬
              </div>
              
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '20px',
                color: '#1e293b'
              }}>
                Contact Us for Pricing
              </h3>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Get a personalized quote based on your business size, industry, and specific chatbot requirements. 
                Our pricing is transparent and includes everything you need to get started.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                marginBottom: '30px'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  minWidth: '200px'
                }}>
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ What's Included</h4>
                  <ul style={{ textAlign: 'left', color: '#64748b', lineHeight: '1.8', fontSize: '0.95rem', paddingLeft: '20px' }}>
                    <li>Custom chatbot development</li>
                    <li>AI training & optimization</li>
                    <li>Full setup & integration</li>
                    <li>Ongoing support & maintenance</li>
                  </ul>
                </div>
                
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  minWidth: '200px'
                }}>
                  <h4 style={{ color: '#10b981', marginBottom: '10px' }}>✓ Pricing Factors</h4>
                  <ul style={{ textAlign: 'left', color: '#64748b', lineHeight: '1.8', fontSize: '0.95rem', paddingLeft: '20px' }}>
                    <li>Expected conversation volume</li>
                    <li>Complexity of AI responses</li>
                    <li>Website integration requirements</li>
                    <li>Email notification preferences</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleCTAClick('Custom Pricing')}
                style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '15px 35px',
                  fontSize: '1.2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#5a67d8';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#667eea';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                Get Your Custom Quote
              </button>
            </div>

            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Free consultation • No commitment required • Transparent pricing
            </p>
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
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px'
            }}>
              Ready to Transform Your Customer Service?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Join hundreds of businesses that have increased their lead conversion rates by 40% 
              with our custom AI chatbot solutions. Get your personalized quote today.
            </p>
            <button
              onClick={() => handleCTAClick('Final CTA')}
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '18px 40px',
                fontSize: '1.3rem',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5a67d8';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              Get Your Custom Quote
            </button>
            
            <div style={{
              marginTop: '30px',
              fontSize: '0.95rem',
              opacity: '0.8'
            }}>
              <p>✓ Free consultation & quote</p>
              <p>✓ Custom solution designed for your business</p>
              <p>✓ No commitment required</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ChatbotSolutions
