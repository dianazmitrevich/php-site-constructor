if (!window.ResizeObserver) {
    document.head.appendChild(
        Object.assign(document.createElement("script"), {
            src: "https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver",
            async: true,
        })
    );
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".header__mobile .header__burger").addEventListener("click", (event) => {
        if (event.target.closest("li")) {
            const submenu = event.target.closest("li").querySelector(".submenu");

            if (submenu) {
                event.preventDefault();
                const newWrap = createNewWrap(submenu);
                requestAnimationFrame(() => (newWrap.style.transform = "translateX(0)"));

                newWrap.querySelector(".wrap__back").addEventListener("click", () => {
                    newWrap.style.transform = "translateX(-100%)";
                    newWrap.addEventListener("transitionend", function () {
                        this.remove();
                    });
                });
            }
        }
    });

    let container = document.querySelector(".header__col-lower .container");
    let [navItems, moreButton, moreWrap, nav, navChild] = [
        container.querySelectorAll("nav ul li"),
        container.querySelector(".more-button"),
        container.querySelector(".more-wrap"),
        container.querySelector("nav ul"),
        container.querySelector(".nav-child"),
    ];

    nav.appendChild(navChild);

    const getWidth = (item) =>
        item.offsetWidth +
        parseFloat(window.getComputedStyle(item).marginLeft) +
        parseFloat(window.getComputedStyle(item).marginRight);

    const outer = document.querySelector(".outer-bg");
    let logo = document.querySelector(".header__desktop .header__col-upper .header__logo");
    let firstLiItemWidth = getWidth(navItems[0]);
    let firstLiItemWidthBigger = getWidth(logo) + 40 + 40 + 40 + navItems[0].offsetWidth;

    navItems.forEach((e) => {
        e.setAttribute("data-width", getWidth(e));
    });

    const updateWidths = () => {
        if (getBodyScrollTop() > 0 && getComputedStyle(document.body).getPropertyValue("--header-scroll") == "Y") {
            if (!outer.classList.contains("header-scroll")) {
                outer.classList.add("header-scroll");
            }
            navItems[0].setAttribute("data-width", firstLiItemWidthBigger);
        } else {
            if (outer.classList.contains("header-scroll")) {
                outer.classList.remove("header-scroll");
            }
            navItems[0].setAttribute("data-width", firstLiItemWidth);
        }
    };

    updateWidths();

    document.addEventListener("scroll", () => {
        if (getBodyScrollTop() > 0 && getComputedStyle(document.body).getPropertyValue("--header-scroll") == "Y") {
            if (!outer.classList.contains("header-scroll")) {
                outer.classList.add("header-scroll");
            }
            navItems[0].setAttribute("data-width", firstLiItemWidthBigger);
        } else {
            if (outer.classList.contains("header-scroll")) {
                outer.classList.remove("header-scroll");
            }
            navItems[0].setAttribute("data-width", firstLiItemWidth);
        }
        checkWidth();
    });

    const checkWidth = () => {
        let containerWidth = container.offsetWidth;
        let itemsWidth = [...navItems].reduce((a, b) => {
            if (!moreWrap.contains(b)) {
                return a + parseInt(b.getAttribute("data-width"));
            } else {
                return a;
            }
        }, 0);

        let navChildWidth = getWidth(navChild);

        if (itemsWidth + navChildWidth + 40 > containerWidth) {
            let itemsWidthNew = 0;
            moreButton.classList.add("show");

            navItems.forEach((item) => {
                itemsWidthNew + parseInt(item.getAttribute("data-width")) + navChildWidth + 40 + 40 + 40 >
                containerWidth
                    ? moreWrap.appendChild(item)
                    : (itemsWidthNew += parseInt(item.getAttribute("data-width")));
            });

            moreWrap.hasChildNodes() && moreButton.classList.add("show");
        } else {
            while (
                moreWrap.firstChild &&
                containerWidth - itemsWidth - navChildWidth - 40 - 40 >= moreWrap.firstChild.getAttribute("data-width")
            ) {
                let itemWidth = parseInt(moreWrap.firstChild.getAttribute("data-width"));
                if (containerWidth - itemsWidth - navChildWidth >= itemWidth) {
                    nav.insertBefore(moreWrap.firstChild, navChild);
                    itemsWidth += itemWidth;
                }
            }
        }

        if (moreWrap.childNodes.length == 0) {
            navChild.classList.add("d-none");
        } else {
            navChild.classList.remove("d-none");
        }
    };

    new ResizeObserver((entries) =>
        entries.forEach((entry) => {
            if (entry.target === container) {
                setTimeout(() => {
                    updateWidths();
                    checkWidth();
                }, 100);
            }
        })
    ).observe(container);

    if (getBodyScrollTop() > 0 && getComputedStyle(document.body).getPropertyValue("--header-scroll") != 0) {
        if (!outer.classList.contains("header-scroll")) {
            outer.classList.add("header-scroll");
        }
    }

    navItems[0].setAttribute("data-width", getWidth(navItems[0]));

    checkWidth();

    shortenAddress();
});

window.onload = () => {
    document.querySelector(".global").classList.remove("loader");
};

function shortenAddress() {
    let address = document.querySelector(".header__desktop .header__item-address p");
    let fullText = address.innerText;
    let fullTextStatic = address.innerText;
    let lines = 2;

    while (address.offsetHeight > parseFloat(getComputedStyle(address).fontSize) * 1.36 * lines) {
        address.innerText = (fullText = fullText.slice(0, -1)) + "...";
    }

    if (address.innerText.includes("...")) {
        let detailDiv = document.createElement("div");
        detailDiv.className = "address-detail";
        detailDiv.innerText = fullTextStatic;
        address.parentNode.insertBefore(detailDiv, address.nextSibling);
    }
}

function createElem(type, classes, src, innerHTML) {
    const elem = document.createElement(type);
    elem.classList.add(...classes);
    if (src) elem.src = src;
    if (innerHTML) elem.innerHTML = innerHTML;
    return elem;
}

function createNewWrap(submenu) {
    const newWrap = createElem("div", ["popup__wrap-additional", "wrap", "show"]);
    newWrap.style.transform = "translateX(-100%)";

    const back = createElem("div", ["wrap__back"]);
    back.append(createElem("img", [], "./images/icons/back-icon.svg"), createElem("span", [], null, "Назад"));

    const popupBtn = createElem("div", ["popup__btn"]);
    popupBtn.appendChild(createElem("img", [], "./images/icons/close-popup-icon.svg"));

    const head = createElem("div", ["wrap__head"]);
    head.append(back, popupBtn);

    const body = createElem("div", ["wrap__body"]);
    body.appendChild(createElem("nav", []));

    newWrap.append(head, body);
    newWrap.querySelector("nav").innerHTML = submenu.innerHTML;

    document.querySelector(".header__mobile .header__burger").appendChild(newWrap);

    popupBtn.addEventListener("click", () => {
        document.querySelector(".popup__wrap").classList.remove("show");
        document.querySelectorAll(".popup__wrap-additional").forEach((wrap) => wrap.remove());
    });

    return newWrap;
}

function getBodyScrollTop() {
    return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    );
}
