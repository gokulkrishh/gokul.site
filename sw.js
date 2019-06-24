/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-0665589c7ad9e13d13b3.js"
  },
  {
    "url": "app-9ff5014061901f2ff9a0.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-41124fb9bdfe8b71a3f6.js"
  },
  {
    "url": "index.html",
    "revision": "7713c3d4460c84e94eea6419a4c5d5da"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4e8f9a445032b1ca1dfaa5a183cc72ac"
  },
  {
    "url": "component---src-pages-index-js.b4094d2ea4653c398e71.css"
  },
  {
    "url": "0.7811cf059c6e082216d0.css"
  },
  {
    "url": "0-e79f585c619c01770148.js"
  },
  {
    "url": "9-4e14e9eaa6f96ed0e631.js"
  },
  {
    "url": "component---src-pages-index-js-928d4e8148898f11680f.js"
  },
  {
    "url": "static/d/70/path---index-6a9-tQOYyMuEuLOtPM67ar6tmP8fcB0.json",
    "revision": "d9e8329ff18dcefab21a1a7fbd74e192"
  },
  {
    "url": "component---src-pages-404-js.b4094d2ea4653c398e71.css"
  },
  {
    "url": "component---src-pages-404-js-5af4cac37f51baa5d0b9.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ad78f10033973d44fac1faa7d1341e36"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});