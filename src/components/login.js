// import { sigInWithGoogle, loginUser } from '../lib/index.js';
import { sigInWithGoogle } from '../lib/index.js';

function login(navigateTo) {
  function createImgWithClass(className, src) {
    const img = document.createElement('img');
    img.className = className;
    img.alt = '';
    img.src = src;
    return img;
  }

  function createDivWithClass(className, textContent) {
    const div = document.createElement('div');
    div.className = className;
    div.textContent = textContent || '';
    return div;
  }

  function createButtonWithClass(className) {
    const button = document.createElement('button');
    button.className = className;
    button.textContent = '';
    return button;
  }

  const section = document.createElement('section');
  section.className = 'login';

  const loginDiv = createDivWithClass('forget', '¿Olvidaste tu contraseña?');
  // const registerDiv = createDivWithClass('new', '¿Nuevo? Regístrate aquí.');
  const loginInnerDiv = createDivWithClass('loginInner');
  const orangeButtonDiv = createDivWithClass('orangeButton');
  const entrarDiv = createDivWithClass('entrar', 'ENTRAR');
  const buttonGoogleLogin = createButtonWithClass('googleloginIcon');
  const buttonReturn = createImgWithClass('home-03-icon', './assets/home-03.png');

  // Incorporaciones de Isa
  buttonReturn.textContent = 'Regresar';
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input', 'inputPass');
  const registerButton = document.createElement('button');
  //   const buttonLoginUser = document.createElement('button');

  inputEmail.placeholder = 'Write email';
  inputEmail.className = 'inputEmail';
  inputPass.placeholder = 'pass';
  inputPass.className = 'inputPass';

  buttonGoogleLogin.textContent = 'google';
  registerButton.textContent = '¿Nuevo? Regístrate aquí.';
  registerButton.className = 'registerButton';
  // buttonLoginUser.textContent = 'Login';

  buttonGoogleLogin.addEventListener('click', sigInWithGoogle);
  registerButton.addEventListener('click', () => {
    navigateTo('/registrar');
  });

  //   buttonLoginUser.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     const email = inputEmail.value;
  //     const password = inputPass.value;
  //     loginUser(email, password);
  //   });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const logoIconImg = createImgWithClass('logoIcon', './assets/re+mini.png');
  const keyIconImg = createImgWithClass('key-01-icon', './assets/key-01.png');
  const userPlusIconImg = createImgWithClass('user-plus-01-icon', './assets/user-plus-01.png');

  // Append elements to the section
  section.appendChild(loginDiv);
  section.appendChild(loginInnerDiv);
  section.appendChild(orangeButtonDiv);// Y si lo dejamos como el otro button?
  section.appendChild(registerButton);
  orangeButtonDiv.appendChild(entrarDiv);
  section.appendChild(buttonGoogleLogin);
  section.appendChild(buttonReturn);
  section.appendChild(logoIconImg);
  section.appendChild(keyIconImg);
  section.appendChild(userPlusIconImg);

  //   Así están ordenadas antes del return y export por Isa
  form.append(inputEmail, inputPass);
  section.append(form);
  //   section.append(form, buttonReturn, registrarButton, buttonLogin);

  //   // title.textContent = 'Login';
  //   buttonReturn.textContent = 'ENTRAR';
  //   newLogin.textContent = '¿Nuev@? Regístrate aquí.';
  //   newLogin.className = 'newLogin';
  //   forgotPassword.textContent = '¿Olvidaste tu contraseña?';
  //   forgotPassword.className = 'forgotPassword';

  //   // button.textContent = 'Return to home';
  //   buttonReturn.addEventListener('click', () => {
  //     navigateTo('/');
  //   });

  //   buttonLoginUser.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     const email = inputEmail.value;
  //     const password = inputPass.value;
  //     loginUser(email, password);
  //   });

  //   section.append(logoLogin, googleLogin);
  //   form.append(inputEmail, inputPass, buttonLoginUser);
  //   section.append(form, buttonReturn, registrarButton, buttonLogin);
  //   section.append(newLogin);
  //   section.append(forgotPassword);

  return section;
}

export default login;
