document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let footerHeight = document.querySelector("footer.footer").offsetHeight;

        document.querySelector("main").style.paddingBottom = `${footerHeight}px`;
    }, 400);

    window.addEventListener("resize", () => {
        let footerHeight = document.querySelector("footer.footer").offsetHeight;

        document.querySelector("main").style.paddingBottom = `${footerHeight}px`;
    });
});
