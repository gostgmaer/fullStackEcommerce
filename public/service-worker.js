if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-PVGsDXiCYKzatpj_9svJ_.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/PVGsDXiCYKzatpj_9svJ_/_buildManifest.js",revision:"b896ba533cc1f4b1044eb1eb86897994"},{url:"/_next/static/PVGsDXiCYKzatpj_9svJ_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/18-d8deeca64640bbb0.js",revision:"d8deeca64640bbb0"},{url:"/_next/static/chunks/1b8dab7b-dce97b277f2f0463.js",revision:"dce97b277f2f0463"},{url:"/_next/static/chunks/228771e0-5273cd4ee92e958b.js",revision:"5273cd4ee92e958b"},{url:"/_next/static/chunks/3-0ca16be18979ae4e.js",revision:"0ca16be18979ae4e"},{url:"/_next/static/chunks/313-a03a3028b50c2c02.js",revision:"a03a3028b50c2c02"},{url:"/_next/static/chunks/31664189-86708806381c5388.js",revision:"86708806381c5388"},{url:"/_next/static/chunks/330-6d8f5fd810c2b35f.js",revision:"6d8f5fd810c2b35f"},{url:"/_next/static/chunks/464.fc12d2c60ea0e6b8.js",revision:"fc12d2c60ea0e6b8"},{url:"/_next/static/chunks/465-71dc0ee4f2f6e9af.js",revision:"71dc0ee4f2f6e9af"},{url:"/_next/static/chunks/478-3cf6eebaec936667.js",revision:"3cf6eebaec936667"},{url:"/_next/static/chunks/533-a88f7ff49d7581ea.js",revision:"a88f7ff49d7581ea"},{url:"/_next/static/chunks/545.b3af7e52ee1713fb.js",revision:"b3af7e52ee1713fb"},{url:"/_next/static/chunks/65291039-a3512ead4a7ad460.js",revision:"a3512ead4a7ad460"},{url:"/_next/static/chunks/688-c830ce4062a37e94.js",revision:"c830ce4062a37e94"},{url:"/_next/static/chunks/707-35569910220a04e8.js",revision:"35569910220a04e8"},{url:"/_next/static/chunks/778-af528322b086315a.js",revision:"af528322b086315a"},{url:"/_next/static/chunks/946-5269342595728548.js",revision:"5269342595728548"},{url:"/_next/static/chunks/949-6341597cc4a453a0.js",revision:"6341597cc4a453a0"},{url:"/_next/static/chunks/964-4077fc2eeab22368.js",revision:"4077fc2eeab22368"},{url:"/_next/static/chunks/988-6cf6c144dba0a922.js",revision:"6cf6c144dba0a922"},{url:"/_next/static/chunks/ae51ba48-01187f522d66448a.js",revision:"01187f522d66448a"},{url:"/_next/static/chunks/c9184924-4d6450db75d886e6.js",revision:"4d6450db75d886e6"},{url:"/_next/static/chunks/d64684d8-6eedebd23d47667f.js",revision:"6eedebd23d47667f"},{url:"/_next/static/chunks/framework-89060607603ae9b9.js",revision:"89060607603ae9b9"},{url:"/_next/static/chunks/main-b9c4e9d15e492dee.js",revision:"b9c4e9d15e492dee"},{url:"/_next/static/chunks/pages/404-24736c5574b223b0.js",revision:"24736c5574b223b0"},{url:"/_next/static/chunks/pages/_app-1c154b2b20d2e63b.js",revision:"1c154b2b20d2e63b"},{url:"/_next/static/chunks/pages/_error-3ee352f08633342a.js",revision:"3ee352f08633342a"},{url:"/_next/static/chunks/pages/_offline-63f86af05c75b31e.js",revision:"63f86af05c75b31e"},{url:"/_next/static/chunks/pages/about-us-b33108a49dde231a.js",revision:"b33108a49dde231a"},{url:"/_next/static/chunks/pages/checkout-fdf9831fb133c847.js",revision:"fdf9831fb133c847"},{url:"/_next/static/chunks/pages/contact-us-f2d844fdb63fbfdb.js",revision:"f2d844fdb63fbfdb"},{url:"/_next/static/chunks/pages/faq-88ce180a8edc641f.js",revision:"88ce180a8edc641f"},{url:"/_next/static/chunks/pages/index-191be3e6d5f3c95e.js",revision:"191be3e6d5f3c95e"},{url:"/_next/static/chunks/pages/offer-45b1849ac8299085.js",revision:"45b1849ac8299085"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-762a70a48c0cd239.js",revision:"762a70a48c0cd239"},{url:"/_next/static/chunks/pages/privacy-policy-f39ece1965deddc4.js",revision:"f39ece1965deddc4"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-5d210b1ac24f9c0b.js",revision:"5d210b1ac24f9c0b"},{url:"/_next/static/chunks/pages/search-494ec6a5075f440f.js",revision:"494ec6a5075f440f"},{url:"/_next/static/chunks/pages/terms-and-conditions-c600aab926891a3d.js",revision:"c600aab926891a3d"},{url:"/_next/static/chunks/pages/user/change-password-353f01375688f9ae.js",revision:"353f01375688f9ae"},{url:"/_next/static/chunks/pages/user/dashboard-348cc5cde3c0aba9.js",revision:"348cc5cde3c0aba9"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-3c9a2f30d208380c.js",revision:"3c9a2f30d208380c"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-14512cb938bc56dc.js",revision:"14512cb938bc56dc"},{url:"/_next/static/chunks/pages/user/my-orders-f44b86d510bb09ed.js",revision:"f44b86d510bb09ed"},{url:"/_next/static/chunks/pages/user/recent-order-bb286430c6e753b9.js",revision:"bb286430c6e753b9"},{url:"/_next/static/chunks/pages/user/update-profile-8490c306fca54651.js",revision:"8490c306fca54651"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fee995e1a0783169.js",revision:"fee995e1a0783169"},{url:"/_next/static/css/1e34fa0777299ec6.css",revision:"1e34fa0777299ec6"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/css/beea9d0f6ecbcb56.css",revision:"beea9d0f6ecbcb56"},{url:"/_next/static/css/c2c4e2b9bf1b95af.css",revision:"c2c4e2b9bf1b95af"},{url:"/_offline",revision:"PVGsDXiCYKzatpj_9svJ_"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"32c5ed694c417ba076b5cd74db11d7c2"},{url:"/app/mastercard-icon.svg",revision:"21647f839931b7521935954bf863bdf0"},{url:"/app/paypal-icon.svg",revision:"6d4f73e4f9ce8f769d07e942366d468c"},{url:"/app/play-store.svg",revision:"4ba2cf43bf481375ce44f849bfcfdc01"},{url:"/app/skrill-icon.svg",revision:"20348abebbee6cc29769d37d6722f552"},{url:"/app/visa-icon.svg",revision:"8649b4351c14c295496bd216852050f9"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/flags/de.svg",revision:"a491da9c1549a36b293a6a391739dfda"},{url:"/flags/us.svg",revision:"8886b28b10e3ec0756a9935a216d5bba"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/loader/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"5935965ef93ee2a9eab4a1240699bc5f"},{url:"/logo/logo-color.svg",revision:"594db8e1b73beb28d284239633f088fa"},{url:"/logo/logo-dark-2.svg",revision:"17926b07262d3a6e824f3db46f5f160e"},{url:"/logo/logo-dark.svg",revision:"5306f50a439b75e80118e1b676c3dace"},{url:"/logo/logo-light-2.svg",revision:"354ef36903f55272ed7ece2c72deefd5"},{url:"/logo/logo-light.svg",revision:"69a504b1fa06d98d0786eb744eca32bc"},{url:"/manifest.json",revision:"d134ac5cc053400ffe274723c322716d"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));