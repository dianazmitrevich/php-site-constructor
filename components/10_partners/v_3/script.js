document.addEventListener("DOMContentLoaded", () => {
    const slider = $(".main-partners .cards-3");
    const updateSlider = () => {
        let slidesToShow;
        const width = $(window).width();
        if (width < 576) {
            slidesToShow = 1;
        } else if (width < 1000) {
            slidesToShow = 2;
        } else {
            slidesToShow = 4;
        }
        slider.slick("slickSetOption", "slidesToShow", slidesToShow, true);
    };
    slider.slick({
        prevArrow:
            '<div class="partners__arrow partners__arrow-left"><div class="partners__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
        nextArrow:
            '<div class="partners__arrow partners__arrow-right"><div class="partners__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
    });
    updateSlider();
    $(window).on("resize", updateSlider);
});
