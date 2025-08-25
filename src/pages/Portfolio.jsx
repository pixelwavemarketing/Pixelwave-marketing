import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import truckImage from '../assets/truck-25.webp'
import easyCleanLogo from '../assets/Easy clean - Pressure Washing.webp'
import financingToolkit from '../assets/Finacing toolkit.png'

function Portfolio() {
  const navigate = useNavigate()

  return (
    <div className="page-container" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Portfolio | Pixelwave Marketing - Web Design & Digital Marketing Projects</title>
        <link rel="canonical" href="https://usepixelwave.com/portfolio" />
        <meta name="description" content="View our portfolio of successful digital marketing projects, web development work, and brand identity designs. See real results from Nashville businesses we've helped grow." />
        <meta name="keywords" content="portfolio, web design portfolio, digital marketing portfolio, Nashville web design, brand identity portfolio, web development projects" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Portfolio | Pixelwave Marketing - Web Design & Digital Marketing Projects" />
        <meta property="og:description" content="View our portfolio of successful digital marketing projects, web development work, and brand identity designs. See real results from Nashville businesses we've helped grow." />
        <meta property="og:url" content="https://usepixelwave.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pixelwave Marketing" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Pixelwave Marketing" />
        <meta name="twitter:description" content="View our portfolio of successful digital marketing projects, web development work, and brand identity designs." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Pixelwave Marketing Portfolio",
              "description": "Portfolio showcasing web design, digital marketing, and brand identity projects for Nashville businesses",
              "url": "https://usepixelwave.com/portfolio",
              "creator": {
                "@type": "Organization",
                "name": "Pixelwave Marketing",
                "url": "https://usepixelwave.com"
              },
              "hasPart": [
                {
                  "@type": "CreativeWork",
                  "name": "The Dumpster Man Website",
                  "description": "Professional website for a local dumpster rental business with service listings and contact forms",
                  "url": "https://thedumpsterman518.com",
                  "creator": {
                    "@type": "Organization",
                    "name": "Pixelwave Marketing"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "Easy Clean Pressure Washing Logo",
                  "description": "Professional logo design for a pressure washing services business",
                  "creator": {
                    "@type": "Organization",
                    "name": "Pixelwave Marketing"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "Open Finance Calculators",
                  "description": "Comprehensive financial calculator website providing tools for loans and investments",
                  "url": "https://openfinancecalculators.com",
                  "creator": {
                    "@type": "Organization",
                    "name": "Pixelwave Marketing"
                  }
                }
              ]
            }
          `}
        </script>
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
              onClick={() => window.open('https://openfinancecalculators.com', '_blank')}
            >
              <div style={{
                padding: '40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                backgroundColor: '#f8fafc'
              }}>
                <img 
                  src={financingToolkit}
                  alt="Open Finance Calculators Website"
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
                    backgroundColor: '#059669',
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
                  investments, and financial planning. User-friendly interface with 
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