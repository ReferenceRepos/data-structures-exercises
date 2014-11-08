//returns the index of the first unbalanced paren in a
//mathematical expressions. returns false if all parens
//are balanced
function findFirstMismatchedParen(expression) {
  var array = expression.split("");

  var i, parenStack = [];
  var lastParen;

  //loops through entire expression
  for (i = 0; i < array.length; i++) {
    if (array[i] == '(') {
      parenStack.push(new Paren(array[i], i));
    }
    else if (array[i] === ')') {
      lastParen = parenStack.pop();

      // ) is missing
      if(!lastParen) {
        return i;
      }
      // ( is missing
      else if (lastParen.symbol !== '(') {
        return lastParen.index;
      }
    }
  }
  lastParen = parenStack.pop();
  if (lastParen) {
    return lastParen.index;
  }
  return false;
}


function Paren(symbol, index) {
  this.symbol = symbol;
  this.index = index;
}

module.exports = findFirstMismatchedParen;