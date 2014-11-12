//Node object constructor
function Node(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

Node.prototype.setLeft = function(node) {
  this.leftChild = node;
};

Node.prototype.setRight = function(node) {
  this.rightChild = node;
};

Node.prototype.printTree = function() {

  //print left tree
  if (this.leftChild) {
    this.leftChild.printTree();
  }

  //print parent value
  console.log(this.value + " ");

  //print right tree
  if (this.rightChild) {
    this.rightChild.printTree();
  }
};

// pushes all entries in a tree into an array
Node.prototype.pushTree = function(array) {
  //print left tree
  if (this.leftChild) {
    this.leftChild.pushTree(array);
  }

  //print parent value
  array.push(this.value);

  //print right tree
  if (this.rightChild) {
    this.rightChild.pushTree(array);
  }
};

//adds node to tree with current node as the head
Node.prototype.addToTree = function(node) {
  if (node.value <= this.value && this.leftChild) {
    this.leftChild.addToTree(node);
  }
  else if (node.value <= this.value && !this.leftChild) {
    this.setLeft(node);
  }
  else if (node.value > this.value && this.rightChild) {
    this.rightChild.addToTree(node);
  }
  else if (node.value > this.value && !this.rightChild) {
    this.setRight(node);
  }
};

Node.prototype.findMaxChild = function() {
  if (this.rightChild) {
    return this.rightChild.findMaxChild();
  }
  return this.value;
};

Node.prototype.removeMaxChild = function() {
  var val;
  if (this.rightChild.rightChild) {
    return this.rightChild.removeMaxChild();
  }
  val = this.rightChild.value;
  this.rightChild = this.rightChild.leftChild;
  return val;
};

Node.prototype.findMinChild = function() {
  if (this.leftChild) {
    return this.leftChild.findMinChild();
  }
  return this.value;
};

Node.prototype.removeMinChild = function() {
  var val;
  if (this.leftChild.leftChild) {
    return this.leftChild.removeMinChild();
  }
  val = this.leftChild.value;
  this.leftChild = this.leftChild.rightChild;
  return val;
};

Node.prototype.countValues = function(count) {
  count.increment();
  if (this.leftChild) this.leftChild.countValues(count);
  if (this.rightChild) this.rightChild.countValues(count);
};

module.exports = Node;
