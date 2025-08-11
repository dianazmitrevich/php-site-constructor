document.addEventListener("DOMContentLoaded", () => {
    function initReviewsSlick() {
        $(".main-reviews .cards-1").slick({
            prevArrow:
                '<div class="container reviews__arrow reviews__arrow-left"><div class="reviews__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
            nextArrow:
                '<div class="container reviews__arrow reviews__arrow-right"><div class="reviews__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
            dots: false,
            adaptiveHeight: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        swipe: true,
                        swipeToSlide: true,
                        variableWidth: true,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        document.querySelectorAll(".main-reviews").forEach((element) => {
            if (element.classList.contains("autoplay")) {
                $(".main-reviews.autoplay .cards-1").slick("slickSetOption", "autoplay", true, true);
            }
        });
    }

    initReviewsSlick();

    $(window)
        .on("resize", function () {
            var windowWidth = $(window).width();

            if (windowWidth < 768) {
                $(".main-reviews .cards-1").slick("slickSetOption", "arrows", false, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "swipe", true, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "swipeToSlide", true, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "variableWidth", true, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "slidesToScroll", 1, true);
            } else {
                $(".main-reviews .cards-1").slick("slickSetOption", "arrows", true, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "swipe", false, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "swipeToSlide", false, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "variableWidth", false, true);
                $(".main-reviews .cards-1").slick("slickSetOption", "slidesToScroll", 1, true);
            }
        })
        .trigger("resize");
});
