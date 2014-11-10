function DoubleNode(val) {
  this.value = val;
  this.nextNode = null;
  this.previousNode = null;
}

DoubleNode.prototype.getNextNode = function() {
  return this.nextNode;
};

DoubleNode.prototype.getValue = function() {
  return this.value;
};

module.exports = DoubleNode;
