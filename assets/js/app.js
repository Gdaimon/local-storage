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
}
