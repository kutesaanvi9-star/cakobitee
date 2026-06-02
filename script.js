document.addEventListener("DOMContentLoaded", () => {

let cartCount = 0;

const cartDisplay =
document.getElementById("cart-count");

document
.querySelectorAll(".add-cart")
.forEach(button => {

button.addEventListener("click", () => {

cartCount++;

cartDisplay.textContent = cartCount;

button.innerHTML = "✓ Added";

setTimeout(() => {
button.innerHTML = "Add To Cart";
}, 1000);

});

});

const form =
document.querySelector("form");

form.addEventListener("submit", e => {

e.preventDefault();

alert(
"Thank you for contacting Cakobite!"
);

form.reset();

});

});
