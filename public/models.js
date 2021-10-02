function CarregaModelMockCarro() {

var jsonCarro = require('./models/meucarro.json');    
let carro = JSON.parse(jsonCarro)

document.getElementById("idMarcaCarro").innerHTML = carro.Marca;

    
}


function CarregaModelMockFatura() {

    let clienteTexto = '{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}'
    let cliente = JSON.parse(clienteTexto)
    
    document.getElementById("demo").innerHTML = cliente.nome + ", " + cliente.idade + ' - ' + cliente.cidade + '/' + cliente.estado
        
}


function CarregaModelMockContrato() {

    let clienteTexto = '{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}'
    let cliente = JSON.parse(clienteTexto)
    
    document.getElementById("demo").innerHTML = cliente.nome + ", " + cliente.idade + ' - ' + cliente.cidade + '/' + cliente.estado
        
}