const CACHE = "resume-ai-v1";
const ASSETS = ["/resume-ai/", "/resume-ai/index.html", "/resume-ai/manifest.json", "/resume-ai/icon-4.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
