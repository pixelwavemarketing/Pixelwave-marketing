import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import siteConfig from '../config/siteConfig.js';

const SocialMediaIntegration = ({ 
  showTitle = true, 
  showDescription = false, 
  layout = 'horizontal', // 'horizontal' or 'vertical'
  size = 'medium', // 'small', 'medium', 'large'
  includeFollowText = true,
  customStyle = {}
}) => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      url: siteConfig.company.socialMedia.facebook,
      icon: faFacebook,
      color: '#1877F2',
      description: 'Follow us on Facebook for marketing tips and updates'
    },
    {
      name: 'Instagram',
      url: siteConfig.company.socialMedia.instagram,
      icon: faInstagram,
      color: '#E4405F',
      description: 'See our latest work and behind-the-scenes on Instagram'
    },
    {
      name: 'LinkedIn',
      url: siteConfig.company.socialMedia.linkedin,
      icon: faLinkedin,
      color: '#0A66C2',
      description: 'Connect with us professionally on LinkedIn'
    }
  ];

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { fontSize: '1.2rem', padding: '8px 12px' };
      case 'large':
        return { fontSize: '2rem', padding: '16px 20px' };
      default: // medium
        return { fontSize: '1.5rem', padding: '12px 16px' };
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: layout === 'vertical' ? 'column' : 'row',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...customStyle
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: getSizeStyles().padding,
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    fontSize: getSizeStyles().fontSize,
    minWidth: 'fit-content'
  };

  const iconStyle = {
    fontSize: getSizeStyles().fontSize
  };

  return (
    <div className="social-media-integration">
      {showTitle && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '10px' }}>
            Connect With Us
          </h3>
          {showDescription && (
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Follow us on social media for the latest updates, tips, and insights
            </p>
          )}
        </div>
      )}

      <div style={containerStyle}>
        {socialPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkStyle,
              backgroundColor: platform.color
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            aria-label={`Follow us on ${platform.name}`}
            title={platform.description}
          >
            <FontAwesomeIcon icon={platform.icon} style={iconStyle} />
            {includeFollowText && (
              <span style={{ fontSize: '0.9rem' }}>
                Follow on {platform.name}
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Social Media Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteConfig.company.name,
          "url": siteConfig.company.url,
          "sameAs": [
            siteConfig.company.socialMedia.facebook,
            siteConfig.company.socialMedia.instagram,
            siteConfig.company.socialMedia.linkedin
          ],
          "description": siteConfig.company.description,
          "logo": siteConfig.company.logo,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.company.telephone,
            "contactType": "customer service",
            "email": siteConfig.company.email,
            "areaServed": siteConfig.company.areaServed,
            "availableLanguage": "English"
          }
        })}
      </script>
    </div>
  );
};

export default SocialMediaIntegration;
