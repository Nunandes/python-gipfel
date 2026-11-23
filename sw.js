// Python Gipfel – Service Worker: App offline verfügbar machen
const VERSION = 'gipfel-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // Python-Laufzeit (Pyodide) und Schriften: einmal laden, danach aus dem Cache
  if (url.hostname === 'cdn.jsdelivr.net' || url.hostname.endsWith('gstatic.com') || url.hostname === 'fonts.googleapis.com') {
    e.respondWith(
      caches.open(VERSION).then(async c => {
        const hit = await c.match(e.request);
        if (hit) return hit;
        const res = await fetch(e.request);
        if (res.ok || res.type === 'opaque') c.put(e.request, res.clone());
        return res;
      })
    );
    return;
  }

  // Eigene Dateien: zuerst Netz (für Updates), sonst Cache
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(e.request)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res; })
        .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
  }
});
