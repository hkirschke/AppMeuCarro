self.addEventListener('install'), function(event)
{
    console.log('meucarro-sw instalado',event);
}

self.addEventListener('activate'), function(event)
{
    console.log('meucarro-sw ativo',event);
}