// Service Worker for aggressive caching on GitHub Pages
// This provides long-term caching that GitHub Pages cache headers don't provide

const CACHE_NAME = 'hatzofen-v1';
const CACHE_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

// Assets to cache with long-term expiration
const LONG_CACHE_ASSETS = [
  '/logos/Tzofen_logo2.webp',
  '/videos/tzofen_video.mp4',
  '/icons/App Store.svg',
  '/icons/Google Play.svg',
  '/tzofen/homescreen.webp',
  '/tzofen/catscreen.webp',
  '/tzofen/puzscreen.webp',
  '/tzofen/solvedscreen.webp',
  '/tzofen/hintscreen.webp'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching critical assets');
        return cache.addAll(LONG_CACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with long-term expiration
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    return;
  }
  
  // Check if this is a long-cache asset
  const isLongCacheAsset = LONG_CACHE_ASSETS.some(asset => 
    url.pathname.includes(asset) || url.pathname.endsWith(asset)
  );
  
  // Check if this is a versioned asset (has hash in filename)
  const isVersionedAsset = /\.[a-f0-9]{8,}\.(js|css|woff2?|png|jpg|jpeg|webp|svg)$/i.test(url.pathname);
  
  if (isLongCacheAsset || isVersionedAsset) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            // Check if cache is still valid (1 year)
            const cacheTime = cachedResponse.headers.get('sw-cache-time');
            if (cacheTime && (Date.now() - parseInt(cacheTime)) < CACHE_DURATION) {
              console.log('Service Worker: Serving from cache', url.pathname);
              return cachedResponse;
            }
          }
          
          // Fetch from network and cache
          return fetch(event.request).then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              // Add cache timestamp
              const headers = new Headers(responseClone.headers);
              headers.set('sw-cache-time', Date.now().toString());
              
              const cachedResponse = new Response(responseClone.body, {
                status: responseClone.status,
                statusText: responseClone.statusText,
                headers: headers
              });
              
              cache.put(event.request, cachedResponse);
              console.log('Service Worker: Cached', url.pathname);
            }
            return response;
          });
        });
      })
    );
  }
});

// Handle cache cleanup on storage pressure
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
