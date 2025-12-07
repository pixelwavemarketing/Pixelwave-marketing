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
  faHeadset,
  faSync
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
        title="AI Chatbot Development | Custom Business Chatbots for Service Companies"
        description="Custom AI chatbot development for service businesses. Chatbots that read your website content and respond to visitors while collecting contact information. Free consultation."
        keywords="AI chatbot, custom chatbot development, business chatbot, service business chatbot, contractor chatbot, HVAC chatbot, plumber chatbot, electrician chatbot, automated customer service, chatbot development"
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
              Custom AI Chatbot Development for Service Businesses
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Professional AI chatbot development for contractors, HVAC, plumbing, and electrical businesses. 
              Our chatbots automatically read your website content and respond to visitors with information from your pages, 
              while collecting contact information to help you never miss another customer inquiry.
            </p>
            <button
              onClick={() => handleCTAClick('Hero CTA')}
              style={{
                background: 'linear-gradient(135deg, #6d28d9 0%, #764ba2 100%)',
                color: '#ffffff',
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
                e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              Get Your Custom Chatbot
            </button>
          </div>
        </section>

        {/* AI Chatbot Services Section */}
        <section style={{
          padding: '60px 20px',
          backgroundColor: 'white',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              marginBottom: '20px',
              color: '#1e293b'
            }}>
              AI Chatbot Development for Service Businesses
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              lineHeight: '1.7',
              marginBottom: '30px'
            }}>
              As a leading <strong>AI chatbot development company</strong>, we specialize in creating 
              custom business chatbots for contractors, HVAC companies, plumbers, electricians, and service businesses. 
              Our <strong>chatbot development services</strong> help companies provide instant answers to customer questions 
              and capture leads 24/7. Whether you need a <strong>contractor chatbot</strong> 
              for your HVAC business, a <strong>plumber chatbot</strong> for customer inquiries, or an <strong>electrician chatbot</strong> 
              for information requests, we build intelligent conversational AI solutions that read your website content and respond 
              with information from your pages while collecting visitor contact information.
              
              <br/><br/>Our chatbot solutions integrate seamlessly with popular platforms like <strong>WordPress, Shopify, and Squarespace</strong>, 
              making it easy to add automated customer support to any service business website without technical expertise.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
              marginTop: '30px'
            }}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '20px 30px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}>
                <strong style={{ color: '#667eea' }}>✓ Custom Chatbot Development</strong>
              </div>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '20px 30px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}>
                <strong style={{ color: '#667eea' }}>✓ Small Business Focused</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Prominent CTA Section */}
        <section style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
              Ready for Your Custom AI Chatbot?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              opacity: '0.95',
              lineHeight: '1.6'
            }}>
              Let's discuss how an AI chatbot can help you capture more leads and provide 24/7 customer support.
            </p>
            <button
              onClick={() => handleCTAClick('Prominent CTA')}
              style={{
                background: 'white',
                color: '#667eea',
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
              Why Every Business Needs an AI Chatbot in 2025
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '60px',
              maxWidth: '700px',
              margin: '0 auto 60px auto'
            }}>
              <strong>Studies show that 67% of consumers expect instant responses</strong> from businesses online. 
              Our custom AI chatbots provide intelligent, instant responses that convert website visitors 
              into paying customers 24/7, even when your team isn't available. With over 3 years of experience 
              serving businesses, we've helped companies increase lead conversion rates by up to 40%.
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
                  Collect contact information from visitors while providing 
                  immediate answers about your services and business.
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
                  AI powered natural language processing reads your website content and provides relevant, helpful responses 
                  based on the information from your pages.
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
                  Enterprise grade security ensures customer data is protected with encryption and secure data handling.
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
                  Simple one line code integration that works with any website platform or CMS.
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
                e.currentTarget.style.borderColor = '#06b6d4';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '2.5rem', color: '#06b6d4', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faSync} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  Auto Updates Daily
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Our chatbot automatically reads your website daily to ensure it stays current with your latest content, services, and pricing information.
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
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Reads Your Website</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Automatically reads and understands your website content to answer questions
                  </p>
                </div>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Information Collection</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Collects contact information from interested visitors while providing helpful answers
                  </p>
                </div>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Email Notifications</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Sends conversation summaries and lead information directly to your email
                  </p>
                </div>
                <div className="service-box">
                  <h4 style={{ color: '#667eea', marginBottom: '10px' }}>✓ Page-Based Responses</h4>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                    Responds with information directly from your website pages and content
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCTAClick('Demo CTA')}
              style={{
                background: 'linear-gradient(135deg, #6d28d9 0%, #764ba2 100%)',
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
                e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
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
                    <li>Website content reading setup</li>
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
                    <li>Website size and content amount</li>
                    <li>Website integration requirements</li>
                    <li>Email notification preferences</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleCTAClick('Custom Pricing')}
                style={{
                  background: 'linear-gradient(135deg, #6d28d9 0%, #764ba2 100%)',
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
                  e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
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

        {/* FAQ Section for SEO */}
        <section style={{
          padding: '80px 20px',
          backgroundColor: '#f8fafc'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '50px',
              color: '#1e293b',
              textAlign: 'center'
            }}>
              Frequently Asked Questions About Business Chatbots
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1e293b' }}>
                  How much does a custom chatbot cost for a small business?
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Custom chatbot pricing varies based on your business needs, expected conversation volume, and 
                  integration requirements. We provide personalized quotes for businesses, typically 
                  ranging from affordable monthly plans for small businesses to comprehensive solutions for larger companies.
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1e293b' }}>
                  What's the difference between a chatbot and live chat?
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  A chatbot uses AI to automatically respond to customer questions 24/7, while live chat requires 
                  human agents to be online. Our AI chatbots can handle most customer inquiries instantly and send 
                  detailed conversation summaries to your email for complex requests that need human follow-up.
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1e293b' }}>
                  Can I add a chatbot to my existing website?
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  Yes! Our chatbots integrate with any website platform including WordPress, Shopify, Squarespace, 
                  Wix, and custom built sites. Installation is simple, just one line of code that we provide and 
                  can help you install.
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1e293b' }}>
                  How do I know if my business needs a chatbot?
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  If you get customer inquiries through your website, miss calls outside business hours, want to 
                  capture more leads, or spend time answering the same questions repeatedly, a business chatbot 
                  can help. It's especially valuable for service businesses, contractors, and professional practices.
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1e293b' }}>
                  Are AI chatbots better than human customer service?
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  AI chatbots excel at providing instant responses, handling multiple conversations simultaneously, 
                  and being available 24/7. They're perfect for answering common questions, capturing leads, and 
                  initial customer support. However, they work best when combined with human follow-up for complex 
                  issues. Our chatbots send detailed conversation summaries to your email so you can personally 
                  follow up when needed.
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
                background: 'linear-gradient(135deg, #6d28d9 0%, #764ba2 100%)',
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
                e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
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
