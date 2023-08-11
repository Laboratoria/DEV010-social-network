// import { signInUserAuth } from '../lib/auth';

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

  form.className = 'sign-in';
  labelEmail.innerHTML = 'Email: ';
  inputEmail.placeholder = 'Write email';
  labelPass.innerHTML = 'Password: ';
  inputEmail.name = 'email';
  inputPass.placeholder = 'pass';
  inputPass.name = 'pass';
  title.textContent = 'Sign In';
  buttonSignIn.textContent = 'Sign In';

  labelEmail.htmlFor = inputEmail.name;
  labelPass.htmlFor = inputPass.name;
  inputEmail.type = 'email';
  inputPass.type = 'password';
  buttonSignIn.type = 'submit';
  inputEmail.required = true;
  inputPass.required = true;

  /*
  buttonSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    signInUserAuth(inputEmail.value, inputPass.value)
      .then((credential) => {
        alert(`User has been created with the email ${inputEmail.value}`);
      })
      .then(() => {
        // console.log(auth.currentUser);
        // console.log(auth.currentUser.uid);
        // createUserStore(theEmail, thePassword);
      })
      .catch((err) => {
        // console.log(err.message.split('Firebase: ')[1]);
        console.log(err.message);
        alert(err.message.split('Firebase: ')[1]);
      });
  });
  */
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(labelEmail, inputEmail, labelPass, inputPass, buttonSignIn);
  section.append(title, form, buttonReturn);

  return section;
}

export default signIn;
