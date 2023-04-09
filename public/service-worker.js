/* eslint-disable */
// Asignamos un nombre y una versión al Service Worker
const CACHE_NAME = 'my-app-cache-v1';

// Definimos las rutas que se almacenarán en caché
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/static/css/main.chunk.css',
  '/static/js/main.chunk.js',
  '/logo192.png',
  '/logo512.png',
];

// Instalamos el Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Usamos el Service Worker para recuperar los datos
// de caché o de la red
self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            console.log(
              'Encontrado en caché:', 
              event.request.url);
            return response;
          }
          console.log(
            'No se encontró en caché:', 
            event.request.url);
          return fetch(event.request);
        })
    );
  });
  
  // Actualizamos el Service Worker
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.filter((cacheName) => {
              return cacheName !== CACHE_NAME;
            }).map((cacheName) => {
              return caches.delete(cacheName);
            })
          );
        })
    );
  });
  