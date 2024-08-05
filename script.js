function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function calculatorFunction(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return new Error("Invalid");
    }
}

let a = 0;
let b = 0;
let operator;
let result;
let clearNeeded = false;

const clearButton = document.querySelector("#ac");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll("button.operator");
const numberButtons = document.querySelectorAll("button.number");
const equalsButton = document.querySelector("button.equals");

// remove all existing text and variable values when clearing the calculator
clearButton.addEventListener("click", () => {
    a = 0;
    b = 0;
    operator = undefined;
    clearNeeded = false;
    display.textContent = "0";
    operatorButtons.forEach((button) => button.classList.remove("selected"));
})

// store values when user clicks number buttons
numberButtons.forEach((button) => button.addEventListener("click", (e) => {
    if (clearNeeded) {

    } else if (operator) {
        b += e.target.value;
        display.textContent = +b;
    } else {
        a += e.target.value;
        display.textContent = +a;
    }
}))

// store operator when user clicks operator button
operatorButtons.forEach((button) => button.addEventListener("click", (e) => {
    operator = e.target.value; 
    e.target.classList.add("selected");
}))

// display the result when the user clicks equals button
equalsButton.addEventListener("click", () => {
    if (operator === undefined) {

    } else if (operator === "/" && +b === 0) {
        display.textContent = "get outta here";
        // cleanup to prevent further operations until clear
        operatorButtons.forEach((button) => button.classList.remove("selected"));
        clearNeeded = true;
    } else {
        let result = calculatorFunction(operator, +a, +b);
        display.textContent = parseFloat(result.toFixed(2));
        // cleanup to prevent further operations until clear
        operatorButtons.forEach((button) => button.classList.remove("selected"));
        clearNeeded = true;
    }
    
})

