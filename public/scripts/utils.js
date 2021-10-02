const ativa = (comp) => {
    let listaDeTelas = document.querySelectorAll('body > .component');
    listaDeTelas.forEach((c) => c.classList.add('hidden'));
    document.querySelector('#' + comp).classList.remove('hidden');
  };

  
  function resizeImg(){
    // DIMENSÕES PADRÕES
    var defaultIMG = {
        w : 360,
        h : 640
    }

    // PEGA O TAMANHO DA TELA (NESSE CASO content_window)
    var w = document.querySelector('.content_window').offsetWidth;
    // VERIFICA QUAL O TAMANHO MENOS, O DA IMAGEM OU O DA TELA
    var width = (defaultIMG.w > w) ? w : defaultIMG.w;

    // PROPORÇÃO ENTRE ATUAL E ORIGINAL
    var p = width / defaultIMG.w;

    // DEFINE AS DIMENSÕES DA IMAGEM
    var size = {
        w : width,
        h : defaultIMG.h * p
    }

    // DEFINE O TAMANHO NO background
    var bg = document.querySelector('.apresentation .background');
    bg.style.width = size.w+'px';
    bg.style.height = size.h+'px';
}
window.onload = function(){
    resizeImg();
}

  // $().button('toggle')