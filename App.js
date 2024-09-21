let star = document.querySelectorAll("input");
let showValue = document.querySelector("#rating-value");

for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', (event) => {
        let value = event.target.value;
        showValue.innerHTML = value + " out of 5";
    });
}