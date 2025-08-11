document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector(".g-wrap");

    observer.observe(body, {
        attributes: true,
    });
});

observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
            let attributeValue = $(mutation.target).prop(mutation.attributeName);
            if (attributeValue.includes("v_container-1700") || attributeValue.includes("v_container-1500")) {
                let element = $(".main-news .news__cards");
                if (element.length > 0 && !element[0].classList.contains("slick-initialized")) {
                    element.slick({
                        arrows: false,
                        dots: false,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        swipeToSlide: false,
                        swipe: false,
                        responsive: [
                            {
                                breakpoint: 1348,
                                settings: {
                                    slidesToShow: 4,
                                },
                            },
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    variableWidth: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    swipeToSlide: true,
                                    swipe: true,
                                },
                            },
                        ],
                    });
                }
            } else if (attributeValue.includes("v_container-1348") || attributeValue.includes("v_container-1200")) {
                let element = $(".main-news .news__cards");
                if (element.length > 0 && !element[0].classList.contains("slick-initialized")) {
                    element.slick({
                        arrows: false,
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        swipeToSlide: false,
                        swipe: false,
                        responsive: [
                            {
                                breakpoint: 1348,
                                settings: {
                                    slidesToShow: 4,
                                },
                            },
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    variableWidth: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    swipeToSlide: true,
                                    swipe: true,
                                },
                            },
                        ],
                    });
                }
            }
        }
    });
});
