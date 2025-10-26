import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import truckImage from '../assets/truck-25.webp'
import easyCleanLogo from '../assets/Easy clean - Pressure Washing.webp'
import cinematicMountingLogo from '../assets/Cinematic Mounting.webp'
import financingToolkit from '../assets/Finacing toolkit.png'

function Portfolio() {
  const navigate = useNavigate()

  return (
    <div className="other-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <SEOOptimizer 
        title="Portfolio | Pixelwave Marketing - Web Design Projects"
        description="View our portfolio of successful digital marketing projects, web development work, and brand identity designs. See real results from Nashville businesses we've helped grow."
        keywords="portfolio, web design portfolio, digital marketing portfolio, Nashville web design, brand identity portfolio, web development projects"
        canonicalUrl="https://usepixelwave.com/portfolio"
        structuredDataType="aiOptimized"
        ogImage="https://usepixelwave.com/PixelWave.png"
      />
      
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#1e293b',
        color: 'white',
        textAlign: 'center'
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
            Our Portfolio of Success
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Discover how we've helped Nashville businesses grow through strategic digital marketing, 
            professional web development, and compelling brand identity design. Each project represents 
            real results and measurable business growth.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              backgroundColor: '#dc2626',
              color: 'white',
              fontWeight: '700'
            }}
          >
            Get My Custom Quote
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
              onClick={() => window.open('https://thedumpsterman518.com', '_blank', 'noopener,noreferrer')}
            >
              <img 
                src={truckImage}
                alt="The Dumpster Man Website - Professional dumpster rental website design"
                loading="lazy"
                width="400"
                height="250"
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
                  service listings, contact forms, and mobile responsive design.
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
                minHeight: '250px',
                aspectRatio: '16/10'
              }}>
                <img 
                  src={easyCleanLogo}
                  alt="Easy Clean Pressure Washing Logo - Professional logo design for pressure washing business"
                  loading="lazy"
                  width="400"
                  height="250"
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
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    Logo Design
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

            {/* Cinematic Mounting Logo Design */}
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
                padding: '0',
                textAlign: 'center',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                aspectRatio: '16/10'
              }}>
                <img 
                  src={cinematicMountingLogo}
                  alt="Cinematic Mounting Logo - Professional logo design for TV mounting and home theater installation service"
                  loading="lazy"
                  width="400"
                  height="250"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '250px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
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
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    Logo Design
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
                  Cinematic Mounting
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Professional logo design for a TV mounting and home theater installation service. 
                  Clean, bold design built to work everywhere from truck wraps to business cards.
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
                    Brand Identity
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Home Services
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Professional Logo
                  </span>
                </div>
              </div>
            </div>

            {/* Open Finance Calculators Project */}
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
              onClick={() => window.open('https://openfinancecalculators.com', '_blank', 'noopener,noreferrer')}
            >
              <div style={{
                padding: '40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                backgroundColor: '#f8fafc',
                aspectRatio: '16/10'
              }}>
                <img 
                  src={financingToolkit}
                  alt="Open Finance Calculators Website - Comprehensive financial calculator website with loan and investment tools"
                  loading="lazy"
                  width="400"
                  height="200"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '200px',
                    objectFit: 'contain'
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
                  Open Finance Calculators
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Comprehensive financial calculator website providing tools for loans, 
                  investments, and financial planning. User friendly interface with 
                  accurate calculations.
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
                    Financial Tools
                  </span>
                  <span style={{
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Calculator Apps
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
                    User Experience
                  </span>
                </div>
              </div>
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
              fontSize: '1.2rem',
              backgroundColor: '#dc2626',
              color: 'white',
              fontWeight: '700'
            }}
          >
            Get My Custom Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio 