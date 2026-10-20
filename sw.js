// Offline support. Bump VERSION whenever you change any file so phones pick up the update.
const VERSION = "mood-meter-v16";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/bricolage-grotesque-latin.woff2",
  "./fonts/cinzel-decorative-700-latin.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  // a new version waits until the app says "Refresh" (or the app is fully closed)
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)));
});

self.addEventListener("message", event => {
  if (event.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve the app's own files from the cache; nothing else is ever requested.
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      if (event.request.mode === "navigate") return caches.match("./index.html");
      return fetch(event.request);
    })
  );
});
