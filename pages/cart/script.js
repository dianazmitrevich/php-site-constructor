document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".content__cart .cart__item");

    cartItems.forEach((cartItem) => {
        cartItem.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") {
                cartChangeItemQuantity(cartItem);
            }
        });

        cartItem.querySelector("input[type='number']").addEventListener("input", () => {
            cartChangeItemQuantity(cartItem);
        });
    });
});

function formatNumberWithSpaces(num) {
    return num.toLocaleString("en").replace(/,/g, " ").replace(/\./g, ".");
}

function parsePrice(priceString) {
    return parseFloat(priceString.replace(/\s/g, ""));
}

function cartChangeItemQuantity(cartItem) {
    const price = parsePrice(cartItem.querySelector(".item__price .new").textContent);
    const quantity = cartItem.querySelector("input[type='number']").value;
    const final = formatNumberWithSpaces(price * quantity);
    cartItem.querySelector(".item__final").textContent = final;

    changeCartSum();
}

function changeCartSum() {
    let finalPrices = document.querySelectorAll(".item__final");
    let finalItemsSum = 0;

    finalPrices.forEach((finalPrice) => {
        finalItemsSum += parsePrice(finalPrice.textContent);
    });

    document.querySelector(".cart__bottom .total.price").textContent = formatNumberWithSpaces(finalItemsSum) + " руб.";
    let deliveryPrice = parsePrice(
        document.querySelector(".cart__bottom .total.delivery").textContent.replace(" руб.", "")
    );

    document.querySelector(".cart__bottom .final .num").textContent =
        formatNumberWithSpaces(finalItemsSum + deliveryPrice) + " руб.";
}
