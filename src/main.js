// Este es el punto de entrada de tu aplicacion
import init from './components/init';
import home from './components/home';
import signIn from './components/signIn';
import signUp from './components/signUp';
import recoverPassword from './components/recoverPassword';
import error from './components/error';

const routes = [
  { path: '/', component: init },
  { path: '/signIn', component: signIn },
  { path: '/signUp', component: signUp },
  { path: '/recoverPassword', component: recoverPassword },
  { path: '/home', component: home },
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
    while (root.firstChild) {
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
