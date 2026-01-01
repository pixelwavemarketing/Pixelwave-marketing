// Service Worker for caching static assets
const CACHE_NAME = 'pixelwave-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/PixelWave.png',
  '/favicon.ico',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Skip waiting to activate immediately
        return self.skipWaiting();
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

  const url = new URL(event.request.url);
  
  // Skip external third-party scripts that might fail
  const externalDomains = [
    'connect.facebook.net',
    'www.googletagmanager.com',
    'www.google-analytics.com',
    'www.facebook.com'
  ];
  
  const isExternalScript = externalDomains.some(domain => 
    url.hostname.includes(domain)
  );
  
  if (isExternalScript) {
    // For external scripts, skip service worker entirely and let browser handle
    return;
  }

  // For asset files (JS, CSS, images, fonts), always fetch from network first
  // Don't serve cached HTML for asset requests
  const isAssetRequest = url.pathname.match(/\.(js|css|jsx|ts|tsx|json|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|ico)$/i);
  
  if (isAssetRequest) {
    // For assets, try network first, then cache
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Only cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // If network fails, try cache, but don't serve HTML for asset requests
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              // Check if cached response is actually the right type
              const contentType = cachedResponse.headers.get('content-type');
              if (contentType && !contentType.includes('text/html')) {
                return cachedResponse;
              }
            }
            // Return 404 if we can't find the asset
            return new Response('Asset not found', { status: 404, statusText: 'Not Found' });
          });
        })
    );
    return;
  }

  // For HTML pages, try cache first, then network
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then((networkResponse) => {
          // Cache successful responses
          if (networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Return a fallback response if fetch fails
          return new Response('', { status: 404, statusText: 'Not Found' });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});
