function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonSignIn = document.createElement('button');
  const buttonSignUp = document.createElement('button');

  buttonSignIn.textContent = 'Sign In';
  buttonSignIn.addEventListener('click', () => {
    navigateTo('/signIn');
  });

  buttonSignUp.textContent = 'Sign Up';
  buttonSignUp.addEventListener('click', () => {
    navigateTo('/signUp');
  });

  title.textContent = 'Welcome to my project';

  section.append(title, buttonSignIn, buttonSignUp);
  return section;
}

export default home;
