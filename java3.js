
function setproducts(){
let mobileSlideIndex = 0;
const mobileSlides = document.querySelectorAll('.producto2');

function mostrarSiguienteSlide() {
  mobileSlides[mobileSlideIndex].style.display = 'none'; // Oculta el slide actual

  mobileSlideIndex++;
  if (mobileSlideIndex >= mobileSlides.length) {
    mobileSlideIndex = 0; // Reinicia el índice al llegar al final
  }

  mobileSlides[mobileSlideIndex].style.display = 'block'; // Muestra el siguiente slide
}

setInterval(mostrarSiguienteSlide, 3000);}