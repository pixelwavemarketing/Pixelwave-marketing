import React from 'react';
import siteConfig from '../config/siteConfig.js';

const LocalBusinessSchema = ({ 
  additionalServices = [],
  specialHours = [],
  paymentMethods = ['Cash', 'Credit Card', 'Check'],
  currenciesAccepted = ['USD'],
  areaServed = siteConfig.company.areaServed
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "image": siteConfig.company.logo,
    "url": siteConfig.company.url,
    "telephone": siteConfig.company.telephone,
    "email": siteConfig.company.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": siteConfig.company.address.addressCountry
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "openingHoursSpecification": siteConfig.company.openingHours,
    "sameAs": [
      siteConfig.company.socialMedia.facebook,
      siteConfig.company.socialMedia.instagram,
      siteConfig.company.socialMedia.linkedin
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
            "description": "Custom responsive websites and e-commerce solutions",
            "provider": {
              "@type": "Organization",
              "name": siteConfig.company.name
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Google Ads, SEO, and social media marketing",
            "provider": {
              "@type": "Organization",
              "name": siteConfig.company.name
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity",
            "description": "Logo design, business cards, and brand guidelines",
            "provider": {
              "@type": "Organization",
              "name": siteConfig.company.name
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "SEO and search ranking improvements",
            "provider": {
              "@type": "Organization",
              "name": siteConfig.company.name
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          }
        },
        ...additionalServices.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description,
            "provider": {
              "@type": "Organization",
              "name": siteConfig.company.name
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          }
        }))
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "Digital Marketing",
      "Web Development", 
      "Search Engine Optimization",
      "Google Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics",
      "Brand Identity",
      "E-commerce Development",
      "SEO",
      "Business Marketing"
    ],
    "foundingDate": siteConfig.company.foundingDate,
    "numberOfEmployees": siteConfig.company.numberOfEmployees
  };

  // Add special hours if provided
  if (specialHours.length > 0) {
    organizationSchema.openingHoursSpecification = [
      ...siteConfig.company.openingHours,
      ...specialHours
    ];
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(organizationSchema)}
    </script>
  );
};

export default LocalBusinessSchema;
