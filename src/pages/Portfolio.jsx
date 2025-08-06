import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import truckImage from '../assets/truck-25.webp'
import easyCleanLogo from '../assets/Easy clean - Pressure Washing.webp'

function Portfolio() {
  const navigate = useNavigate()

  return (
    <div className="page-container" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Portfolio | Pixelwave Marketing</title>
        <meta name="description" content="View our portfolio of successful digital marketing projects, web development work, and brand identity designs." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#1e293b',
        color: 'white',
        textAlign: 'center',
        marginTop: '70px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#FFFFFF'
          }}>
            Our Portfolio
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Discover how we've helped businesses grow through strategic digital marketing, 
            professional web development, and compelling brand identity design.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem'
            }}
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Portfolio Grid */}
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
            Featured Projects
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            marginBottom: '60px'
          }}>
            {/* The Dumpster Man Project */}
            <div 
              className="portfolio-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                maxWidth: '400px',
                minWidth: '280px',
                flex: '1 1 350px',
                margin: '0 auto'
              }}
              onClick={() => window.open('https://thedumpsterman518.com', '_blank')}
            >
              <img 
                src={truckImage}
                alt="The Dumpster Man Website"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                padding: '30px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Web Development
                  </span>
                  <span style={{
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '15px',
                  color: '#1e293b',
                  fontWeight: '600'
                }}>
                  The Dumpster Man
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Professional website for a local dumpster rental business. Features include 
                  service listings, contact forms, and mobile-responsive design.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    React
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Responsive Design
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Local SEO
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Contact Forms
                  </span>
                </div>
              </div>
            </div>

            {/* Easy Clean Logo Design */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                maxWidth: '400px',
                minWidth: '280px',
                flex: '1 1 350px',
                margin: '0 auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                padding: '40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px'
              }}>
                <img 
                  src={easyCleanLogo}
                  alt="Easy Clean Pressure Washing Logo"
                  style={{
                    maxWidth: '200%',
                    height: 'auto',
                    maxHeight: '250px',
                    objectFit: 'contain',
                    margin: '0 -30%'
                  }}
                />
              </div>
              <div style={{
                padding: '30px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Brand Identity
                  </span>
                  <span style={{
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '15px',
                  color: '#1e293b',
                  fontWeight: '600'
                }}>
                  Easy Clean Pressure Washing
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Professional logo design for a pressure washing services business. 
                  Clean, modern design that conveys trust and professionalism.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Logo Design
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Brand Identity
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Vector Graphics
                  </span>
                </div>
              </div>
            </div>

            {/* Coming Soon Placeholder */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '2px dashed #cbd5e1',
              padding: '60px 30px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              maxWidth: '400px',
              minWidth: '280px',
              flex: '1 1 350px',
              margin: '0 auto'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#94a3b8',
                marginBottom: '20px'
              }}>
                🚀
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#64748b'
              }}>
                More Projects Coming Soon
              </h3>
              <p style={{
                color: '#94a3b8',
                lineHeight: '1.6',
                maxWidth: '300px'
              }}>
                We're working on amazing projects. Check back soon to see more of our work!
              </p>
            </div>

            {/* Another Coming Soon Placeholder */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '2px dashed #cbd5e1',
              padding: '60px 30px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              maxWidth: '400px',
              minWidth: '280px',
              flex: '1 1 350px',
              margin: '0 auto'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#94a3b8',
                marginBottom: '20px'
              }}>
                💡
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: '#64748b'
              }}>
                Your Project Could Be Next
              </h3>
              <p style={{
                color: '#94a3b8',
                lineHeight: '1.6',
                maxWidth: '300px'
              }}>
                Ready to start your project? Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#1e293b'
          }}>
            Ready to Join Our Portfolio?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#64748b',
            lineHeight: '1.6'
          }}>
            Let's discuss your project and create something that will make your business stand out.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem'
            }}
          >
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio 