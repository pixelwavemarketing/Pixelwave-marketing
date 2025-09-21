import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import siteConfig from '../config/siteConfig.js';

const Breadcrumbs = ({ customBreadcrumbs = null }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Route name mapping for better display names
  const routeNames = {
    'services': 'Services',
    'chatbot-solutions': 'Chatbot Solutions',
    'digital-marketing': 'Digital Marketing',
    'web-development': 'Web Development',
    'brand-identity': 'Brand Identity',
    'marketing-systems': 'Marketing Systems',
    'analytics': 'Analytics',
    'print-design': 'Print Design',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'faq': 'FAQ',
    'thank-you': 'Thank You'
  };

  // Define service pages that should have Services as parent
  const servicePages = [
    'chatbot-solutions',
    'digital-marketing',
    'web-development', 
    'brand-identity',
    'marketing-systems',
    'analytics',
    'print-design'
  ];

  // If custom breadcrumbs provided, use those
  let breadcrumbItems;
  if (customBreadcrumbs) {
    breadcrumbItems = customBreadcrumbs;
  } else {
    const currentPage = pathnames[0];
    
    if (servicePages.includes(currentPage)) {
      // For service pages: Home → Services → Service Name
      breadcrumbItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: routeNames[currentPage], path: `/${currentPage}` }
      ];
    } else {
      // For other pages: Home → Page Name
      breadcrumbItems = [
        { name: 'Home', path: '/' },
        ...pathnames.map((pathname, index) => {
          const path = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = routeNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
          return { name, path };
        })
      ];
    }
  }

  // Don't show breadcrumbs on home page
  if (location.pathname === '/' && !customBreadcrumbs) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.company.url}${item.path === '/' ? '' : item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb navigation"
        style={{
          padding: window.innerWidth <= 768 ? '4px 15px' : '6px 20px',
          backgroundColor: 'transparent',
          borderBottom: 'none',
          fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.8rem',
          opacity: 0.8
        }}
      >
        <ol style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} style={{ display: 'flex', alignItems: 'center' }}>
              {index > 0 && (
                <span style={{ 
                  margin: '0 6px', 
                  color: '#94a3b8',
                  userSelect: 'none',
                  fontSize: '0.7rem'
                }}>
                  →
                </span>
              )}
              
              {index === breadcrumbItems.length - 1 ? (
                // Current page - not a link
                <span 
                  style={{ 
                    color: '#64748b',
                    fontWeight: '400',
                    fontSize: '0.75rem'
                  }}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                // Link to previous pages
                <Link 
                  to={item.path}
                  style={{
                    color: '#6366f1',
                    textDecoration: 'none',
                    padding: '2px 4px',
                    borderRadius: '3px',
                    transition: 'all 0.2s ease',
                    fontSize: '0.75rem',
                    fontWeight: '400'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline';
                    e.target.style.color = '#4f46e5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none';
                    e.target.style.color = '#6366f1';
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

Breadcrumbs.propTypes = {
  customBreadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }))
};

export default Breadcrumbs;