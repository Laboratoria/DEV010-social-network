// function home(navigateTo) {
//   const section = document.createElement('section');
//   const title = document.createElement('h2');
//   const buttonSignIn = document.createElement('button');
//   const buttonSignUp = document.createElement('button');

//   buttonSignIn.textContent = 'Sign In';
//   buttonSignIn.addEventListener('click', () => {
//     navigateTo('/signIn');
//   });

//   buttonSignUp.textContent = 'Sign Up';
//   buttonSignUp.addEventListener('click', () => {
//     navigateTo('/signUp');
//   });

//   title.textContent = 'Welcome to my project';

//   section.append(title, buttonSignIn, buttonSignUp);
//   return section;
// }

// export default home;

function home(navigateTo) {
  const section = document.createElement('seaction');
  const carrusel = document.createElement('aside');
  const title = document.createElement('h2');
  const post = document.createElement('section');
  const commits = document.createElement('section');
  const nav = document.createElement('nav');
  const buttonPreview = document.createElement('button');
  const buttonNext = document.createElement('button');

  title.innerHTML = 'Welcome to Electro-Net<br><p>News</p><br><p>Post</p><br><p>Commits</p><br><p>Nav</p>';
  carrusel.className = 'carrusel';
  /*
// Obtén los elementos del carrusel
const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.carrusel img');

// Configura el contador y la imagen inicial
let contador = 0;
imagenes[contador].style.display = 'block';

// Agrega eventos para avanzar y retroceder en las imágenes
document.querySelector('.siguiente').addEventListener('click', () => {
  imagenes[contador].style.display = 'none';
  contador++;
  if (contador >= imagenes.length) {
    contador = 0;
  }
  imagenes[contador].style.display = 'block';
});

document.querySelector('.anterior').addEventListener('click', () => {
  imagenes[contador].style.display = 'none';
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  imagenes[contador].style.display = 'block';
});
*/

  /*
<div class="carrusel">
  <img src="imagen1.jpg" alt="Imagen 1">
  <img src="imagen2.jpg" alt="Imagen 2">
  <img src="imagen3.jpg" alt="Imagen 3">
</div>

<button class="anterior">Anterior</button>
<button class="siguiente">Siguiente</button>
*/

  // const img = document.createElement('img');
  // img.src = '';
  // img.alt = '';
  // carrusel.append(img);
  buttonPreview.textContent = 'Previous';
  buttonNext.textContent = 'Next';
  carrusel.append(buttonPreview, buttonNext);

  section.append(title, carrusel, post, commits, nav);
  return section;
}

export default home;
