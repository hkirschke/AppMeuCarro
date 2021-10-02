onload = () => {
//   const t = JSON.parse(localStorage.getItem('tarefas')); 

  document.querySelector('.appName').onclick = () => {
    ativa('tela4');
  };

  document.querySelector('#btnFechaQRCode').onclick = () => {
    ativa('tela1');
  }

  document.querySelector('#btnAdic').onclick = () => {
    document.querySelector('#btnInc').disabled = true;
    ativa('tela2');
    document.querySelector('#inputNovaTarefa').focus();
  };

  document.querySelector('#btnCanc1').onclick = () => {
    document.querySelector('#inputNovaTarefa').value = '';
    ativa('tela1');
  };

  document.querySelector('#btnCanc2').onclick = () => {
    let campo = document.querySelector('#inputAlteraTarefa');
    campo.value = '';
    campo.removeAttribute('data-id');
    ativa('tela1');
  };
 
};
 

const ativa = (comp) => {
  let listaDeTelas = document.querySelectorAll('body > .component');
  listaDeTelas.forEach((c) => c.classList.add('hidden'));
  document.querySelector('#' + comp).classList.remove('hidden');
};
 
navigator.serviceWorker.register('./fivecar-sw.js');