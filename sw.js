const CACHE = 'comptines-20260421221307';

const PRECACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/assets/audio/comptine-1.mp3',
  '/assets/audio/comptine-2.mp3',
  '/assets/audio/comptine-3.mp3',
  '/assets/audio/comptine-4.mp3',
  '/assets/audio/comptine-5.mp3',
  '/assets/audio/comptine-6.mp3',
  '/assets/audio/comptine-7.mp3',
  '/assets/audio/comptine-8.mp3',
  '/assets/audio/comptine-9.mp3',
  '/assets/audio/comptine-10.mp3',
  '/assets/audio/comptine-11.mp3',
  '/assets/audio/comptine-12.mp3',
  '/assets/audio/comptine-13.mp3',
  '/assets/audio/comptine-14.mp3',
  '/assets/audio/comptine-15.mp3',
  '/assets/audio/comptine-16.mp3',
  '/assets/audio/comptine-17.mp3',
  '/assets/audio/comptine-18.mp3',
  '/assets/audio/comptine-19.mp3',
  '/assets/audio/comptine-20.mp3',
  '/assets/audio/comptine-21.mp3',
  '/assets/audio/comptine-22.mp3',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  /* Stratégie Cache First pour les assets, Network First pour la navigation */
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      });
    })
  );
});
