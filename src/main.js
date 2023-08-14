/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'firebase/app';
import { myFunction } from './lib/index.js';
import home from './home.js';
import login from './login.js';
import error from './error.js';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZcFUeT__RAymtnLG7k1RsQLb8I1UlRUI',
  authDomain: 'social-network-f2550.firebaseapp.com',
  projectId: 'social-network-f2550',
  storageBucket: 'social-network-f2550.appspot.com',
  messagingSenderId: '259171374910',
  appId: '1:259171374910:web:0c8a0b1b3999119268fe6f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

myFunction();
