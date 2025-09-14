let currentSlide=1;const totalSlides=10;
function goToSlide(n){currentSlide=n;update();}
function update(){document.querySelectorAll('.slide').forEach(s=>s.classList.remove('active'));
document.querySelector(`[data-slide="${currentSlide}"]`).classList.add('active');
document.getElementById('slideCounter').textContent=`${currentSlide} / ${totalSlides}`;}
document.getElementById('prevBtn').onclick=()=>{if(currentSlide>1)goToSlide(currentSlide-1);}
document.getElementById('nextBtn').onclick=()=>{if(currentSlide<totalSlides)goToSlide(currentSlide+1);}
update();