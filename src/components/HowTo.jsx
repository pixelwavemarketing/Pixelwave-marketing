import { Helmet } from 'react-helmet'

function HowTo() {
  return (
    <section>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Choose the Right Digital Marketing Agency",
              "description": "A step-by-step guide to selecting the best digital marketing agency for your business",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Define Your Goals",
                  "text": "Clearly identify your business objectives and what you want to achieve with digital marketing"
                },
                {
                  "@type": "HowToStep", 
                  "name": "Research Agencies",
                  "text": "Look for agencies with experience in your industry and proven track records"
                },
                {
                  "@type": "HowToStep",
                  "name": "Review Portfolios",
                  "text": "Examine case studies and client results to assess capabilities"
                },
                {
                  "@type": "HowToStep",
                  "name": "Schedule Consultations",
                  "text": "Meet with potential agencies to discuss your needs and get proposals"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      {/* How-to content */}
    </section>
  )
}

export default HowTo 