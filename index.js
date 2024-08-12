const add = function (array) {
  return array.reduce((total, current) => {
    return total + current;
  }, 0);
};

const subtract = function (array) {
  if (array.length === 0) return 0;
  return array.reduce((total, current) => {
    return total - current;
  });
};

const multiply = function (array) {
  if (array.length === 0) return 1;
  return array.reduce((total, current) => {
    return total * current;
  }, 1);
};

const divide = function (array) {
  return array.reduce((total, current) => {
    return total / current;
  });
};

let firstNumber = 0;
let operator;
let secondNumber = 0;

const operate = function (firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return add([firstNumber, secondNumber]);
    case "-":
      return subtract([firstNumber, secondNumber]);
    case "*":
      return multiply([firstNumber, secondNumber]);
    case "/":
      return divide([firstNumber, secondNumber]);
    default:
      return "Invalid operator";
  }
};
