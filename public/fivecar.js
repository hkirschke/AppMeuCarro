
  document.querySelector('#btnAdic').onclick = () => {
    document.querySelector('#btnInc').disabled = true;
    ativa('tela2');
    document.querySelector('#inputNovaTarefa').focus();
  };
