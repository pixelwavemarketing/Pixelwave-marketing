import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const EnhancedFAQ = ({ faqs, title = "Frequently Asked Questions", description = "Get answers to common questions about our services" }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="enhanced-faq" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '15px' }}>
          {title}
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>
          {description}
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="faq-item"
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              marginBottom: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button
              onClick={() => toggleItem(index)}
              style={{
                width: '100%',
                padding: '20px',
                textAlign: 'left',
                backgroundColor: openItems.has(index) ? '#f8fafc' : 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1e293b',
                transition: 'background-color 0.3s ease'
              }}
              aria-expanded={openItems.has(index)}
              aria-controls={`faq-content-${index}`}
            >
              <span>{faq.question}</span>
              <FontAwesomeIcon 
                icon={openItems.has(index) ? faChevronUp : faChevronDown}
                style={{ color: '#64748b', fontSize: '1rem' }}
              />
            </button>
            
            <div
              id={`faq-content-${index}`}
              style={{
                maxHeight: openItems.has(index) ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                backgroundColor: '#f8fafc'
              }}
            >
              <div style={{ padding: '20px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ 
                  color: '#475569', 
                  lineHeight: '1.6', 
                  marginBottom: faq.linkText ? '15px' : '0' 
                }}>
                  {faq.answer}
                </p>
                {faq.linkText && (
                  <a 
                    href={faq.linkUrl}
                    style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {faq.linkText}
                    <span style={{ fontSize: '0.9rem' }}>→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </div>
  );
};

export default EnhancedFAQ;
