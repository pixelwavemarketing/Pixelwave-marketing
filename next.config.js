/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ['usepixelwave.com'],
  
  // Redirects to canonicalize URLs
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.usepixelwave.com',
          },
        ],
        destination: 'https://usepixelwave.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'http://usepixelwave.com',
          },
        ],
        destination: 'https://usepixelwave.com/:path*',
        permanent: true,
      },
    ]
  },
  
  // Headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Link',
            value: '<https://usepixelwave.com>; rel="canonical"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 