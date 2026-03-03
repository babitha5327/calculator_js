let firstNumber = "";
let secondNumber = "";
let operator = "";

function press(value) {

    // If operator pressed
    if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (firstNumber === "") return;
        operator = value;
    } 
    else {
        if (operator === "") {
            firstNumber += value;
        } else {
            secondNumber += value;
        }
    }

    updateDisplay();
}

function calculate() {

    if (firstNumber === "" || secondNumber === "") return;

    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;

    if (operator === "+") result = a + b;
    else if (operator === "-") result = a - b;
    else if (operator === "*") result = a * b;
    else if (operator === "/") {
        if (b === 0) {
            result = "Error";
        } else {
            result = a / b;
        }
    }

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";

    updateDisplay();
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value =
        firstNumber + operator + secondNumber;
}