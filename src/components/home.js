function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const slogan = document.createElement('p');
  const logo = document.createElement('img');
  const chevron = document.createElement('img');

  logo.src = './assets/re+.png';
  logo.alt = 'logo de re+';
  logo.className = 'logoIcon';
  chevron.src = './assets/chevron.png';
  chevron.alt = 'flecha hacia abajo';
  chevron.className = 'chevronIcon';
  button.textContent = 'ENTRAR';
  title.textContent = 'ACERCA DE';
  title.className = 'acercaDe';
  slogan.textContent = 'Conectando personas por un mundo más sostenible';
  slogan.className = 'slogan';

  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  section.append(logo);
  section.append(slogan);
  section.append(button);
  section.append(title);
  section.append(chevron);
  return section;
}

export default home;
