function Node(val) {
  this.value = val;
  this.nextNode = null;
}

Node.prototype.getNextNode = function() {
  return this.nextNode;
};

Node.prototype.setNextNode = function(node) {
  this.nextNode = node;
};

Node.prototype.getValue = function() {
  return this.value;
};

module.exports = Node;
