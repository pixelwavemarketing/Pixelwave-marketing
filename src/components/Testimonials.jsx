import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = ({ testimonials, title = "What Our Clients Say", description = "Real results from real businesses" }) => {
  return (
    <div className="testimonials" style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '15px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>
            {description}
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                minWidth: '280px',
                flex: '1 1 350px'
              }}
            >
              {/* Quote Icon - positioned at top right */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '2rem',
                color: '#e2e8f0',
                zIndex: 1
              }}>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              
              {/* Star Rating - positioned below quote icon */}
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '20px',
                justifyContent: 'flex-start',
                marginTop: '10px'
              }}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{
                      color: i < testimonial.rating ? '#fbbf24' : '#e2e8f0',
                      fontSize: '1.1rem'
                    }}
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <div style={{ flex: 1, marginBottom: '20px' }}>
                <p style={{
                  color: '#475569',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  paddingRight: '40px' // Make room for quote icon
                }}>
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Information */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginTop: 'auto'
              }}>
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                )}
                <div>
                  <h4 style={{
                    color: '#1e293b',
                    margin: '0 0 5px 0',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    color: '#64748b',
                    margin: '0',
                    fontSize: '0.9rem'
                  }}>
                    {testimonial.title}
                  </p>
                  {testimonial.company && (
                    <p style={{
                      color: '#64748b',
                      margin: '5px 0 0 0',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PixelWave Marketing",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": testimonials.length,
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.content,
            "itemReviewed": {
              "@type": "Service",
              "name": "Digital Marketing Services"
            }
          }))
        })}
      </script>
    </div>
  );
};

export default Testimonials;
