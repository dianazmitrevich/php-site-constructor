document.addEventListener("DOMContentLoaded", () => {
    startOffersCountdown(".cards-1");

    function initSlider() {
        $(".main-offers .cards-1").slick({
            prevArrow:
                '<div class="container offers__arrow offers__arrow-left"><div class="offers__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
            nextArrow:
                '<div class="container offers__arrow offers__arrow-right"><div class="offers__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
            dots: false,
            adaptiveHeight: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            swipeToSlide: true,
            centerMode: true,
        });

        $(".main-offers .cards-1").on("afterChange", function (event, slick, currentSlide, nextSlide) {
            startOffersCountdown(".cards-1");
        });
    }

    if (document.querySelector(".offers__wrapper").offsetWidth >= 568) {
        initSlider();
    }

    window.addEventListener("resize", () => {
        if (document.querySelector(".offers__wrapper").offsetWidth < 568) {
            if ($(".main-offers .cards-1").hasClass("slick-initialized")) {
                $(".main-offers .cards-1").slick("unslick");
            }
        } else {
            if (!$(".main-offers .cards-1").hasClass("slick-initialized")) {
                initSlider();
            }
        }
    });
});
