const Stack = require("../stack");

function decimalToBinary(decimalNumber) {
  const stack = new Stack();
  let response = "",
    number = decimalNumber,
    rem;

  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    response += stack.pop().toString();
  }

  return response;
}

module.exports = decimalToBinary;
