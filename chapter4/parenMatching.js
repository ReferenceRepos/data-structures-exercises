var expression = "1+(3(3+2)/3))+9-(5+2)";

console.log(findFirstMismatchedParen(expression));


function findFirstMismatchedParen(expression) {
  var array = expression.split("");

  var i, parenStack = [];
  var lastParen;

  for (i = 0; i < array.length; i++) {
    if (array[i] == '(') {
      parenStack.push(new Paren(array[i], i));
    }
    else if (array[i] === ')') {
      lastParen = parenStack.pop();
      if(!lastParen) {
        return i;
      }
      else if (lastParen.symbol !== '(') {
        return lastParen.index;
      }
    }
  }
  lastParen = parenStack.pop();
  if (lastParen) {
    return lastParen.index;
  }
  return -1;
}


function Paren(symbol, index) {
  this.symbol = symbol;
  this.index = index;
}


