onload = () => {
    CarregaModelMockCarro();
    CarregaNomeTitular();

    document.querySelector('#btnMeuCarro').onclick = () => {
        CarregaModelMockCarro();
        ativa('tela1');
    };
  
    document.querySelector('#btnFatura').onclick = () => {
        CarregaModelMockFatura();
        ativa('tela2');
    };
  
    document.querySelector('#btnContrato').onclick = () => {
        CarregaModelMockContrato();
        ativa('tela3');
    }; 
};
  
const ativa = (comp) => {
    let listaDeTelas = document.querySelectorAll('body > .component');
    listaDeTelas.forEach((c) => c.classList.add('hidden'));
    document.querySelector('#' + comp).classList.remove('hidden');
};

function CarregaModelMockCarro() { 
    
    fetch('./models/meucarro.json').then(response => {
        return response.json();
    }).then(data => { 
        document.getElementById("idMarcaCarro").innerHTML = "Marca: " + data.Marca;
        document.getElementById("idModeloCarro").innerHTML = "Modelo: "+ data.Modelo;
        document.getElementById("idAnoCarro").innerHTML = "Ano: "+ data.Ano;
        document.getElementById("idNomCondutor").innerHTML = "Condutor Principal: " + data.CondutorPrincipal;
        document.getElementById("idImgCarro").src= data.ImagemCarro;
    }).catch(err => {
       console.log(err);
    }); 
};

async function getPorcentagemJuros() {
    let response = await fetch('./models/contrato.json')
    .then(res => {
        return res.json();
    }).catch(err => {
       console.log(err);
    });
    return response.JurosVencimento;
};

async function CarregaModelMockFatura() {
    let htmlFaturas = "";
    let porcJuros = await getPorcentagemJuros();
    
   
    fetch('./models/fatura.json').then(response => {
        return response.json();
    }).then(lstFatura => { 
        lstFatura.forEach(fatura => {
            let classStatusFatura = "bg-light text-dark";
            let statusFatura = "Em Aberto";
            let valorFatura = fatura.Valor;
            
            if(fatura.Status == 1 ){
                statusFatura = "Paga";
            };
    
            if(fatura.Status == 2) {
                statusFatura = "Em atraso";
                let valorDoJuros = valorFatura * (porcJuros/100);
                let valorComJuros = valorDoJuros + valorFatura;
                valorFatura = valorComJuros;
                classStatusFatura = "text-white bg-danger";
            };

            htmlFaturas += 
            "<div class='p-3 mb-2 " + classStatusFatura + " divRadius'>" +
                "<p id='idValorFatura' class='card-text'>Valor Fatura: " + valorFatura + "</p>" +
                "<p id='idMesFatura' class='card-text'>Mês Faturamento: " + fatura.MesReferencia + "</p>" +
                "<p id='idStatus' class='card-text'>Status Fatura:  " + statusFatura + "</p>" +
            "</div>";
        }); 
        
        document.getElementById("divFatura").innerHTML = htmlFaturas;
        
    }).catch(err => {
       console.log(err);
    });
};

function CarregaModelMockContrato() {

    fetch('./models/contrato.json').then(response => {
        return response.json();
    }).then(contrato => { 
        document.getElementById("idVencimentoContrato").innerHTML = "Vencimento do contrato: " + contrato.Vencimento;
        document.getElementById("idDiaVencimentoFatura").innerHTML = "Dia Vencimento Fatura: " + contrato.DiaVencimentoFatura;
        document.getElementById("idValorContrato").innerHTML = "Valor do aluguel contratado: " + contrato.Valor;
        document.getElementById("idJurosVencimento").innerHTML = "Juros vencimento da fatura: " + contrato.JurosVencimento;
        document.getElementById("idContratante").innerHTML = "Titular: " + contrato.Contratante;
    }).catch(err => {
       console.log(err);
    });
};

function CarregaNomeTitular() { 
    fetch('./models/contrato.json').then(response => {
        return response.json();
    }).then(contrato => {
        document.getElementById("lblOla").innerHTML = "Olá, " + contrato.Contratante;
    }).catch(err => {
       console.log(err);
    });
};
