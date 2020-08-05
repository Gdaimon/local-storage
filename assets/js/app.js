// Variables
const listaTweets = document.querySelector('#lista-tweets');

// Listener
eventListeners();
function eventListeners() {
  // Envio formulario
  document
    .querySelector('#formulario')
    .addEventListener('submit', agregarTweet);

  listaTweets.addEventListener('click', borrarTweet);

  document.addEventListener('DOMContentLoaded', cargarTweetsLocalStorage);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault();
  const textArea = document.querySelector('#tweet');
  const tweet = textArea.value.trim();
  adicionarItem(tweet);
  if (textArea) {
    agregarTweetLocalStorage(texto);
  }
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

function borrarTweet(e) {
  e.preventDefault(e);
  if (e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    setTimeout(() => {
      alert('Tweet eliminado...!');
    }, 200);
  }
}

function agregarTweetLocalStorage(texto) {
  let tweets = obtenerTweetLocalStorage();
  tweets.push(texto);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetLocalStorage() {
  if (!localStorage.getItem('tweets')) {
    return [];
  }
  return JSON.parse(localStorage.getItem('tweets'));
}

function cargarTweetsLocalStorage() {
  let tweets = obtenerTweetLocalStorage();
  if (Array.isArray(tweets) && tweets.length) {
    tweets.forEach((tweet) => adicionarItem(tweet));
  }
}
