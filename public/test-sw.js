const ASSETS = [
  'c/logo-bcc20dd5.svg',
  'c/github-logo-bc05494c.svg',
  'c/icon-demo-artwork-9eba1655.jpg',
  'c/icon-demo-logo-326ed9b6.png',
  'c/icon-demo-large-photo-18da387a.jpg',
  'c/icon-demo-device-screen-5d52d8b9.jpg',
  'c/small-db1eae6f.svg',
  'c/simple-258b6ed5.svg',
  'c/secure-a66bbdfe.svg',
  'c/rotate-e8fb6784.wasm',
  'c/imagequant-a10bbe1a.wasm',
  'c/webp_dec-12bed04a.wasm',
  'c/squoosh_oxipng_bg-bb6b7672.wasm',
  'c/squoosh_resize_bg-3d426466.wasm',
  'c/demo-device-screen-b9d088e8.png',
  'c/webp_enc-a8223a7d.wasm',
  'c/squoosh_oxipng_bg-89ef9006.wasm',
  'c/mozjpeg_enc-f6bf569c.wasm',
  'c/squooshhqx_bg-6e04a330.wasm',
  'c/webp_enc_simd-75acd924.wasm',
  'c/wp2_dec-9a40adf1.wasm',
  'c/jxl_dec-e90a5afa.wasm',
  'c/wp2_enc-89317929.wasm',
  'c/wp2_enc_mt-1feb6658.wasm',
  'c/wp2_enc_mt_simd-0b0595e9.wasm',
  'c/jxl_enc_mt-669d03c7.wasm',
  'c/jxl_enc-68f8271f.wasm',
  'c/avif_dec-07eff3d3.wasm',
  'c/demo-large-photo-a6b23f7b.jpg',
  'c/demo-artwork-c444f915.jpg',
  'c/jxl_enc_mt_simd-efe18ebf.wasm',
  'c/avif_enc-b345922b.wasm',
  'c/avif_enc_mt-e6a6332c.wasm',
  'c/initial-app-ecd7d97e.js',
  'c/idb-keyval-c33d3116.js',
  'c/index-5f659321.js',
  'c/features-worker-f57d2da0.js',
  'c/util-06ce6ead.js',
  'c/jxl_enc_mt.worker-7d087419.js',
  'c/avif_enc_mt.worker-a3a271d8.js',
  'c/jxl_enc_mt_simd.worker-07966959.js',
  'c/wp2_enc_mt_simd.worker-678e27bc.js',
  'c/wp2_enc_mt.worker-4f5bfb87.js',
  'c/workerHelpers-1cef0d92.js',
  'c/Compress-42737ff9.js',
  'c/sw-bridge-ceda69b8.js',
  'c/blob-anim-053c8653.js',
  'c/avif_dec-d2924c58.js',
  'c/webp_dec-318dc2b4.js',
  'c/avif_enc_mt-77141844.js',
  'c/avif_enc-31cf8e60.js',
  'c/jxl_enc_mt_simd-99c0de1e.js',
  'c/jxl_enc_mt-388d6b22.js',
  'c/jxl_enc-fe8a44c4.js',
  'c/squoosh_oxipng-11cbffe8.js',
  'c/squoosh_oxipng-65aca905.js',
  'c/webp_enc_simd-ad66a6ff.js',
  'c/webp_enc-de8661ab.js',
  'c/wp2_enc_mt_simd-b522b14c.js',
  'c/wp2_enc_mt-3032a41c.js',
  'c/wp2_enc-f854d67c.js',
]
const VERSION = 'd356279252b1cfc28781fbea4cf73dfda9f7cb91'
if (!self.define) {
  let e = {}
  const A = (A, t) => (
    (A = A.startsWith(location.origin) ? A : new URL(A + '.js', t).href),
    e[A] ||
      new Promise((e) => {
        if ('document' in self) {
          const t = document.createElement('link')
          ;(t.rel = 'preload'),
            (t.as = 'script'),
            (t.href = A),
            (t.onload = () => {
              const t = document.createElement('script')
              ;(t.src = A), (t.onload = e), document.head.appendChild(t)
            }),
            document.head.appendChild(t)
        } else (self.nextDefineUri = A), importScripts(A), e()
      }).then(() => {
        let t = e[A]
        if (!t) throw new Error(`Module ${A} didn’t register its module`)
        return t
      })
  )
  self.define = (t, n) => {
    const a =
      self.nextDefineUri ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (e[a]) return
    let _ = {}
    const s = (e) => A(e, a),
      i = { module: { uri: a }, exports: _, require: s }
    e[a] = Promise.resolve()
      .then(() => Promise.all(t.map((e) => i[e] || s(e))))
      .then((e) => (n(...e), _))
  }
}
define(['./c/index-5f659321', './c/idb-keyval-c33d3116'], function (e, A) {
  var t =
      'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
    n =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABUAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB1tZGF0EgAKBDgADskyCx/wAABYAAAAAK+w'
  const a = '/c/initial-app-ecd7d97e.js',
    _ = [
      '/c/logo-bcc20dd5.svg',
      '/c/github-logo-bc05494c.svg',
      '/c/demo-large-photo-a6b23f7b.jpg',
      '/c/demo-artwork-c444f915.jpg',
      '/c/demo-device-screen-b9d088e8.png',
      '/c/icon-demo-large-photo-18da387a.jpg',
      '/c/icon-demo-artwork-9eba1655.jpg',
      '/c/icon-demo-device-screen-5d52d8b9.jpg',
      '/c/small-db1eae6f.svg',
      '/c/simple-258b6ed5.svg',
      '/c/secure-a66bbdfe.svg',
      '/c/icon-demo-logo-326ed9b6.png',
    ],
    s = '/c/Compress-42737ff9.js',
    i = [
      '/c/initial-app-ecd7d97e.js',
      '/c/util-06ce6ead.js',
      '/c/features-worker-f57d2da0.js',
      '/c/logo-bcc20dd5.svg',
      '/c/github-logo-bc05494c.svg',
      '/c/demo-large-photo-a6b23f7b.jpg',
      '/c/demo-artwork-c444f915.jpg',
      '/c/demo-device-screen-b9d088e8.png',
      '/c/icon-demo-large-photo-18da387a.jpg',
      '/c/icon-demo-artwork-9eba1655.jpg',
      '/c/icon-demo-device-screen-5d52d8b9.jpg',
      '/c/small-db1eae6f.svg',
      '/c/simple-258b6ed5.svg',
      '/c/secure-a66bbdfe.svg',
      '/c/icon-demo-logo-326ed9b6.png',
    ],
    r = '/c/sw-bridge-ceda69b8.js',
    c = ['/c/idb-keyval-c33d3116.js', '/serviceworker.js'],
    o = '/c/blob-anim-053c8653.js',
    l = [
      '/c/initial-app-ecd7d97e.js',
      '/c/logo-bcc20dd5.svg',
      '/c/github-logo-bc05494c.svg',
      '/c/demo-large-photo-a6b23f7b.jpg',
      '/c/demo-artwork-c444f915.jpg',
      '/c/demo-device-screen-b9d088e8.png',
      '/c/icon-demo-large-photo-18da387a.jpg',
      '/c/icon-demo-artwork-9eba1655.jpg',
      '/c/icon-demo-device-screen-5d52d8b9.jpg',
      '/c/small-db1eae6f.svg',
      '/c/simple-258b6ed5.svg',
      '/c/secure-a66bbdfe.svg',
      '/c/icon-demo-logo-326ed9b6.png',
    ],
    N = '/c/features-worker-f57d2da0.js',
    E = [
      '/c/util-06ce6ead.js',
      '/c/index-5f659321.js',
      '/c/jxl_dec-e90a5afa.wasm',
      '/c/wp2_dec-9a40adf1.wasm',
      '/c/mozjpeg_enc-f6bf569c.wasm',
      '/c/rotate-e8fb6784.wasm',
      '/c/imagequant-a10bbe1a.wasm',
      '/c/squoosh_resize_bg-3d426466.wasm',
      '/c/squooshhqx_bg-6e04a330.wasm',
    ]
  var d = Object.freeze({ __proto__: null, main: N, deps: E })
  const f = '/c/avif_dec-d2924c58.js',
    u = ['/c/avif_dec-07eff3d3.wasm']
  var T = Object.freeze({ __proto__: null, main: f, deps: u })
  const p = '/c/webp_dec-318dc2b4.js',
    m = ['/c/webp_dec-12bed04a.wasm']
  var P = Object.freeze({ __proto__: null, main: p, deps: m })
  const D = '/c/avif_enc_mt-77141844.js',
    I = ['/c/avif_enc_mt-e6a6332c.wasm', '/c/avif_enc_mt.worker-a3a271d8.js']
  var h = Object.freeze({ __proto__: null, main: D, deps: I })
  const U = '/c/avif_enc-31cf8e60.js',
    w = ['/c/avif_enc-b345922b.wasm']
  var G = Object.freeze({ __proto__: null, main: U, deps: w })
  const R = '/c/jxl_enc_mt_simd-99c0de1e.js',
    L = [
      '/c/jxl_enc_mt_simd-efe18ebf.wasm',
      '/c/jxl_enc_mt_simd.worker-07966959.js',
    ]
  var Y = Object.freeze({ __proto__: null, main: R, deps: L })
  const M = '/c/jxl_enc_mt-388d6b22.js',
    S = ['/c/jxl_enc_mt-669d03c7.wasm', '/c/jxl_enc_mt.worker-7d087419.js']
  var g = Object.freeze({ __proto__: null, main: M, deps: S })
  const v = '/c/jxl_enc-fe8a44c4.js',
    b = ['/c/jxl_enc-68f8271f.wasm']
  var B = Object.freeze({ __proto__: null, main: v, deps: b })
  const j = '/c/squoosh_oxipng-11cbffe8.js',
    y = ['/c/workerHelpers-1cef0d92.js', '/c/squoosh_oxipng_bg-89ef9006.wasm']
  var O = Object.freeze({ __proto__: null, main: j, deps: y })
  const z = '/c/squoosh_oxipng-65aca905.js',
    W = ['/c/squoosh_oxipng_bg-bb6b7672.wasm']
  var k = Object.freeze({ __proto__: null, main: z, deps: W })
  const x = '/c/webp_enc_simd-ad66a6ff.js',
    q = ['/c/webp_enc_simd-75acd924.wasm']
  var Q = Object.freeze({ __proto__: null, main: x, deps: q })
  const C = '/c/webp_enc-de8661ab.js',
    Z = ['/c/webp_enc-a8223a7d.wasm']
  var X = Object.freeze({ __proto__: null, main: C, deps: Z })
  const F = '/c/wp2_enc_mt_simd-b522b14c.js',
    K = [
      '/c/wp2_enc_mt_simd-0b0595e9.wasm',
      '/c/wp2_enc_mt_simd.worker-678e27bc.js',
    ]
  var V = Object.freeze({ __proto__: null, main: F, deps: K })
  const H = '/c/wp2_enc_mt-3032a41c.js',
    J = ['/c/wp2_enc_mt-1feb6658.wasm', '/c/wp2_enc_mt.worker-4f5bfb87.js']
  var $ = Object.freeze({ __proto__: null, main: H, deps: J })
  const ee = '/c/wp2_enc-f854d67c.js',
    Ae = ['/c/wp2_enc-89317929.wasm']
  var te = Object.freeze({ __proto__: null, main: ee, deps: Ae })
  function ne(e) {
    return e.startsWith('/c/demo-')
  }
  let ae = new Set([s, ...i, r, ...c, o, ...l])
  ae = (function (e, A) {
    const t = new Set(e)
    for (const e of A) t.delete(e)
    return t
  })(
    ae,
    new Set([a, ..._.filter((e) => e.endsWith('.js') || ne(e)), N, A.swUrl])
  )
  const _e = ['/', ...ae],
    se = (async () => {
      const [A, a, _, s] = await Promise.all([
          e.threads(),
          e.simd(),
          ...[t, n].map(async (e) => {
            if (!self.createImageBitmap) return !1
            const A = await fetch(e),
              t = await A.blob()
            return createImageBitmap(t).then(
              () => !0,
              () => !1
            )
          }),
        ]),
        i = []
      function r(e) {
        i.push(e.main, ...e.deps)
      }
      return (
        r(d),
        s || r(T),
        _ || r(P),
        r(A ? h : G),
        r(A && a ? Y : A ? g : B),
        r(A ? O : k),
        r(a ? Q : X),
        r(A && a ? V : A ? $ : te),
        [...new Set(i)]
      )
    })()
  function ie(e) {
    const A = e.request.formData()
    e.respondWith(Response.redirect('/?share-target')),
      e.waitUntil(
        (async function () {
          var t
          await ((t = 'share-ready'),
          new Promise((e) => {
            oe.has(t) || oe.set(t, []), oe.get(t).push(e)
          }))
          const n = await self.clients.get(e.resultingClientId),
            a = (await A).get('file')
          n.postMessage({ file: a, action: 'load-image' })
        })()
      )
  }
  function re(e) {
    return e.map((e) => new Request(e, { cache: 'no-cache' }))
  }
  async function ce(e) {
    return (await caches.open(e)).addAll(re(await se))
  }
  const oe = new Map()
  self.addEventListener('message', (e) => {
    const A = oe.get(e.data)
    if (A) {
      oe.delete(e.data)
      for (const e of A) e()
    }
  })
  const le = 'static-' + VERSION,
    Ne = 'dynamic',
    Ee = [le, Ne]
  self.addEventListener('install', (e) => {
    e.waitUntil(
      (async function () {
        const e = []
        e.push(
          (async function (e) {
            return (await caches.open(e)).addAll(re(_e))
          })(le)
        ),
          (await A.get('user-interacted')) && e.push(ce(le)),
          await Promise.all(e)
      })()
    )
  }),
    self.addEventListener('activate', (e) => {
      self.clients.claim(),
        e.waitUntil(
          (async function () {
            const e = (await caches.keys()).map((e) => {
              if (!Ee.includes(e)) return caches.delete(e)
            })
            await Promise.all(e)
          })()
        )
    }),
    self.addEventListener('fetch', (e) => {
      const A = new URL(e.request.url)
      if (A.origin === location.origin)
        if ('/editor' !== A.pathname) {
          if (
            '/' === A.pathname &&
            A.searchParams.has('share-target') &&
            'POST' === e.request.method
          )
            ie(e)
          else if ('GET' === e.request.method)
            return ne(A.pathname)
              ? ((function (e, A) {
                  e.respondWith(
                    (async function () {
                      const { request: t } = e,
                        n = await caches.match(t)
                      if (n) return n
                      const a = await fetch(t),
                        _ = a.clone()
                      return (
                        e.waitUntil(
                          (async function () {
                            const e = await caches.open(A)
                            await e.put(t, _)
                          })()
                        ),
                        a
                      )
                    })()
                  )
                })(e, Ne),
                void (function (e, A, t) {
                  e.waitUntil(
                    (async function () {
                      const e = await caches.open(A),
                        n = (await e.keys()).map((A) => {
                          const n = new URL(A.url).pathname.slice(1)
                          if (!t.includes(n)) return e.delete(A)
                        })
                      await Promise.all(n)
                    })()
                  )
                })(e, Ne, ASSETS))
              : void (function (e) {
                  e.respondWith(
                    (async function () {
                      return (
                        (await caches.match(e.request, { ignoreSearch: !0 })) ||
                        fetch(e.request)
                      )
                    })()
                  )
                })(e)
        } else e.respondWith(Response.redirect('/'))
    }),
    self.addEventListener('message', (e) => {
      switch (e.data) {
        case 'cache-all':
          e.waitUntil(ce(le))
          break
        case 'skip-waiting':
          self.skipWaiting()
      }
    })
})
