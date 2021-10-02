function CarregaModelMockCarro() {

    var jsonCarro = require('./models/meucarro.json');    
    let carro = JSON.parse(jsonCarro)

    document.getElementById("idMarcaCarro").innerHTML = carro.Marca;
    document.getElementById("idMarcaCarro").idModeloCarro = carro.Modelo;
    document.getElementById("idNomCondutor").innerHTML = "Condutor Principal: " + carro.CondutorPrincipal;
    document.getElementById("idImgCarro").src= carro.ImagemCarro;
}

function CarregaModelMockFatura() {

    let jsonFatura = require('./models/fatura.json'); 
    let lstFatura = JSON.parse(jsonFatura)
    let htmlFaturas = "";

    for (var fatura in lstFatura) {
        let faturaObj = JSON.parse(fatura);
        let statusFatura = "Em Aberto";

        if(faturaObj.Status == 1 ){
            statusFatura = "Paga"
        }

        if(faturaObj.Status == 2){
            statusFatura = "Em atraso"
        } 

        htmlFaturas += 
        "<div class='p-3 mb-2 bg-light text-dark divRadius'>" +
            "<p id='idValorFatura' class='card-text'>" + faturaObj.Valor + "</p>" +
            "<p id='idMesFatura' class='card-text'>" + faturaObj.MesReferencia + "</p>" +
            "<p id='idStatus' class='card-text'>" + statusFatura + "</p>" +
        "</div>";
    }
    
    document.getElementById("divFatura").innerHTML = htmlFaturas;
}

function CarregaModelMockContrato() {

    var jsonContrato = require('./models/contrato.json');    
    let contrato = JSON.parse(jsonContrato)

    document.getElementById("idVencimentoContrato").innerHTML = contrato.Vencimento;
    document.getElementById("idDiaVencimentoFatura").idModeloCarro = contrato.DiaVencimentoFatura;
    document.getElementById("idValorContrato").innerHTML = contrato.Valor;
    document.getElementById("idJurosVencimento").innerHTML =  contrato.JurosVencimento;
    document.getElementById("idContratante").innerHTML = "Titular: " + contrato.Contratante;
}