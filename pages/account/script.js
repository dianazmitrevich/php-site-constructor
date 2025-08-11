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
});
