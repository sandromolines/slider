class Slider { 

    slideId = document.getElementById(selectorId);
    slides = this.slideId.querySelectorAll('.slider-item');
    bar = this.slideId.querySelector('.slider-bar');
    currentSlide = 0;

    constructor(selectorId = 'slider', auto = true, autoTime = 3000) {
        this.selectorId = selectorId;
        this.auto = auto;
        this.autoTime = autoTime;

        this.hiddenSlides();
        this.showSlide();
        if(this.auto) this.barStatus();
        this.autoPlay(this.auto);
        this.clickToStop();
    }

    prevSlide() {
        this.currentSlide--;
        if(this.currentSlide < 0) this.currentSlide = this.slides.length - 1;
        this.hiddenSlides();
        this.showSlide();
        this.auto = false;
        this.bar.style = 'display: none';
    }

    nextSlide() {
        this.currentSlide++;
        if(this.currentSlide == this.slides.length) this.currentSlide = 0;
        this.hiddenSlides();
        this.showSlide();
        this.auto = false;
        this.bar.style = 'display: none';
    }

    hiddenSlides() {
        this.slides.forEach((slide) => {
            slide.classList.remove('show');
        })
    }

    showSlide() {
        this.slides[this.currentSlide].classList.add('show');
    }

    clickShowSlide(selectSlide) {
        this.hiddenSlides();
        this.slides[selectSlide].classList.add('show');
    }

    barStatus() {
        var widthBar = 1;
        var idBar = setInterval(() => {
                if(widthBar >= 100) clearInterval(idBar)
                else {
                    widthBar++;
                    this.bar.style.width = widthBar + '%';
                }
            }, (this.autoTime / 100));
        
        this.slideId.addEventListener('click', function() {
            clearInterval(idBar);
        });
    }

    
    clickToStop() {
        this.slideId.addEventListener('click', () => {
            this.auto = false;
        });
    }
    

    autoPlayFunction() {
        if(this.auto) {
            (this.currentSlide == this.slides.length - 1) ? this.currentSlide = 0 : this.currentSlide++;
            this.hiddenSlides();
            this.slides[this.currentSlide].classList.add('show');
            this.barStatus();
        } else {
            this.autoPlay();
        }
    }

    autoPlay() {
        var play = setInterval(() => this.autoPlayFunction(), this.autoTime);
        if(!this.auto) {
            clearInterval(play);
        } 
    }
    
        
}