function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  button.textContent = 'Sign In';
  button.addEventListener('click', () => {
    navigateTo('/signIn');
  });

  title.textContent = 'Welcome to my project';

  section.append(title, button);
  return section;
}

export default home;
