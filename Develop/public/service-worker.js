console.log("I am service worker");

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/index.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/styles.css',
    '/manifest.webmanifest',
    '/models/transaction.js',
    '/routes/api.js'
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener('install', function(evt) {
    evt.waitUntil(
        
        caches.open(CACHE_NAME).then(cache => {
            console.log("Files pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});