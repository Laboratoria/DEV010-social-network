import { signInAuth, signInAuthGoogle } from '../lib/auth';

function signIn(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  const labelPass = document.createElement('label');
  const inputPass = document.createElement('input');
  const buttonSignIn = document.createElement('button');
  const buttonSignInGoogle = document.createElement('button');

  title.textContent = 'Sign In';
  form.className = 'sign-in';

  labelEmail.innerHTML = 'Email: ';
  labelPass.innerHTML = 'Password: ';
  buttonReturn.textContent = 'Return to home';
  buttonSignIn.textContent = 'Sign In';
  buttonSignInGoogle.textContent = 'Sign In with Google';

  inputEmail.name = 'email';
  inputPass.name = 'pass';

  inputPass.placeholder = 'pass';
  inputEmail.placeholder = 'Write email';

  labelEmail.htmlFor = inputEmail.name;
  labelPass.htmlFor = inputPass.name;

  inputEmail.type = 'email';
  inputPass.type = 'password';
  buttonSignIn.type = 'submit';

  inputEmail.required = true;
  inputPass.required = true;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    signInAuth(inputEmail.value, inputPass.value);
  });

  buttonSignInGoogle.addEventListener('click', () => {
    signInAuthGoogle();
    // navigateTo('/');
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(labelEmail, inputEmail, labelPass, inputPass, buttonSignIn);
  section.append(title, form, buttonSignInGoogle, buttonReturn);

  return section;
}

export default signIn;
