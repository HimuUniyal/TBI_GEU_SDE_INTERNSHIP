const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}


function remainder(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a % b;
}


function calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return remainder(num1, num2);
        default:
            return "Invalid operation";
    }
}


rl.question("Enter operation (+, -, *, /, %): ", (operation) => {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      const result = calculator(operation, num1, num2);
      console.log("Result:", result);

      rl.close();
    });
  });
});
