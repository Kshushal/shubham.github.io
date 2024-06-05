'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/skwasm.js.symbols": "b349d46f4e859adcd7b2b2d5cc112ff0",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "52028edbd1c3b9ed9878e4da6a51705b",
"canvaskit/chromium/canvaskit.wasm": "496d052d450e406023a31933485080e7",
"canvaskit/canvaskit.js.symbols": "ee385d39fbe380a8209fa659edea298c",
"canvaskit/canvaskit.wasm": "40ce46c90c9907684bd5d9fb13820601",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "c86180064ba6f16918b628c0460a17a5",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "009c9e65172e010890f7f65fde438006",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "3bb121124423280f53682f920f17a029",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "855c01efac13d615498ceb6a022d4429",
"assets/AssetManifest.bin": "93364ca9953cf409212d2cc5412e9716",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "bee244e59c75ecc1fb321fee8486d32a",
"assets/assets/images/wl.png": "9c98733b0faadbef33e0ccaea2b40d15",
"assets/assets/images/wp.jpg": "b2ecf9966b886e461228d05f51d24c1c",
"assets/assets/images/css.png": "901452b1808e80fd6d93bc6b1874629c",
"assets/assets/images/dartlogo.png": "ec6441301e108fbf054a895d1dd733a2",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/post1.png": "e407d249c4872c3507bae0c1f84b0a3b",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/python.png": "f2e790d8fdd08714540f18a52a50e48f",
"assets/assets/images/fire.png": "1468d978f274877f0c405c48fcc97c1b",
"assets/assets/images/nxt.png": "ec093b37c815ff0b5516ccc025553f89",
"assets/assets/images/bootstrap.png": "c4cc7030e1b49872baaa109e4982ee0e",
"assets/assets/images/dart.svg": "813b75ff49516ff4ee880f80110a8105",
"assets/assets/images/android.png": "4f917f91ac87a78d2f1643b996db3d4b",
"assets/assets/images/desktop.png": "419c3fc2970935258daee98e21bd4d63",
"assets/assets/images/Flutter.png": "e31f1c20d27c4415bce49ca10cc44ba1",
"assets/assets/images/html.png": "7f0083dfa4b30bee0ed1822c13d9c5cd",
"assets/assets/images/web.png": "7a2b2b33e318d1a2e3e9442f12b89ca0",
"assets/assets/images/notification.jpg": "956891c079ab0f6bbdb8d0e79f8c0ba1",
"assets/assets/images/telegram.png": "1326be1d8edb12a4b15416b2455e100c",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/ios.png": "3f154aa76de6e132c02bed76752cd5fb",
"assets/assets/images/js.png": "36f5949a45cf7e373c02796443249fcb",
"assets/assets/images/nisha.jpg": "b9c24d2d9d82145859f14e2773fabf26",
"assets/assets/images/insta.jpg": "68b4d252cfee68e4c725958d48feb106",
"assets/assets/images/reactjs.png": "d96d4ab96b1d89388dd73c1cce67d829",
"assets/assets/images/s_img.png": "03502a08a7e16dfee9394190f4d44769",
"assets/assets/images/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/senlogo.png": "e3f65bbf6e008170eb0d2adb0d015cff",
"assets/AssetManifest.json": "2a49e77aa740372b1c4e241d15776312",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "f00ae07c622e8f6a48426a2812179c05",
"index.html": "e91ae1c7be51ebf7e0626a0fd382ebcd",
"/": "e91ae1c7be51ebf7e0626a0fd382ebcd",
"flutter_bootstrap.js": "aaac820061c164f5236558796d213b91"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
