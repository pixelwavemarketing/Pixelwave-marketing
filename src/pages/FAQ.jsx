import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function FAQ() {
  const navigate = useNavigate()

  const faqData = [
    {
      question: "What digital marketing services does Pixelwave Marketing offer?",
      answer: "We offer comprehensive digital marketing services including Google Ads management, SEO optimization, social media marketing, content creation, email marketing, and analytics reporting. Our team specializes in creating customized strategies that drive measurable results for your business. You can see a comprehensive list of all our services here.",
      linkText: "View all services",
      linkUrl: "/services"
    },
    {
      question: "How much does web development cost?",
      answer: "Web development costs vary based on project complexity, features, and requirements. We offer custom quotes after understanding your specific needs and goals. Contact us for a free consultation where we'll discuss your project and provide a detailed proposal tailored to your budget and objectives."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer comprehensive website maintenance packages that include security updates, content updates, performance optimization, technical support, and regular backups. Our maintenance plans ensure your website stays secure, fast, and up-to-date with the latest technologies."
    },
    {
      question: "What makes Pixelwave Marketing different from other agencies?",
      answer: "We combine technical expertise with creative strategy, provide transparent reporting, offer personalized solutions, and focus on measurable results that drive business growth. Our team takes a collaborative approach, working closely with clients to understand their unique challenges and goals."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Digital marketing results vary depending on the strategy and your industry. SEO typically takes 3-6 months to show significant results, while Google Ads can provide immediate visibility. We provide regular reporting to track progress and optimize campaigns for better performance."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in helping small and medium-sized businesses grow their online presence. We understand the unique challenges small businesses face and offer scalable solutions that fit your budget and goals. Our services are designed to provide maximum ROI for businesses of all sizes."
    },
    {
      question: "What is your process for starting a new project?",
      answer: "Our process begins with a free consultation to understand your business goals and challenges. We then create a customized strategy, present our recommendations, and once approved, we implement the solution with regular check-ins and reporting. We maintain open communication throughout the entire process."
    },
    {
      question: "Do you provide training for managing your own marketing?",
      answer: "Yes, we believe in empowering our clients with knowledge. We provide training and resources to help you understand and manage your digital marketing efforts. This includes tutorials, documentation, and ongoing support to ensure you feel confident in your marketing strategy."
    }
  ]

  return (
    <div className="page-container" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Frequently Asked Questions | Pixelwave Marketing</title>
        <meta name="description" content="Get answers to common questions about our digital marketing, web development, and business growth services. Learn about our process, pricing, and what makes us different." />
        <meta name="keywords" content="FAQ, digital marketing questions, web development FAQ, marketing agency questions, business growth services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${faqData.map(faq => `
                  {
                    "@type": "Question",
                    "name": "${faq.question}",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "${faq.answer}"
                    }
                  }
                `).join(',')}
              ]
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
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Get answers to the most common questions about our digital marketing and web development services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {faqData.map((faq, index) => (
          <div key={index} style={{
            marginBottom: '40px',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '15px',
              color: '#1e293b',
              fontWeight: '600'
            }}>
              {faq.question}
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#64748b',
              marginBottom: faq.linkUrl ? '15px' : '0'
            }}>
              {faq.answer}
            </p>
            {faq.linkUrl && (
              <a 
                href={faq.linkUrl}
                style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  ':hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                {faq.linkText} →
              </a>
            )}
          </div>
        ))}

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          backgroundColor: '#f1f5f9',
          borderRadius: '12px'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#1e293b',
            marginBottom: '20px'
          }}>
            Still Have Questions?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '30px'
          }}>
            We're here to help! Contact us for personalized answers to your specific questions.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.1rem'
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQ 