document.addEventListener("DOMContentLoaded", () => {
    var tabsInnerItems = document.querySelectorAll(".settings-window .tabs__item-inner");
    for (var i = 1; i < tabsInnerItems.length; i++) {
        tabsInnerItems[i].style.top = -45 * i + "px";
    }

    var tabsHeadItems = document.querySelectorAll(".settings-window .tabs__item-head");
    for (var i = 0; i < tabsHeadItems.length; i++) {
        tabsHeadItems[i].addEventListener("click", function () {
            var tabsItems = document.querySelectorAll(".settings-window .tabs__item");
            for (var j = 0; j < tabsItems.length; j++) {
                tabsItems[j].classList.remove("tabs__item-selected");
            }

            this.parentNode.classList.add("tabs__item-selected");
        });
    }

    document.querySelectorAll(".toggle__head-title").forEach((title) => {
        title.addEventListener("click", (event) => {
            event.currentTarget.parentNode.parentNode.parentNode.classList.toggle("toggle-open");
        });
    });

    document.querySelectorAll(".toggle__head-grab").forEach((grab) => {
        grab.addEventListener("mousedown", (event) => {
            event.preventDefault();

            const toggle = event.currentTarget.parentNode.parentNode.parentNode;
            const container = toggle.parentNode;
            let prevY = event.clientY;

            toggle.style.background = "var(--settings-move)";
            // toggle.style.transition = 'transform 0.3s ease';
            toggle.style.zIndex = "10";

            const onMouseMove = (event) => {
                const newY = event.clientY;

                // toggle.style.position = 'absolute';
                // toggle.style.top = `${event.clientY - container.getBoundingClientRect().top}px`;

                const closest = Array.from(container.children).reduce((prev, curr) => {
                    const prevRect = prev.getBoundingClientRect();
                    const currRect = curr.getBoundingClientRect();
                    return Math.abs(prevRect.top - newY) < Math.abs(currRect.top - newY) ? prev : curr;
                });

                container.insertBefore(toggle, newY > prevY ? closest.nextElementSibling : closest);

                prevY = newY;
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener(
                "mouseup",
                () => {
                    document.removeEventListener("mousemove", onMouseMove);

                    toggle.style.background = "";
                    toggle.style.zIndex = "";
                    toggle.style.position = "";
                    toggle.style.top = "";
                },
                { once: true }
            );
        });
    });

    let checkboxesExport = document.querySelectorAll(".settings-window .inner__checkboxes input[type='checkbox']");
    let totalTextExport = document.querySelector(".settings-window .tabs__item-inner .total");
    let checkboxexCount = checkboxesExport.length;

    function countChecksExport() {
        let checks = 0;

        checkboxesExport.forEach((check) => {
            if (check.checked) {
                checks += 1;
            }
        });

        totalTextExport.innerHTML = `Выбрано ${checks} из ${checkboxexCount} групп настроек`;
    }

    checkboxesExport.forEach((element) => {
        element.addEventListener("change", () => {
            countChecksExport();
        });
    });

    totalTextExport.addEventListener("click", () => {
        totalTextExport.closest(".tabs__item-inner").querySelector(".inner__checkboxes").classList.toggle("opened");
    });

    let chooseAllExport = document.querySelector(".settings-window .inner__checkboxes .choose-all");
    let clearAllExport = document.querySelector(".settings-window .inner__checkboxes .clear-all");

    chooseAllExport.addEventListener("click", () => {
        checkboxesExport.forEach((element) => {
            element.checked = true;
            countChecksExport();
        });
    });

    clearAllExport.addEventListener("click", () => {
        checkboxesExport.forEach((element) => {
            element.checked = false;
            countChecksExport();
        });
    });

    let exportTabs = document.querySelectorAll(".settings-window .inner__tab-head");
    exportTabs.forEach((exportTab) => {
        exportTab.addEventListener("click", () => {
            let bodies = exportTab.closest(".inner__tabs").querySelectorAll(".inner__tab-body");

            bodies.forEach((body) => {
                body.classList.remove("selected");

                body.closest(".inner__tabs")
                    .querySelectorAll(".inner__tab-head")
                    .forEach((tab) => {
                        tab.classList.remove("selected");
                    });
            });

            bodies[exportTab.getAttribute("data-tab")].classList.add("selected");

            exportTab.classList.add("selected");
        });
    });
});
