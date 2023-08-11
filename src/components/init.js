function init(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonStart = document.createElement('button');
  // const buttonSignUp = document.createElement('button');

  buttonStart.textContent = 'Let\'s start';
  buttonStart.addEventListener('click', () => {
    navigateTo('/signIn');
  });

  title.textContent = 'Welcome to my project';

  section.append(title, buttonStart);
  return section;
}

export default init;
