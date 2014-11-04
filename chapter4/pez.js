console.log(eliminate([2,4,3,1,2,3,4,5,2,3,2], 2));

//takes in an array, returns an array with all entries equal to "toEliminate"
//removed
function eliminate(stack, toEliminate) {
  var i, tempStack = [], temp;
  var initialLength = stack.length;

  //pop each item off the stack
  while (stack.length) {
    temp = stack.pop();

    //discard entries equal to toEliminate
    if (temp != toEliminate) {
      tempStack.push(temp);
    }
  }

  //push values back onto original stack
  initialLength = tempStack
  while (tempStack.length) {
    stack.push(tempStack.pop());
  }

  return stack;
}
