# slider

Simple slider with 3 images and controls.

Example:
<img src="https://i.ibb.co/ZV1MFDY/slider.jpg" />

How to use:
Import: /css/slider.css, js/slider.js , the kit of fontawesome.

Scruture of HTML:
```html
<div class="slider-container" id="#">
  <div class="slider-content">
    <a href="">Content</a>
    <img src="imgs/img-1.jpg" />
  </div>
  <div class="slider-menu">
    <div class="slider-menu-item">
        <a href="javascript:void();" onclick="slider.clickShowSlide(0);">
            <p>Content</p>
        </a>
    </div>
    <span class="prev" onclick="slider.prevSlide();"><i class="fas fa-arrow-left"></i></span>
    <span class="next" onclick="slider.nextSlide();"><i class="fas fa-arrow-right"></i></span>
    <div class="slider-bar"></div>
  </div>  
</div>
```

Config to init: 'id of your slider', autoplay?, time to transition in ms to autoplay
```js
slider = new Slider(selectorId = 'slider', true, 5000);
```
