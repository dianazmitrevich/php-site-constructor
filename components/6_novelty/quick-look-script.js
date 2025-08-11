document.addEventListener("DOMContentLoaded", () => {
    function initializeQuickLookModal() {
        $(".quick-look__popup .gallery__cards").slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            fade: true,
            customPaging: function (slider, i) {
                let thumb = $(slider.$slides[i]).find("img").attr("src");
                return '<span class="slick-thumb"><img src="' + thumb + '" /></span>';
            },
            dots: true,
        });

        let colSliderHeight = document.querySelector(".quick-look__popup .wrap__col.gallery").offsetHeight;
        let colDetailHeight = document.querySelector(".quick-look__popup .wrap__col.detail").offsetHeight;

        if (colDetailHeight > colSliderHeight) {
            document.querySelector(".quick-look__popup .wrap__col.detail .detail__parameters").classList.remove("show");
        } else {
            document.querySelector(".quick-look__popup .wrap__col.detail .detail__more").classList.add("d-none");
        }

        document.querySelector(".quick-look__popup .wrap__col.detail").style.height = `${colSliderHeight}px`;

        let moreBtn = document.querySelector(".quick-look__popup .wrap__col.detail .detail__more");
        moreBtn.addEventListener("click", () => {
            let block = document.querySelector(".quick-look__popup .wrap__col.detail .detail__parameters").classList;
            document.querySelector(".quick-look__popup .wrap__col.detail .detail__more span").innerHTML =
                block.contains("show") ? "Подробнее" : "Скрыть";

            block.toggle("show");
        });
    }

    initializeQuickLookModal();
});
