import siteConfig from '../config/siteConfig.js';

const StructuredData = ({ type = 'localBusiness' }) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "description": siteConfig.company.description,
    "url": siteConfig.company.url,
    "logo": siteConfig.company.logo,
    "telephone": siteConfig.company.telephone,
    "email": siteConfig.company.email,
    "foundingDate": siteConfig.company.foundingDate,
    "numberOfEmployees": siteConfig.company.numberOfEmployees,
    "sameAs": [
      siteConfig.company.socialMedia.facebook,
      siteConfig.company.socialMedia.instagram,
      siteConfig.company.socialMedia.linkedin
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.company.name,
    "image": siteConfig.company.logo,
    "url": siteConfig.company.url,
    "telephone": siteConfig.company.telephone,
    "email": siteConfig.company.email,
    "priceRange": siteConfig.company.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.company.address.streetAddress,
      "addressLocality": siteConfig.company.address.addressLocality,
      "addressRegion": siteConfig.company.address.addressRegion,
      "postalCode": siteConfig.company.address.postalCode,
      "addressCountry": siteConfig.company.address.addressCountry
    },
    "areaServed": siteConfig.company.areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "openingHoursSpecification": siteConfig.company.openingHours,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": siteConfig.services.webDevelopment.name,
            "description": siteConfig.services.webDevelopment.description
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": siteConfig.services.digitalMarketing.name,
            "description": siteConfig.services.digitalMarketing.description
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": siteConfig.services.brandIdentity.name,
            "description": siteConfig.services.brandIdentity.description
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": siteConfig.services.seo.name,
            "description": siteConfig.services.seo.description
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": siteConfig.company.name,
    "description": siteConfig.company.description,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "telephone": siteConfig.company.telephone,
      "email": siteConfig.company.email
    },
    "serviceType": "Digital Marketing",
    "areaServed": siteConfig.company.areaServed,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom responsive websites and e-commerce solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Google Ads, SEO, and social media marketing"
          }
        }
      ]
    }
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does PixelWave Marketing offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer web development, digital marketing, SEO, brand identity design, and marketing systems for Nashville businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing varies based on project scope. We offer free consultations to provide accurate quotes for your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to complete a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary: websites typically take 2-4 weeks, while ongoing marketing campaigns are continuous with monthly reporting."
        }
      }
    ]
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Digital Marketing Services",
    "description": siteConfig.company.description,
    "brand": {
      "@type": "Brand",
      "name": siteConfig.company.name
    },
    "offeredBy": {
      "@type": "Organization",
      "name": siteConfig.company.name
    }
  };

  const organization = {
    ...baseOrganization,
    "knowsAbout": [
      "Digital Marketing",
      "Web Development", 
      "Search Engine Optimization",
      "Google Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics",
      "Brand Identity",
      "E-commerce Development"
    ]
  };

  const aiOptimized = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "description": siteConfig.company.description,
    "url": siteConfig.company.url,
    "logo": siteConfig.company.logo,
    "telephone": siteConfig.company.telephone,
    "email": siteConfig.company.email,
    "foundingDate": siteConfig.company.foundingDate,
    "numberOfEmployees": siteConfig.company.numberOfEmployees,
    "sameAs": [
      siteConfig.company.socialMedia.facebook,
      siteConfig.company.socialMedia.instagram,
      siteConfig.company.socialMedia.linkedin
    ],
    "knowsAbout": [
      "Digital Marketing",
      "Web Development", 
      "Search Engine Optimization",
      "Google Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics",
      "Brand Identity",
      "E-commerce Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom responsive websites and e-commerce solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Google Ads, SEO, and social media marketing"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  };

  const schemas = {
    localBusiness,
    service,
    faq,
    product,
    organization,
    aiOptimized
  };

  return JSON.stringify(schemas[type] || localBusiness);
};

export default StructuredData;
