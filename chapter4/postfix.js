var Stack = require('./stack.js');

module.exports = function(exp) {
  var numberStack = new Stack();
  var operatorStack = new Stack();
  for (var i = exp.length - 1; i >= 0; i--) {
    if (exp[i] == '+' || exp[i] == '-') {
      operatorStack.push(exp[i]);
    }
    else {
      numberStack.push(exp[i]);
    }
  }
  while (operatorStack.peek() && numberStack.peek()) {
    if (operatorStack.pop() === "+") {
      numberStack.push(Number(numberStack.pop()) + Number(numberStack.pop()));
    }
    else {
      numberStack.push(Number(numberStack.pop()) - Number(numberStack.pop()));
    }
  }
  return Number(numberStack.pop());
};





