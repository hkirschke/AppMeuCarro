onload = () => {
//   const t = JSON.parse(localStorage.getItem('tarefas')); 

  document.querySelector('#btnMeuCarro').onclick = () => {
    ativa('tela1');
  }

  document.querySelector('#btnFatura').onclick = () => {
    ativa('tela2');
  }

  document.querySelector('#btnContrato').onclick = () => {
    ativa('tela3');
  } 
};
 

const ativa = (comp) => {
  let listaDeTelas = document.querySelectorAll('body > .component');
  listaDeTelas.forEach((c) => c.classList.add('hidden'));
  document.querySelector('#' + comp).classList.remove('hidden');
};
 
navigator.serviceWorker.register('./fivecar-sw.js');