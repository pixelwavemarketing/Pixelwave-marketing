import { Helmet } from 'react-helmet'

function FAQ() {
  const faqData = [
    {
      question: "What digital marketing services does Pixelwave Marketing offer?",
      answer: "We offer comprehensive digital marketing services including Google Ads management, SEO optimization, social media marketing, content creation, email marketing, and analytics reporting."
    },
    {
      question: "How much does web development cost?",
      answer: "Web development costs vary based on project complexity. We offer custom quotes after understanding your specific needs. Contact us for a free consultation and detailed proposal."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer website maintenance packages including security updates, content updates, performance optimization, and technical support to keep your site running smoothly."
    },
    {
      question: "What makes Pixelwave Marketing different from other agencies?",
      answer: "We combine technical expertise with creative strategy, provide transparent reporting, offer personalized solutions, and focus on measurable results that drive business growth."
    }
  ]

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>
          Frequently Asked Questions
        </h2>
        
        <Helmet>
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

        {faqData.map((faq, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
              {faq.question}
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#64748b' }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ 