/*const staticPWA = "PWA-main";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/chat.js",
  "/images/icon-192x192.png",
  "/images/icon-256x256.png",
  "/images/icon-384x384.png",
  "/images/icon-512x512.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPWA).then(cache => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener('activate', event=>{
  console.log(event)
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});*/

self.addEventListener('install', event=>{
  console.log(event)
})
self.addEventListener('activate', event=>{
  console.log(event)
})
self.addEventListener('fetch',event =>{
  if(!navigator.onLine){
      //event.respondWith(new Response("probleme connexion internet"));
      console.log(event.request.url),
      console.log(`start server worker`)
  }
})