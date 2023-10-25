const staticCacheName = 'static-caches-v3'
const dynamicCacheName = 'site-dynamic-v1'

// Array med filer
const assets = [
    './index.html',
    './src/main.jsx',
    './src/App.jsx',
    './src/App.css'
]

caches.open('my-cache').then(cache => {
    // Tilføj flere filer
    cache.addAll(assets); 
});


// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets)
        })
    )
	console.log('Service Worker has been installed');
})

// Activate Service Worker
self.addEventListener('activate', event => {
	console.log('Service Worker has been activated');
    // Bliver i scopet til task er udført
    event.waitUntil(
        //henter alle cache pakker
        caches.keys().then(keys => {
            //filtere array med alle uactuelle cache pakker
            const filteredKeys = keys.filter(key => key !== staticCacheName)
            //mapper array og sletter pakker
            filteredKeys.map(key => {
                caches.delete(key)
            })   
        })
    )
})

// Fetch event
self.addEventListener('fetch', event => {
	// Kontroller svar på request
	event.respondWith(
		// Kig efter file match i cache 
		caches.match(event.request).then(cacheRes => {
			// Returner match fra cache - ellers hent fil på server
			return cacheRes || fetch(event.request).then(async fetchRes => {
				// Tilføjer nye sider til cachen
				return caches.open(dynamicCacheName).then(cache => {
					// Bruger put til at tilføje sider til vores cache
					// Læg mærke til metoden clone
					cache.put(event.request.url, fetchRes.clone())
					// Returnerer fetch request
					return fetchRes
				})
			})
		})
	)
})