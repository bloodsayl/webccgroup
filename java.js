/*let slideIndex = 0;
const slides = document.getElementsByClassName('banner-slide');

function mostrarBanner() {
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
}
slideIndex++;
if (slideIndex > slides.length) {
    slideIndex = 1;
}
slides[slideIndex - 1].style.display = 'block';
  setTimeout(mostrarBanner, 4000); // Cambio cada 4 segundos (4000 milisegundos)
}

mostrarBanner();*/
function slidesbutons(){
let slideIndex = 0;
const slides = document.getElementsByClassName('banner-slide');
let timeoutId = null;

function mostrarBanner() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    // Guarda el ID del timeout para poder cancelarlo más tarde
    timeoutId = setTimeout(mostrarBanner, 4000); // Cambio cada 4 segundos (4000 milisegundos)
}

// Funciones para manejar los clics en los botones
function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    clearTimeout(timeoutId);
    mostrarBanner();
}

function nextSlide() {
    clearTimeout(timeoutId);
    mostrarBanner();
}

// Agrega los controladores de eventos a los botones
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

mostrarBanner();

}