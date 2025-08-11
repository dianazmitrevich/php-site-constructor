document.addEventListener("DOMContentLoaded", () => {
    function initSlick() {
        $(".main-employees .employees__list").slick({
            arrows: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: false,
            swipe: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true,
                        swipe: true,
                        swipeToSlide: true,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        swipe: true,
                        swipeToSlide: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true,
                        swipe: true,
                        swipeToSlide: true,
                    },
                },
            ],
        });
    }

    initSlick();

    $(window)
        .on("resize", function () {
            var windowWidth = $(window).width();

            if (windowWidth < 600) {
                $(".main-employees .employees__list").slick("slickSetOption", "slidesToShow", 1, true);
                $(".main-employees .employees__list").slick("slickSetOption", "centerMode", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "variableWidth", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipe", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipeToSlide", true, true);
            } else if (windowWidth < 1000) {
                $(".main-employees .employees__list").slick("slickSetOption", "slidesToShow", 1, true);
                $(".main-employees .employees__list").slick("slickSetOption", "centerMode", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipe", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipeToSlide", true, true);
            } else if (windowWidth < 1200) {
                $(".main-employees .employees__list").slick("slickSetOption", "slidesToShow", 3, true);
                $(".main-employees .employees__list").slick("slickSetOption", "centerMode", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipe", true, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipeToSlide", true, true);
            } else {
                $(".main-employees .employees__list").slick("slickSetOption", "slidesToShow", 4, true);
                $(".main-employees .employees__list").slick("slickSetOption", "centerMode", false, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipe", false, true);
                $(".main-employees .employees__list").slick("slickSetOption", "swipeToSlide", false, true);
            }
        })
        .trigger("resize");
});
