
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1,number2) {
  return number1 - number2;
}

function multiply(number1,number2) {
  return number1*number2;
}

function divide(number1,number2) {
  return number1/number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter a second number:"));
window.alert(number1 + "+" + number2 + "=" + add(number1,number2) +
  ".\n The subtraction of your numbers equals: " + subtract(number1,number2) + 
  ".\n The multiplication of your numbers equal: " + multiply(number1,number2) + 
  ".\n The division of your number equals: " + divide(number1,number2));
