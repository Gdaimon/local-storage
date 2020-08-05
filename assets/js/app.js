// Variables
const listaTweets = document.querySelector('#lista-tweets');

// Listener
eventListeners();
function eventListeners() {
  // Envio formulario
  document
    .querySelector('#formulario')
    .addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault(e);
  const textArea = document.querySelector('#tweet');
  const tweet = textArea.value.trim();
  adicionarItem(tweet);
  textArea.value = '';
}

function adicionarItem(texto) {
  if (texto) {
    const item = document.createElement('li');
    const botonBorrar = document.createElement('a');
    botonBorrar.textContent = 'X';
    botonBorrar.className = 'borrar-tweet';
    item.textContent = texto;
    item.appendChild(botonBorrar);
    listaTweets.appendChild(item);
  }
}
