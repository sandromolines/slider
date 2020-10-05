# slider

Simple slider with 3 images and controls.

Example:
<img src="https://i.ibb.co/ZV1MFDY/slider.jpg" />

How to use:
Import: /css/slider.css, js/slider.js , the kit of fontawesome.

Edit the file slider.js to create a new Instance of Slider: new Slider(selectorId = 'slider'); the selectorId is the id of your slider in your HTML.

<div class="slider-container" id="slider">

Structure: 
- .slider-container
-- .slider-item
--- html content 
--- img
-- .slider-menu
--- .slider-menu-item
---- html content (add the onclick button)
-- html of prev and next
-- slider-bar ( status bar )

   d
