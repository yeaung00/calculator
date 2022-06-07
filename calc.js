const container = document.querySelector(".container");
const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

[].forEach.call(btn, function(item) {
    item.addEventListener('click', (e) => {
        operate(item.id);
    });
  });
function operate(input) {
    display.textContent = input;
}