var Deque = require('./deque.js');

module.exports = function(str) {
  var strAsArr = str.split('');

  var deque = new Deque(strAsArr);

  while (deque.peekEnd() && deque.peekEnd() === deque.peekStart()) {
    deque.removeStart();

    if (deque.peekEnd()) {
      deque.removeEnd();
    }
  }

  if (deque.peekEnd()) {
    return false;
  }
  return true;
};
