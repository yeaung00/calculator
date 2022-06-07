const container = document.querySelector(".container");
const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
let sign = false;

[].forEach.call(btn, function(item) {
    item.addEventListener('click', (e) => {
        operate(item.id);
    });
  });
function operate(input) {
    if (input == "sign") {
        toggleSign
    }
    if (input == "clear") {
        display.textContent = 0;
    }
    else { display.textContent = input; }
    
}

function toggleSign() {
    if (sign === false) { 
        sign = true;

    }
    if (sign === true) { sign = false; }

}