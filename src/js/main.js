"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector('.main__counter--js');
const add = document.querySelector('.main__button--add-js');
const remove = document.querySelector('.main__button--remove-js');

const key = new Date().toISOString().slice(0, 10);

if (localStorage.getItem(key) !== null) {
  counter.innerHTML = localStorage.getItem(key);
  let i;
  add.addEventListener('click', (e) => {
    i = localStorage.getItem(key);
    i++;
    localStorage.setItem(key, i);
    counter.innerHTML = localStorage.getItem(key);
  });
  remove.addEventListener('click', (e) => {
    i = localStorage.getItem(key);
    if (i > 0) {
      i--;
      localStorage.setItem(key, i);
      counter.innerHTML = localStorage.getItem(key);
    }
  });
} else {
  localStorage.setItem(key, 0);
  counter.innerHTML = localStorage.getItem(key);
  let i;
  add.addEventListener('click', (e) => {
    i = localStorage.getItem(key);
    i++;
    localStorage.setItem(key, i);
    counter.innerHTML = localStorage.getItem(key);
  });
  remove.addEventListener('click', (e) => {
    i = localStorage.getItem(key);
    if (i > 0) {
      i--;
      localStorage.setItem(key, i);
      counter.innerHTML = localStorage.getItem(key);
    }
  });
}
