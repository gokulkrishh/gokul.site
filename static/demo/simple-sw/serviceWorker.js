//Cache polyfil to support cacheAPI in all browsers
importScripts('./cache-polyfill.js');

var staticCache = "my-static-files"; //Cache name

//Files to cache
var filesToCache = [
  "./",
  "./index.html",
  "./?page=1", //Query string are treated a different page
  "./images/G-Logo-128.png",
  "./css/main.css",
  "./js/main.js"
];

//Adding a eventlistener to install event
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCache)
    .then(function (cache) {
      return cache.addAll(filesToCache)
      .then(function() {
        console.log("Files are cached.");
      })
    })
  );
});

//After install, fetch event is triggered for every page request
self.addEventListener("fetch", function (event) {
	console.log("Request -->", event.request.url);

	//To tell browser to evaluate the result of event
	event.respondWith(
		caches.match(event.request) //To match current request with cached request it
		.then(function(response) {
			//If response found return it, else fetch again.
			return response || fetch(event.request);
		})
		.catch(function(error) {
			console.error("Error: ", error);
		})
  );
});

//Activate event will be triggered once after registering, also used to clean up caches
self.addEventListener("activate", function (event) {
  var cacheWhitelist = ['my-static-files'];

	event.waitUntil(
		caches.keys()
		.then(function (allCaches) {
			//Check all caches and delete old caches here
			allCaches.map(function (cacheName) {
				if (cacheWhitelist.indexOf(cacheName) === -1) {
					return caches.delete(cacheName);
				}
			});
		})
	);
});
