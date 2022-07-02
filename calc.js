const container = document.querySelector(".container");
const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const smallerDisplay = document.querySelector(".display-small");
let temp = "";
let smallNumString = "0";
let smallTemp = "";
let numString = "";
let numInt = 0;
let firstNum = 0;
let secondNum = 0;
let lastIndex = 0;
let isAdding = false;
let isSubtracting = false;
let isMultiplying = false;
let isDividing = false;
let isModding = false;
let isExponentiating = false;

[].forEach.call(btn, function(item, i) {
    item.addEventListener('click', (e) => {
        getNumber(item.id, e);
    });
});

function getNumber(input, e) {
    console.log(e.target);
    if (e.target.className != "btn operation") {
        temp = input.toString();
        numString += temp;
        smallNumString += temp;
        numInt = parseFloat(numString, 10);
        secondNum = numInt;
        smallerDisplay.textContent = smallNumString;
        display.textContent = numString;
    }else {
        if (e.target.innerText != "+/-") {
            temp = e.target.innerText;
            smallNumString += temp;
            smallerDisplay.textContent = smallNumString;
        }
        operate(input, e);
    }
}

function operate(input, e) {
    if (input == "sign") {
        toggleSign();
    }else if (input == "clear") {
        display.textContent = 0;
        smallerDisplay.textContent = 0;
        smallNumString = "0";
        numString = "";
        firstNum = 0;
        secondNum = 0;
        numInt = 0;
    }else if (input == "decimal") {
        numString += ".";
        display.textContent = numString;
    }
    else if (input == "add") {
        doubleOperation();
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isAdding = true;
    }    else if (input == "subtract") {
        doubleOperation();
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isSubtracting = true;
    }else if (input == "multiply") {
        doubleOperation();
        firstNum = numInt;
        display.textContent = 0;
        secondNum = 0;
        numString = "";
        isMultiplying = true;
    }else if (input == "divide") {
        doubleOperation();
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isDividing = true;
    }else if (input == "mod") {
        doubleOperation();
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isModding = true;
    }else if (input == "exponent") {
        firstNum = numInt;
        display.textContent = 0;
        numString = "";
        isExponentiating = true;
    }
    else if (input == "equal") {
        console.log('equal');
        equal();
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

function exponent(x,n) {
    if (n == 0) { return 1; }
        
    if (n == 1) { return x; }  
        
    if (n == 2) { return x*x; }    

    else if (n % 2 == 1) { return x * exponent(x * x, Math.floor(n / 2)); }   
        
    else if (n % 2 == 0) { return exponent(x * x, n / 2); }
}

function doubleOperation() {
    if (isAdding) { equal() ;}
    else if (isSubtracting) { equal(); }
    else if (isMultiplying) { equal(); }
    else if (isDividing) { equal(); }
    else if (isModding) { equal(); }
}

function equal() {
    if (isAdding === true) { numInt = add(firstNum,secondNum); }
    else if (isSubtracting === true) { numInt = subtract(firstNum,secondNum); }
    else if (isMultiplying === true) { numInt = multiply(firstNum, secondNum); }
    else if (isDividing === true) { numInt = divide(firstNum, secondNum); }
    else if (isModding === true) { numInt = mod(firstNum, secondNum); }
    else if (isExponentiating === true) { numInt = exponent(firstNum, secondNum); }
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
    isExponentiating = false;
    sign = false;
}

function toggleSign() {
    lastIndex = smallNumString.length-1;
    numInt *= -1;
    secondNum = numInt;
    temp = numInt.toString();
    display.textContent = numInt;
    smallNumString = smallNumString.split('');
    smallNumString[lastIndex] = temp;
    smallNumString = smallNumString.join('');
    smallerDisplay.textContent = smallNumString;
    sign = true;
}