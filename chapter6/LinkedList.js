var Node = require('./node.js');

//initialize a new linked list
function LinkedList() {
  this.head = null;
}

//displays the value of each node in the linked list
LinkedList.prototype.printList = function() {
  var currentNode = this.head;

  while (currentNode && currentNode.getNextNode() !== null) {
    console.log(currentNode.getValue());
    currentNode = currentNode.getNextNode();
  }

  console.log(currentNode.getValue() || 'no entries in list');
};

//adds a node to the end of the list
LinkedList.prototype.addToEnd = function(value) {
  var currentNode = this.head;
  if (!this.head) {
    this.head = new Node(value);
  }
  else {
    while (currentNode.getNextNode()) {
      currentNode = currentNode.getNextNode();
    }
    currentNode.setNextNode(new Node(value));
  }
};

//returns a reference to the first node with a value of "value"
LinkedList.prototype.find = function(value) {
  var currentNode = this.head;

  while (currentNode && currentNode.getValue() != value) {
    currentNode = currentNode.getNextNode();
  }

  return currentNode || null;
};

//returns a reference to the first node with a value of "value"
LinkedList.prototype.findAndShow = function(value) {
  var currentNode = this.find(value);

  console.log(currentNode.getValue() || null);
};

//adds a node to the beginning of the list
LinkedList.prototype.addToStart = function(value) {
  var temp = new Node(value);
  temp.setNextNode(this.head);
  //console.log(temp);
  this.head = temp;
};

LinkedList.prototype.advance = function(value, n) {
  var currentNode = this.head;
  var mover, tail;
  while (currentNode.getNextNode().getValue() != value) {
    currentNode = currentNode.getNextNode();
  }

  if (!currentNode.getNextNode()) return false;

  mover = currentNode.getNextNode();

  currentNode.setNextNode(currentNode.getNextNode().getNextNode());

  for (var i = 0; i < n; i++) {
    currentNode = currentNode.getNextNode();
  }

  tail = currentNode.getNextNode();
  currentNode.setNextNode(mover);
  mover.setNextNode(tail);
};

//moves the first node with a value of "value" n places back in the list
LinkedList.prototype.back = function(value, n) {
  var currentNode = this.head;
  var chaserNode = this.head;
  var mover;
  var tail;
  for (var i = 0; i < n + 1; i++) {
    currentNode = currentNode.getNextNode();
  }

  while (currentNode && currentNode.getNextNode().getValue() != value) {
    chaserNode = chaserNode.getNextNode();
    currentNode = currentNode.getNextNode();
  }

  if (!currentNode.getNextNode()) return false;

  //removes node with value
  mover = currentNode.getNextNode();
  currentNode.setNextNode(currentNode.getNextNode().getNextNode());
  mover.setNextNode(null);

  //adds n links back
  tail = chaserNode.getNextNode().getNextNode();
  chaserNode.setNextNode(mover);
  mover.setNextNode(tail);

};

module.exports = LinkedList;
