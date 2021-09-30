self.addEventListener('install'), function(event)
{
    console.log('meucarro-sw instalado',event);
}

self.addEventListener('activate'), function(event)
{
    console.log('meucarro-sw ativo',event);
}

self.addEventListener('fetch'), function (e) 
{
    console.log('sw: carregando', e.request.url);
    // e.respondWith(fecth('nomearquivo'));
}