function Stack() {
  this.stack = [];

}

Stack.prototype.push = function(value) {
  this.stack.push(value);
};

Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};

Stack.prototype.pop = function() {
  return this.stack.pop();
};

Stack.prototype.toString = function() {
  return this.stack.toString();
};

module.exports = Stack;