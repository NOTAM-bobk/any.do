// sw.js - Service Worker for PWA and Push Notifications

const CACHE_NAME = 'pingme-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png'
];

// 1. Install Event: Cache basic files so the app works offline
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch Event: Serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; 
        }
        return fetch(event.request);
      })
  );
});

// 4. Push Event: Listen for background push notifications (e.g., from OneSignal or Firebase)
self.addEventListener('push', (event) => {
  let data = { title: "PingMe Reminder!", body: "You have a new reminder.", url: "/" };
  
  if (event.data) {
    try {
      // Try to parse as JSON if your push provider sends JSON
      data = event.data.json();
    } catch (e) {
      // Fallback to plain text
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: '/icon.png',
    badge: '/icon.png',
    vibrate: [200, 100, 200, 100, 200], // Cool vibration pattern for phones
    data: {
      url: data.url // Save the url so we can open it when clicked
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 5. Notification Click Event: Open the app when the user taps the notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = event.notification.data.url || '/';

  // Check if the app is already open, if so, focus it. Otherwise, open a new window.
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
