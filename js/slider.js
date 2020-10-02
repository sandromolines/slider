var slides = document.querySelectorAll('.slider-item');
var bar = document.querySelector('.slider-bar');
var currentSlide = 0;
var auto = true;
var autoTime = 3000;

function prevSlide() {
    currentSlide--;
    if(currentSlide < 0) currentSlide = slides.length - 1;
    hiddenSlides();
    showSlide();
    clearInterval(autoPlay);
    bar.style = 'display: none';
}

function nextSlide() {
    currentSlide++;
    if(currentSlide == slides.length) currentSlide = 0;
    hiddenSlides();
    showSlide();
    clearInterval(autoPlay);
    bar.style = 'display: none';
}

function hiddenSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('show');
    })
}

function showSlide() {
    slides[currentSlide].classList.add('show');
}

function clickShowSlide(selectSlide) {
    hiddenSlides();
    slides[selectSlide].classList.add('show');
}

function barStatus() {
    var widthBar = 1;
    var idBar = setInterval(frame, 20);
    function frame() {
        document.getElementById('slider').addEventListener('click', function() {
            clearInterval(idBar);
        });

        if(widthBar >= 100) {
            clearInterval(idBar);
        } else {
            widthBar++;
            bar.style.width = widthBar + '%';
        }
    }
}

if(auto) {
    var autoPlay = setInterval(() => {
        (currentSlide == slides.length - 1) ? currentSlide = 0 : currentSlide++;
        hiddenSlides();
        slides[currentSlide].classList.add('show');
        barStatus();
    }, autoTime);
}

document.getElementById('slider').addEventListener('click', function() {
    clearInterval(autoPlay);
});
    
hiddenSlides();
showSlide();
barStatus();
