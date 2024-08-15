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
const operate = function (firstNumber, operator, secondNumber) {
  let result;

  switch (operator) {
    case "+":
      result = add([firstNumber, secondNumber]);
      break;
    case "-":
      result = subtract([firstNumber, secondNumber]);
      break;
    case "*":
      result = multiply([firstNumber, secondNumber]);
      break;
    case "/":
      if (secondNumber === 0) {
        return "You can't divide by 0";
      }
      result = divide([firstNumber, secondNumber]);
      break;
    default:
      return "Invalid operator";
  }

  return Math.round(result * 1000) / 1000;
};
// Common function to handle operators (used by both click and keydown events)
const handleOperator = (operatorKey) => {
  if (firstNumber === null) {
    firstNumber = parseFloat(displayValue);
  } else {
    const secondNumber = parseFloat(displayValue);
    const result = operate(firstNumber, operator, secondNumber);
    displayValue = result.toString();
    firstNumber = result;
    updateDisplay();
  }

  operator = operatorKey;
  displayValue = "";
};

document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    handleNumberInput(event.key);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") handleDeleteInput();
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    handleOperator(event.key);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "=") {
    handleEquals();
  }
});

const handleNumberClick = (event) => {
  handleNumberInput(event.target.dataset.value);
};

const handleOperatorClick = (event) => {
  handleOperator(event.target.dataset.value);
};

const handleNumberInput = (key) => {
  if (displayValue === "0") {
    displayValue = key;
  } else {
    displayValue += key;
  }
  updateDisplay();
};

const handleDeleteInput = () => {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
};

// Function for handling equals (Enter key or equals button)
const handleEquals = () => {
  if (firstNumber !== null && operator) {
    const secondNumber = parseFloat(displayValue);
    const result = operate(firstNumber, operator, secondNumber);
    displayValue = result.toString();
    firstNumber = null;
    operator = null;
    updateDisplay();
  }
};

// Handle clear input
const handleClearClick = () => {
  firstNumber = null;
  operator = null;
  displayValue = "0";
  updateDisplay();
};

// Add event listeners for button clicks
const numberButtons = document.querySelectorAll(".numberButtons .btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

const operatorButtons = document.querySelectorAll(".operatorButtons .btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", handleEquals);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", handleClearClick);
