document.addEventListener("DOMContentLoaded", () => {
    let blockNoveltyTabs = document.querySelectorAll(".main-novelty .novelty__tab");

    blockNoveltyTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            let tabNum = tab.getAttribute("data-tab");

            blockNoveltyTabs.forEach((blockNoveltyTab) => {
                blockNoveltyTab.classList.remove("selected");
            });

            let mainBlocks = tab.closest(".main-novelty").querySelectorAll(".novelty__cards");
            mainBlocks.forEach((mainBlock) => {
                mainBlock.classList.remove("selected");
            });

            tab.closest(".main-novelty").querySelector(`.tab-${tabNum}`).classList.add("selected");
            tab.classList.add("selected");
        });
    });
});
