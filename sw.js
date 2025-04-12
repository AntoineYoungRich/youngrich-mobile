self.addEventListener('install', function(event) {
  console.log('Young Rich installé en cache (offline)');
});

self.addEventListener('fetch', function(event) {
  // Pour l'instant on laisse les requêtes passer sans interception
});
