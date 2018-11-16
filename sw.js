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
    "url": "webpack-runtime-0388db473fb126e36054.js"
  },
  {
    "url": "app-5f3bb003656c9d6dcd84.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7a07ab576da0254c9c3d.js"
  },
  {
    "url": "index.html",
    "revision": "0a7954158fa8fa373f1de273cd961407"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cb1dadefe8e757fc2199284af9791e51"
  },
  {
    "url": "0.4445c633af446701f2f6.css"
  },
  {
    "url": "component---src-pages-index-js.b4094d2ea4653c398e71.css"
  },
  {
    "url": "component---src-pages-index-js-905013664769181956f1.js"
  },
  {
    "url": "9-7be572679dc8d88d5b0f.js"
  },
  {
    "url": "0-090e0ae2848e8e3525d6.js"
  },
  {
    "url": "static/d/327/path---index-6a9-mfpZ19pqO3ZPOGMfez1kIOktZ88.json",
    "revision": "b6163c2caebdecf2fcfe1d3d6f415901"
  },
  {
    "url": "component---src-pages-404-js.b4094d2ea4653c398e71.css"
  },
  {
    "url": "component---src-pages-404-js-f0b251b8f561a08ad168.js"
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