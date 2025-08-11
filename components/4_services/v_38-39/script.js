let cards38Tags = document.querySelectorAll(".cards-38 .card__tags");

if (cards38Tags) {
    cards38Tags.forEach(element => {
        let max = element.getAttribute("data-max");
        let aElements = element.querySelectorAll("a");
        let aCount = aElements.length;

        if (aCount > max) {
            let moreElement = document.createElement("div");
            moreElement.className = "card__more";

            let moreElementInner = `
            <p>Показать больше</p>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.10939 4.89076L0.161731 0.956604C-0.053832 0.727593 -0.053832 0.377274 0.161731 0.161673C0.377294 -0.05389 0.741061 -0.05389 0.956662 0.161673L4.50009 3.7051L8.04352 0.161672C8.27253 -0.0538906 8.62285 -0.0538907 8.83845 0.161672C9.05401 0.377235 9.05401 0.727541 8.83845 0.956604L4.90429 4.89076C4.67528 5.10632 4.32496 5.10632 4.10936 4.89076L4.10939 4.89076Z"
            fill="var(--color-dark)" />
            </svg>`;

            moreElement.addEventListener("click", () => {
                element.classList.toggle("card__tags-opened");
            });

            moreElement.innerHTML = moreElementInner;
            element.parentNode.append(moreElement);
        }

        for (let index = 0; index < max; index++) {
            if (aElements[index]) {
                aElements[index].style = "display: block;";
            }
        }
    });
}