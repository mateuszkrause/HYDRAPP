"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector('.main__counter--js');
let counterValue = 0;
const add = document.querySelector('.main__button--add-js');
const remove = document.querySelector('.main__button--remove-js');

add.addEventListener('click', (e) => {
    counterValue++;
  counter.innerHTML = counterValue;
})
remove.addEventListener('click', (e) => {
  if (counterValue > 0) {
    counterValue--;
  }
  counter.innerHTML = counterValue;
})
