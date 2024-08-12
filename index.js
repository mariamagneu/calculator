const add = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const subtract = function (array) {
  if (array.length === 0) return 0;
  return array.reduce((total, current) => total - current);
};

const multiply = function (array) {
  if (array.length === 0) return 1;
  return array.reduce((total, current) => total * current, 1);
};

const divide = function (array) {
  if (array.length === 0) return 0;
  return array.reduce((total, current) => total / current);
};

let firstNumber = null;
let operator = null;
let displayValue = "";

const display = document.getElementById("display");

const updateDisplay = () => {
  display.textContent = displayValue;
};

const handleNumberClick = (event) => {
  const buttonValue = event.target.dataset.value;
  displayValue += buttonValue;
  updateDisplay();
};

const handleOperatorClick = (event) => {
  if (firstNumber === null) {
    firstNumber = parseFloat(displayValue);
    operator = event.target.dataset.value;
    displayValue = "";
  } else {
    secondNumber = parseFloat(displayValue);
    firstNumber = operate(firstNumber, operator, secondNumber);
    operator = event.target.dataset.value;
    displayValue = "";
    updateDisplay();
  }
};

const handleEqualsClick = () => {
  if (firstNumber !== null && operator) {
    const secondNumber = parseFloat(displayValue);
    const result = operate(firstNumber, operator, secondNumber);
    displayValue = result.toString();
    firstNumber = null;
    operator = null;
    updateDisplay();
  }
};

const handleClearClick = () => {
  firstNumber = null;
  operator = null;
  displayValue = "0";
  updateDisplay();
};

const numberButtons = document.querySelectorAll(".numberButtons .btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

const operatorButtons = document.querySelectorAll(".operatorButtons .btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", handleEqualsClick);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", handleClearClick);
