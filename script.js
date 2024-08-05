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

let a;
let b;
let operator;

const clearButton = document.querySelector("#ac");
const display = document.querySelector(".display");

clearButton.addEventListener("click", () => {
    a = 0;
    b = 0;
    display.textContent = "0";
})

const numberButtons = document.querySelectorAll("button.number");

numberButtons.forEach((button) => button.addEventListener("click", (e) => {
    a += e.target.value;
    display.textContent = +a;
}))