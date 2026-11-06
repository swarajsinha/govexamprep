/* Govexamprep offline helper.
   Always tries the internet first, so students get the newest questions.
   If there is no internet, it shows the last saved copy. */
const CACHE = 'gep-v20';
const CORE = ['./', 'index.html', 'manifest.json', 'data/settings.js', 'data/syllabus.js', 'data/exams.js', 'data/notes.js',
  'data/question-bank-1.js', 'data/question-bank-2.js', 'data/questions.js', 'data/papers.js', 'data/current-affairs.js', 'data/books.js', 'assets/logo-icon-192.png', 'assets/favicon-64.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
