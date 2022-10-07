const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1')
  await cache.addAll(resources)
}

const putInCache = async (request, response) => {
  const cache = await caches.open('v1')
  await cache.put(request, response)
}

const cacheFirst = async (request, preloadResponsePromise) => {
  // just to get rid from error
  if (!preloadResponsePromise.fulfilled) await preloadResponsePromise

  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request)
  if (responseFromCache) return responseFromCache

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise
  if (preloadResponse) {
    console.info('[Service worker] Using preload response', preloadResponse)
    putInCache(request, preloadResponse.clone())
    return preloadResponse
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request)
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    const fallbackResponse = await caches.match('/fail.html')
    if (fallbackResponse) return fallbackResponse
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(addResourcesToCache(['/', '/test.html', '/fail.html']))
  console.log('[Service worker] installed.')
})

self.addEventListener('activate', (event) => {
  if (self.registration.navigationPreload) {
    event.waitUntil(self.registration.navigationPreload.enable())
    console.log('[Service worker] preload enabled.')
  }
  console.log('[Service worker] activated.')
})

self.addEventListener('fetch', (event) => {
  // fonts are loaded from browser itself pointing to chrome extension which will throw error
  const A = new URL(event.request.url)
  if (A.origin === location.origin)
    event.respondWith(cacheFirst(event.request, event.preloadResponse))
})
