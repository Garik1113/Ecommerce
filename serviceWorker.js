// const caheName = 'v1';

// const cachedAssets = [
//     'about.html'
// ];

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(caheName)
//         .then(cache => {
//             console.log("SERVICE CHACHED FILES")
//             cache.addAll(cachedAssets)
//         })
//         .then(() => self.skipWaiting())
//     )
//     console.log("Service installed")
// })

// self.addEventListener('activate', () => {
//     console.log("Service Activated")
// });

// self.addEventListener('fetch', e => {
//     console.log("Service worker fetching");
//     console.log("FETCHINGGGG", e)
//     // e.respondWith(fetch('/about.html'))
// });