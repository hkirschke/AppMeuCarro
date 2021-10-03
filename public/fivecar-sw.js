self.addEventListener('install', event => {
  self.skipWaiting(); 
  console.log('SW instalado e ativo');
});

self.addEventListener('activate', event => {
  console.log('Pronto para realizar fetch!');
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
      fetch(e.request)
      .then( function (resp) {
        if(resp.ok){
          console.log("Fetch com sucesso");
          return resp;
        } 
        return new Response("Erro ao realizar fetch");
      })
    );
});
