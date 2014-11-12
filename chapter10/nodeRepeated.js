//Node object constructor
function NodeRepeated(value) {
  this.value = value;
  this.occurances = 1;
  this.leftChild = null;
  this.rightChild = null;
}

NodeRepeated.prototype.setLeft = function(node) {
  this.leftChild = node;
};

NodeRepeated.prototype.setRight = function(node) {
  this.rightChild = node;
};

NodeRepeated.prototype.printTree = function() {
  var times = this.occurances;
  //print left tree
  if (this.leftChild) {
    this.leftChild.printTree();
  }

  //print parent value "occurances" times
  while (times--) {
    console.log(this.value + " ");
  }

  //print right tree
  if (this.rightChild) {
    this.rightChild.printTree();
  }
};

// pushes all entries in a tree into an array
NodeRepeated.prototype.pushTree = function(array) {
  var times = this.occurances;

  //print left tree
  if (this.leftChild) {
    this.leftChild.pushTree(array);
  }

  //print parent value
  array[this.value] = this.occurances;
  //array.push({word:this.value,
  //occurances: this.occurances});

  //print right tree
  if (this.rightChild) {
    this.rightChild.pushTree(array);
  }
};

//adds node to tree with current node as the head
NodeRepeated.prototype.addToTree = function(node) {
  if (node.value == this.value) {
    this.occurances++;
  }
  else if (node.value < this.value && this.leftChild) {
    this.leftChild.addToTree(node);
  }
  else if (node.value < this.value && !this.leftChild) {
    this.setLeft(node);
  }
  else if (node.value > this.value && this.rightChild) {
    this.rightChild.addToTree(node);
  }
  else if (node.value > this.value && !this.rightChild) {
    this.setRight(node);
  }
};

NodeRepeated.prototype.countValues = function(count) {
  var times = this.occurances;
  while (times--) {
    count.increment();
  }
  if (this.leftChild) this.leftChild.countValues(count);
  if (this.rightChild) this.rightChild.countValues(count);
};

module.exports = NodeRepeated;
