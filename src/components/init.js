function init(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const buttonStart = document.createElement('button');
  // const buttonSignUp = document.createElement('button');

  section.className = 'init';

  buttonStart.textContent = 'Go';
  buttonStart.classList = 'go pulse';
  buttonStart.addEventListener('click', () => {
    navigateTo('/signIn');
  });

  title.textContent = 'Title';

  section.append(buttonStart, title);
  return section;
}

export default init;
