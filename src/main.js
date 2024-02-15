/* import home from './components/home.js'; */
import login from './components/login.js';
import error from './components/error.js';
import recover from './components/recover.js';
// import reset from './components/resetPassword.js';
import newUser from './components/NewUserForm.js';
import preferences from './components/preferences.js';
import timeLine from './components/TimeLine.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: login },
  { path: '/error', component: error },
  { path: '/recover', component: recover },
  // { path: '/resetPassword', component: reset },
  { path: '/newUser', component: newUser },
  { path: '/preferences', component: preferences },
  { path: '/timeLine', component: timeLine },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path, // lo que mostrará la barra del navegador
      window.location.origin + route.path, // colectivescool + /laruta
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
