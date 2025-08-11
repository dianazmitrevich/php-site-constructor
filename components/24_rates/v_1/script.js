document.addEventListener("DOMContentLoaded", () => {
    function initSlider() {
        let slidesToShowSetting = 4;

        if (document.querySelector(".inner-page-block")) {
            slidesToShowSetting = 3;
        }

        const updateSlider = (slider) => {
            let slidesToShow;
            const width = $(window).width();
            if (width < 1200) {
                slidesToShow = 3;
            } else if (width < 900) {
                slidesToShow = 2;
            } else {
                slidesToShow = 4;
            }

            if (width > 568) {
                slider.slick("slickSetOption", "slidesToShow", slidesToShow, true);
            } else {
                slider.slick("unslick");
            }

            resizeRateBlocks();
        };

        $(".main-rates .cards-1").slick({
            prevArrow:
                '<div class="container rates__arrow rates__arrow-left"><div class="rates__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1665 8.75L2.33317 5L6.1665 1.16667L4.99984 0L-0.000162089 5L4.99984 10L6.1665 8.75Z" fill="#C2C2C2" /></svg></div></div>',
            nextArrow:
                '<div class="container rates__arrow rates__arrow-right"><div class="rates__arrow-wrap"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.75L3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.75Z" fill="#C2C2C2" /></svg></div></div>',
            dots: false,
            slidesToShow: slidesToShowSetting,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        updateSlider($(".main-rates .cards-1"));
    }

    if (document.querySelector(".rates__wrapper").offsetWidth >= 568) {
        initSlider();
    }

    window.addEventListener("resize", () => {
        if (document.querySelector(".rates__wrapper").offsetWidth < 568) {
            if ($(".main-rates .cards-1").hasClass("slick-initialized")) {
                $(".main-rates .cards-1").slick("unslick");
            }
        } else {
            if (!$(".main-rates .cards-1").hasClass("slick-initialized")) {
                initSlider();
            }
        }

        resizeRateBlocks();
    });

    resizeRateBlocks();

    document.querySelectorAll(".list-more").forEach(function (listMoreButton) {
        listMoreButton.addEventListener("click", function () {
            let card = this.closest(".card");
            let cardList = card.querySelector(".card__list");

            // if (card) {
            //     var cardWrap = card.querySelector(".card__wrap");

            //     if (card.style.height && card.style.height !== "auto") {
            //         card.style.height = "auto";
            //     } else {
            //         var height = cardWrap.scrollHeight;
            //         var style = getComputedStyle(cardWrap);
            //         height += parseInt(style.paddingTop) + parseInt(style.paddingBottom);
            //         card.style.height = height + "px";
            //     }
            // }

            if (cardList.classList.contains("opened")) {
                cardList.classList.remove("opened");
                this.querySelector("span").textContent = "Показать больше";
            } else {
                cardList.classList.add("opened");
                this.querySelector("span").textContent = "Скрыть";
            }
        });
    });

    let body = document.querySelector(".g-wrap");

    ratesObserver.observe(body, {
        attributes: true,
    });

    resizeRateBlocks();

    setTimeout(() => {
        resizeRateBlocks();
    }, 3000);
});

const ratesObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        resizeRateBlocks();
    });
});

function resizeRateBlocks() {
    const rateBlocks = document.querySelectorAll(".rates__cards.cards-1");
    rateBlocks.forEach((block) => {
        const cards = block.querySelectorAll(".card");
        let maxHeight = 0;

        cards.forEach((card) => {
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });

        cards.forEach((card) => {
            card.style.minHeight = `${maxHeight}px`;

            let cardRow = card.querySelector(".card__row");
            cardRow.style.minHeight = `${maxHeight - 80}px`;
        });
    });
}
