document.addEventListener("DOMContentLoaded", function () {
    const codeBlock = document.querySelector(".code-block .img-cage");
    const imgCage = document.querySelector(".form__code .code-wrap .img-cage");
    const inputField = document.querySelector(".form__code input[type='text']");
    const formField = document.querySelector(".form__code");
    let captchaCode = "";

    function generateCaptcha() {
        captchaCode = Math.random().toString(36).substring(2, 8);
        const captchaImage = `<img src="https://dummyimage.com/92x33/000/fff&text=${captchaCode}" alt="Captcha">`;
        codeBlock.innerHTML = captchaImage;
    }

    function validateCaptcha() {
        const userInput = inputField.value;
        if (userInput === captchaCode) {
            formField.classList.remove("invalid");
        } else {
            formField.classList.add("invalid");
        }
    }

    imgCage.addEventListener("click", generateCaptcha);
    inputField.addEventListener("input", validateCaptcha);

    generateCaptcha();
});
