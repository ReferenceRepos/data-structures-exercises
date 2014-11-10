function Deque(begArray) {
  this.array = begArray;
}

Deque.prototype.addStart = function(obj) {
  this.array.unshift(obj);
};

Deque.prototype.removeStart = function() {
  return this.array.shift();
};

Deque.prototype.removeEnd = function() {
  return this.array.pop();
};

Deque.prototype.addEnd = function(obj) {
  this.array.push(obj);
};

Deque.prototype.peekEnd = function() {
  return this.array[this.array.length - 1];
};

Deque.prototype.peekStart = function() {
  return this.array[0];
};

Deque.prototype.print = function() {
  console.log(this.array);
};

module.exports = Deque;
