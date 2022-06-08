const container = document.querySelector(".container");
const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".display-small");
let sign = false;
let smallNumString = "";
let smallTemp = "";
let numString = "";
let numInt = 0;
let firstNum = 0;
let secondNum = 0;
let isAdding = false;
let isSubtracting = false;
let isMultiplying = false;
let isDividing = false;

[].forEach.call(btn, function(item, i) {
    item.addEventListener('click', (e) => {
        getNumber(item.id, e);
    });
  });
function operate(input, e) {
    if (input == "sign") {
        toggleSign;
    }
    else if (input == "clear") {
        display.textContent = 0;
        smallerDisplay.textContent = 0;
        smallNumString = "";
        numString = "";
    }
    else if (input == "add") {
            firstNum = numInt;
            display.textContent = 0;
            numString = "";
            isSubtracting = false;
            isAdding = true;
            isMultiplying = false;
            isDividing = false;
        
    }
    else if (input == "subtract") {
        firstNum = numInt;
        
        display.textContent = 0;
        numString = "";
        isAdding = false;
        isSubtracting = true;
        isMultiplying = false;
        isDividing = false;
    }
    else if (input == "multiply") {
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isAdding = false;
        isSubtracting = false;
        isMultiplying = true;
        isDividing = false;
    }
    else if (input == "divide") {
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isAdding = false;
        isSubtracting = false;
        isMultiplying = false;
        isDividing = true;
    }
    else if (input == "equal") {
        console.log('equal');
        equal();
    }
}
function getNumber(input, e) {
    if (e.target.className != "btn operation") {
        temp = input.toString();
        numString += temp;
        smallNumString += temp;
        numInt = parseInt(numString,10);
        secondNum = numInt;
        smallerDisplay.textContent = smallNumString;
        display.textContent = numString;
    }
    else {
       // temp = e.target.innerText;
       // smallNumString += temp;
        smallerDisplay.textContent = smallNumString;
        operate(input,e);
    }
}
function add(x,y) {
    firstNum = secondNum;
    return x+y;
}
function subtract(x,y) {
    firstNum = x-y;
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}
function equal() {
    console.log(firstNum);
    console.log(secondNum);
    if (isAdding === true) { numInt = add(firstNum,numInt); }
    else if (isSubtracting === true) { numInt = subtract(firstNum,secondNum); }
    else if (isMultiplying === true) { firstNum = multiply(firstNum, secondNum); }
    else if (isDividing === true) { firstNum = divide(firstNum, secondNum); }
    display.textContent = numInt;
    smallerDisplay.textContent = numInt;
    
}
function toggleSign() {
    if (sign === false) { 
        sign = true;

    }
    if (sign === true) { sign = false; }

}