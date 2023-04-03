self.addEventListener('install', event=>{
    console.log(event)
})
self.addEventListener('activate', event=>{
    console.log(event)
})
self.addEventListener('fetch',event =>{
    if(!navigator.onLine){
        //event.respondWith(new Response("probleme connexion internet"));
        console.log(event.request.url);
    }
})
