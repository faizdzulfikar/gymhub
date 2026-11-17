// Gym Hub offline cache: app shell from network first, cache as fallback.
const C = "gymhub-v5";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./exercises-lib.json", "./fb.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url);
  const font = /fonts\.(googleapis|gstatic)\.com$|cdn\.jsdelivr\.net$/.test(u.hostname);
  if (u.origin !== location.origin && !font) return;
  if (font) { e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; }))); return; }
  e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(hit => hit || caches.match("./index.html"))));
});
