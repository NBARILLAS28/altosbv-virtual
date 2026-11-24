// Service worker: deja la app instalable y rápida. Las llamadas a la API nunca se guardan.
const V = 'altosbv-v2';
const SHELL = ['./', 'index.html', 'admin.html', 'config.js', 'manifest.webmanifest', 'vendor/three.min.js', 'vendor/OrbitControls.js',
  'data/tour.json', 'icons/logo-cei.png', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  const fresh = e.request.mode === 'navigate' || /\.(html|js|json)$/.test(u.pathname);
  e.respondWith(fresh
    ? fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request))
    : caches.match(e.request).then(r => r || fetch(e.request).then(n => { const c = n.clone(); caches.open(V).then(x => x.put(e.request, c)); return n; })));
});
