document.addEventListener("DOMContentLoaded", () => {
    let mapBlockListItems = document.querySelectorAll(".main-maps.listed .list__item");
    let mapBlockDetailClose = document.querySelector(".main-maps.listed .maps__col-detail .detail-close");

    mapBlockListItems.forEach((mapBlockListItem) => {
        mapBlockListItem.addEventListener("click", () => {
            mapBlockListItem.closest(".maps__list").classList.remove("show");
            mapBlockListItem
                .closest(".maps__list")
                .closest(".maps__row")
                .querySelector(".maps__col-detail")
                .classList.add("show");
        });
    });

    mapBlockDetailClose.addEventListener("click", () => {
        mapBlockDetailClose.closest(".maps__col-detail").classList.remove("show");
        mapBlockDetailClose.closest(".maps__row").querySelector(".maps__list").classList.add("show");
    });
});
