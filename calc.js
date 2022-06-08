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
let repeatedAddition = false;
let repeatedSubtraction = false;
let repeatedMultiplication = false;
let repeatedDivision = false;
let repeatedModulo = false;
let isSubtracting = false;
let isMultiplying = false;
let isDividing = false;
let isModding = false;

[].forEach.call(btn, function(item, i) {
    item.addEventListener('click', (e) => {
        getNumber(item.id, e);
    });
  });
function operate(input, e) {
    if (input == "sign") {
        toggleSign();
    }else if (input == "clear") {
        display.textContent = 0;
        smallerDisplay.textContent = 0;
        smallNumString = "";
        numString = "";
        firstNum = 0;
        secondNum = 0;
    }else if (input == "add") {
        if (isAdding) {
            repeatedAddition = true;
            equal();
        }
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isAdding = true;
    }    else if (input == "subtract") {
        if (isSubtracting) {
            repeatedSubtraction = true;
            equal();
        }
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isSubtracting = true;
    }else if (input == "multiply") {
        if (isMultiplying) {
            repeatedMultiplication = true;
            equal();
        }
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isMultiplying = true;
    }else if (input == "divide") {
        if (isDividing) {
            repeatedDivision = true;
            equal();
        }
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isDividing = true;
    }else if (input == "mod") {
        if (isModding) {
            repeatedModulo = true;
            equal();
        }
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isModding = true;
    }else if (input == "equal") {
        console.log('equal');
        equal();
    } 
}

function getNumber(input, e) {
    if (e.target.className != "btn operation") {
        temp = input.toString();
        numString += temp;
        smallNumString += temp;
        numInt = parseInt(numString, 10);
        secondNum = numInt;
        smallerDisplay.textContent = smallNumString;
        display.textContent = numString;
    }
    else {
        temp = e.target.innerText;
        smallNumString += temp;
        smallerDisplay.textContent = smallNumString;
        operate(input, e);
    }
}

function add(x, y) {
    firstNum = x + y;
    return x + y;
}

function subtract(x, y) {
    firstNum = x - y;
    return x - y;
}

function multiply(x, y) {
    firstNum = x * y;
    return x * y;
}

function divide(x, y) {
    firstNum = x / y;
    return x / y;
}

function mod(x, y) {
    firstNum = x % y;
    return x % y;
}

function equal() {
    console.log(firstNum);
    console.log(secondNum);
    if (isAdding === true) { numInt = add(firstNum,secondNum); }
    else if (repeatedAddition === true) { smallerDisplay.textContent = numInt;numInt = add(firstNum,secondNum); }
    else if (isSubtracting === true) { numInt = subtract(firstNum,secondNum); }
    else if (isMultiplying === true) { numInt = multiply(firstNum, secondNum); }
    else if (isDividing === true) { numInt = divide(firstNum, secondNum); }
    else if (isModding === true) { numInt = mod(firstNum, secondNum); }

    display.textContent = numInt;

    isAdding = false;
    repeatedAddition = false;
    repeatedSubtraction = false;
    repeatedMultiplication = false;
    repeatedDivision = false;
    repeatedModulo = false;
    isSubtracting = false;
    isMultiplying = false;
    isDividing = false;
    isModding = false;
}

function toggleSign() {
    numInt *= -1;
    secondNum = numInt;
    display.textContent = numInt;
}