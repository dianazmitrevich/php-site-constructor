document.addEventListener("DOMContentLoaded", () => {
    $(".main-banner .banner__slider").slick({
        prevArrow: '<div class="container slider__arrow slider__arrow-left"><div class="slider__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
        nextArrow: '<div class="container slider__arrow slider__arrow-right"><div class="slider__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
        dots: true,
        dotsClass: 'slider__dots',
        adaptiveHeight: true,
    });

    $(".main-banner .banner__slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
        let currentSlideObject = $(slick.$slides.get(currentSlide));
        let i = currentSlideObject.data("color") == "d" ? 0 : 1;
        toggleElement('global', 'head-dark', 'f', i);
    });
})