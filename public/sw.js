// Service Worker for caching static assets
const CACHE_NAME = 'pixelwave-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/pixelwave-logo.webp',
  '/favicon.ico',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Skip external third-party scripts that might fail
  const externalDomains = [
    'connect.facebook.net',
    'www.googletagmanager.com',
    'www.google-analytics.com',
    'www.facebook.com'
  ];
  
  const isExternalScript = externalDomains.some(domain => 
    event.request.url.includes(domain)
  );
  
  if (isExternalScript) {
    // For external scripts, skip service worker entirely and let browser handle
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(() => {
          // Return a fallback response if fetch fails
          return new Response('', { status: 404, statusText: 'Not Found' });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
