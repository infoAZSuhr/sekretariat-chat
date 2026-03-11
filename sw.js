const CACHE = 'sekretariat-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Network first — fall back to cache for offline
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
