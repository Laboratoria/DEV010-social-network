// Crear un elemento de sección
function about(navigateTo) {

  const section = document.createElement('section');
  section.className = 'container';


    
  // Función para crear un div con clase y texto opcional
  function createDivWithClass(className, textContent) {
    const div = document.createElement('div');
    div.className = className;
    div.textContent = textContent || '';
    return div;
  }
  
  // Función para crear un elemento de imagen con clase y fuente
  function createImgWithClass(className, src) {
    const img = document.createElement('img');
    img.className = className;
    img.alt = '';
    img.src = src;
    return img;
  }

    // Crear elementos hijos
    const returnDiv = createDivWithClass('return', 'REGRESAR');
    const reDiv = createDivWithClass('re', 'BIENVENID@ A  RE+');
    const misionDiv = createDivWithClass('mision', 'MISIÓN');
    const whatDiv = createDivWithClass('what', 'Creemos que cada pequeño esfuerzo suma, y a través de la educación, la inspiración y la colaboración, podemos hacer una diferencia significativa en la preservación de nuestro hogar.');
    const planetImg = createImgWithClass('planetImg', './assets/planet.png');
    const logoIconImg = createImgWithClass('logoIconImg', './assets/re+mini.png');
    const chevronHomeImg = createImgWithClass('chevronHomeImg', './assets/chevron.gif');

    chevronHomeImg.addEventListener('click', () => {
    navigateTo('/');
    });

    // Agregar elementos hijos a la sección
    section.append(returnDiv, reDiv, misionDiv, whatDiv, planetImg, logoIconImg, chevronHomeImg);
    return section;
}
    
  export default about;
  
