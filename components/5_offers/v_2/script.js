document.addEventListener("DOMContentLoaded", () => {
    startOffersCountdown(".cards-2");

    let body = document.querySelector(".g-wrap");

    offersObserver.observe(body, {
        attributes: true,
    });
});

let offersObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
            let attributeValue = $(mutation.target).prop(mutation.attributeName);
            if (attributeValue.includes("v_container-1700") || attributeValue.includes("v_container-1500")) {
                let element = $(".main-offers .cards-2");
                if (element.length > 0 && !element[0].classList.contains("slick-initialized")) {
                    element.slick({
                        prevArrow:
                            '<div class="container offers__arrow offers__arrow-left"><div class="offers__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
                        nextArrow:
                            '<div class="container offers__arrow offers__arrow-right"><div class="offers__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
                        dots: false,
                        adaptiveHeight: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        responsive: [
                            {
                                breakpoint: 1400,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 1,
                                    arrows: false,
                                    variableWidth: true,
                                },
                            },
                        ],
                    });

                    element.on("afterChange", function (event, slick, currentSlide, nextSlide) {
                        startOffersCountdown(".cards-2");
                    });
                }
            } else if (attributeValue.includes("v_container-1348") || attributeValue.includes("v_container-1200")) {
                let element = $(".main-offers .cards-2");
                if (element.length > 0 && !element[0].classList.contains("slick-initialized")) {
                    element.slick({
                        prevArrow:
                            '<div class="container offers__arrow offers__arrow-left"><div class="offers__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
                        nextArrow:
                            '<div class="container offers__arrow offers__arrow-right"><div class="offers__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
                        dots: false,
                        adaptiveHeight: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        responsive: [
                            {
                                breakpoint: 1400,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 1,
                                    arrows: false,
                                    variableWidth: true,
                                },
                            },
                        ],
                    });

                    element.on("afterChange", function (event, slick, currentSlide, nextSlide) {
                        startOffersCountdown(".cards-2");
                    });
                }
            }
        }
    });
});
