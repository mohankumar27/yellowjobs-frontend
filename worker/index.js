//import { event as gevent } from '../lib/gtag'

self.addEventListener('install', (event) => {
  console.log('install event', event)
  //gevent('test')
})
self.addEventListener('activate', (event) => {
  console.log('activate event', event)
  //gevent('test')
})

self.addEventListener('fetch', (event) => {
  console.log('fetch event', event)
  //gevent('test')
  event.waitUntil(
    fetch('https://www.google-analytics.com/collect', {
      method: 'POST',
      body: 'v=1&tid=G-N190RPEJJ&t=event&ec=testCat&ea=testA&el=testl&ev=6',
    })
  )
})
