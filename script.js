function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
        default:
            break;
    }
}

let num1;
let num2;
let operator;

let currentDisplay = "";
let numbers = document.querySelector(".numbers");
let operators = document.querySelector(".operators");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let display = document.querySelector("#display");

numbers.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;

    if (num1 != null && operator == null) {
        num1 = null;
    }

    const digit = event.target.textContent;

    currentDisplay += digit;

    display.textContent = currentDisplay;
})

operators.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;

    if (currentDisplay === "") { 
        operator = event.target.id; return; 
    }

    if (num1 != null) {
        num2 = parseFloat(currentDisplay);
        const result = operate(operator, num1, num2);

        display.textContent = result;
        currentDisplay = "";
        num1 = result;
        num2 = null;
        operator = event.target.id;
    } else {
        num1 = parseFloat(currentDisplay);
        operator = event.target.id;

        currentDisplay = "";
    }

    //display.textContent += event.target.textContent;
})

clear.addEventListener("click", (event) => {
    currentDisplay = "";
    num1 = null;
    num2 = null;
    operator = null;

    display.textContent = currentDisplay;
})

equal.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;

    num2 = parseFloat(currentDisplay);

    const result = operate(operator, num1, num2);
    display.textContent = result;
    currentDisplay = "";
    num1 = result;
    num2 = null;
    operator = null;
})