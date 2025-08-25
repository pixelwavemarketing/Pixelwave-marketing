import React from 'react';
import siteConfig from '../config/siteConfig.js';

const LocalBusinessSchema = ({ 
  additionalServices = [],
  specialHours = [],
  paymentMethods = ['Cash', 'Credit Card', 'Check'],
  currenciesAccepted = ['USD'],
  areaServed = siteConfig.company.areaServed
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.company.name,
    "image": siteConfig.company.logo,
    "url": siteConfig.company.url,
    "telephone": siteConfig.company.telephone,
    "email": siteConfig.company.email,
    "priceRange": siteConfig.company.priceRange,
    "paymentAccepted": paymentMethods.join(', '),
    "currenciesAccepted": currenciesAccepted.join(', '),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.company.address.streetAddress,
      "addressLocality": siteConfig.company.address.addressLocality,
      "addressRegion": siteConfig.company.address.addressRegion,
      "postalCode": siteConfig.company.address.postalCode,
      "addressCountry": siteConfig.company.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.company.coordinates.latitude,
      "longitude": siteConfig.company.coordinates.longitude
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
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
            "areaServed": areaServed.map(area => ({
              "@type": "City",
              "name": area
            }))
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
            "areaServed": areaServed.map(area => ({
              "@type": "City",
              "name": area
            }))
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
            "areaServed": areaServed.map(area => ({
              "@type": "City",
              "name": area
            }))
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "Local SEO and search ranking improvements",
            "provider": {
              "@type": "Organization",
              "name": siteConfig.company.name
            },
            "areaServed": areaServed.map(area => ({
              "@type": "City",
              "name": area
            }))
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
            "areaServed": areaServed.map(area => ({
              "@type": "City",
              "name": area
            }))
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
      "Local SEO",
      "Nashville Business Marketing"
    ],
    "foundingDate": siteConfig.company.foundingDate,
    "numberOfEmployees": siteConfig.company.numberOfEmployees
  };

  // Add special hours if provided
  if (specialHours.length > 0) {
    localBusinessSchema.openingHoursSpecification = [
      ...siteConfig.company.openingHours,
      ...specialHours
    ];
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
  );
};

export default LocalBusinessSchema;
