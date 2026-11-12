const CACHE_NAME = 'ael-maintenance-v4';

const STATIC_ASSETS = [
  './',
  './index.html',
  'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
];

// Install: Cache core assets and take control immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate: Delete old caches from previous versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch handling
self.addEventListener('fetch', (event) => {

  // IMPORTANT:
  // Never cache POST/PUT/PATCH/DELETE requests.
  // Power Automate sync requests go directly to the network.
  if (event.request.method !== 'GET') {
    return;
  }

  const request = event.request;
  const acceptHeader = request.headers.get('accept') || '';

  // HTML pages:
  // Network First so the latest version of the app is loaded.
  if (
    request.mode === 'navigate' ||
    acceptHeader.includes('text/html')
  ) {

    event.respondWith(
      fetch(request)

        .then((networkResponse) => {

          // Only cache successful responses
          if (networkResponse && networkResponse.ok) {

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });

          }

          return networkResponse;
        })

        .catch(async () => {

          // If offline, try exact cached page
          const cachedResponse =
            await caches.match(request);

          if (cachedResponse) {
            return cachedResponse;
          }

          // Final offline fallback
          return caches.match('./index.html');

        })
    );

    return;
  }

  // Other static resources:
  // Cache First, then network
  event.respondWith(

    caches.match(request).then((cachedResponse) => {

      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {

        if (
          networkResponse &&
          networkResponse.ok
        ) {

          const responseClone =
            networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

        }

        return networkResponse;

      });

    })

  );

});
