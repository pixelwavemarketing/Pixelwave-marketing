import { Helmet } from 'react-helmet'

function Breadcrumbs({ items }) {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                ${items.map((item, index) => `
                  {
                    "@type": "ListItem",
                    "position": ${index + 1},
                    "name": "${item.name}",
                    "item": "${item.url}"
                  }
                `).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>
      
      <nav style={{ padding: '20px', backgroundColor: '#f1f5f9' }}>
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && <span style={{ margin: '0 10px' }}>›</span>}
            <a href={item.url} style={{ color: index === items.length - 1 ? '#64748b' : '#2563eb' }}>
              {item.name}
            </a>
          </span>
        ))}
      </nav>
    </>
  )
}