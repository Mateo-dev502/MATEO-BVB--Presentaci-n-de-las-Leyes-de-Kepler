let currentSlide = 1;
const totalSlides = 10;

function goToSlide(n) {
  currentSlide = n;
  update();
}

function update() {
  // desactivar todos los slides
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

  // activar la diapositiva actual SI existe
  const activeSlide = document.querySelector(`[data-slide="${currentSlide}"]`);
  if (activeSlide) {
    activeSlide.classList.add('active');
  }

  // actualizar contador
  document.getElementById('slideCounter').textContent = `${currentSlide} / ${totalSlides}`;

  // actualizar barra de progreso
  document.getElementById('progressFill').style.width = `${(currentSlide / totalSlides) * 100}%`;

  // actualizar los puntitos
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  const activeDot = document.querySelector(`.dot[data-slide="${currentSlide}"]`);
  if (activeDot) {
    activeDot.classList.add('active');
  }
}

// botones anterior y siguiente
document.getElementById('prevBtn').onclick = () => {
  if (currentSlide > 1) goToSlide(currentSlide - 1);
};
document.getElementById('nextBtn').onclick = () => {
  if (currentSlide < totalSlides) goToSlide(currentSlide + 1);
};

// navegación con dots
document.querySelectorAll('.dot').forEach(dot => {
  dot.onclick = () => goToSlide(parseInt(dot.dataset.slide));
});

// iniciar
update();
