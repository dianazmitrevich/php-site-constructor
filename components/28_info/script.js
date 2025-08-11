document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".main-info .list-more").forEach((element) => {
        let list = element.closest(".info__list");

        list.addEventListener("click", () => {
            list.classList.toggle("opened");

            list.querySelector(".list-more span").innerHTML = list.classList.contains("opened")
                ? "Скрыть"
                : "Показать больше";
        });
    });
});
