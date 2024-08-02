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

function operator(operator, a, b) {
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
let op;
let b;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => button.addEventListener("click", function(e) {
    const buttonPressed = e.target;
    let text = document.createElement("p");
    text.textContent = buttonPressed.value;

    display.appendChild(text);


}));

console.log(buttons);