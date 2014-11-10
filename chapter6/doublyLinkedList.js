var Node = require('./doubleNode.js');

//initialize a new linked list
function DoubleLinkedList() {
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
  currentNode.getNextNode().previousNode = currentNode;
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
  this.head = temp;
  this.head.getNextNode().previousNode = this.head;
};

module.exports = DoubleLinkedList;
