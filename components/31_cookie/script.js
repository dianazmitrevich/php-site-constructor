document.addEventListener("DOMContentLoaded", function () {
    const cookieConsent = document.querySelector(".cookie");
    const cookieButton = document.querySelector(".cookie .cookie__btn");

    if (!sessionStorage.getItem("cookieAccepted")) {
        cookieConsent.classList.add("show");
    }

    cookieButton.addEventListener("click", function () {
        sessionStorage.setItem("cookieAccepted", "true");
        cookieConsent.classList.remove("show");
    });
});
