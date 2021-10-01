const ativa = (comp) => {
    let listaDeTelas = document.querySelectorAll('body > .component');
    listaDeTelas.forEach((c) => c.classList.add('hidden'));
    document.querySelector('#' + comp).classList.remove('hidden');
  };