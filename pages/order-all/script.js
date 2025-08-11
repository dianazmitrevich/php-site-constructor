document.addEventListener("DOMContentLoaded", function () {
    let pageTabsInnerItems = document.querySelectorAll(".content__body .tabs__item-inner");
    for (let i = 1; i < pageTabsInnerItems.length; i++) {
        pageTabsInnerItems[i].style.top = -45 * i + "px";
    }

    let pageTabsHeadItems = document.querySelectorAll(".content__body .tabs__item-head");
    for (let i = 0; i < pageTabsHeadItems.length; i++) {
        pageTabsHeadItems[i].addEventListener("click", function () {
            let tabsItems = document.querySelectorAll(".content__body .tabs__item");
            for (let j = 0; j < tabsItems.length; j++) {
                tabsItems[j].classList.remove("tabs__item-selected");
            }

            this.parentNode.classList.add("tabs__item-selected");
        });
    }

    resizeContentOrders();

    window.addEventListener("resize", () => {
        resizeContentOrders();
    });

    function resizeContentOrders() {
        let innerSelected = document.querySelector(".content .tabs__item-selected .tabs__item-inner");
        document.querySelector(".content__wrapper").style.minHeight = innerSelected.offsetHeight + "px";
    }

    let payDropdowns = document.querySelectorAll(".content .item__section-dropdown");
    payDropdowns.forEach((payDropdown) => {
        let head = payDropdown.querySelector(".dropdown-head");

        head.addEventListener("click", () => {
            payDropdown.querySelector(".dropdown-body").classList.toggle("show");
            resizeContentOrders();
        });
    });

    let itemsDropdown = document.querySelectorAll(".item__section-dropdown");
    itemsDropdown.forEach((itemsDropdown) => {
        let items = itemsDropdown.querySelectorAll(".item");

        items.forEach((item) => {
            item.addEventListener("click", () => {
                items.forEach((e) => {
                    e.classList.remove("selected");
                });

                item.classList.add("selected");
            });
        });
    });
});
