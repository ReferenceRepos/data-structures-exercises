var Node = require('./node.js');
var Counter = require('./counter.js');

function BinarySearchTree() {
  this.head = null;
}

BinarySearchTree.prototype.addToTree = function(value) {
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
  }
  else {
    this.head.addToTree(node);
  }
};

BinarySearchTree.prototype.getValuesAsArray = function() {
  var array = [];
  this.head.pushTree(array);
  return array;
};

BinarySearchTree.prototype.countValues = function() {
  var count = new Counter();
  this.head.countValues(count);
  return count.getValue();
};

BinarySearchTree.prototype.countEdges = function() {
  return this.countValues() - 1;
};

BinarySearchTree.prototype.getMinValue = function() {
  return this.head.findMinChild();
};

BinarySearchTree.prototype.getMaxValue = function() {
  return this.head.findMaxChild();
};

BinarySearchTree.prototype.removeMinNode = function() {
  return this.head.removeMinChild();
};

BinarySearchTree.prototype.removeMaxNode = function() {
  return this.head.removeMaxChild();
};

module.exports = BinarySearchTree;
