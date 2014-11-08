
var Node = require('./node.js');

var ll = new CircularLinkedList();

//initialize a new linked list
function CircularLinkedList() {
  this.head = null;
}

CircularLinkedList.prototype.printList = function() {
  var currentNode = this.head;

  while (currentNode && currentNode.getNextNode() !== this.head) {
    console.log(currentNode.getValue());
    currentNode = currentNode.getNextNode();
  }

  console.log(currentNode.getValue() || "linked list is empty");

};

CircularLinkedList.prototype.addToEnd = function(value) {
  var currentNode = this.head;
  if (!this.head) {
    this.head = new Node(value);
    this.head.setNextNode(this.head);
  }
  else {
    while(currentNode.getNextNode() && currentNode.getNextNode() != this.head) {
      currentNode = currentNode.getNextNode();
    }
    currentNode.setNextNode(new Node(value));
    currentNode.getNextNode().setNextNode(this.head);
  }
};

CircularLinkedList.prototype.addToStart = function(value) {
  var temp = new Node(value);
  temp.setNextNode(head);
  head = temp;
};

CircularLinkedList.prototype.advance = function(n) {
  var currentNode = this.head;
  var temp = currentNode;
  this.head = this.head.getNextNode();
  for (var i = 0; i < n; i++) {
    temp = temp.getNextNode();
  }

  currentNode.setNextNode(temp.getNextNode());
  temp.setNextNode(currentNode);
};

CircularLinkedList.prototype.deleteEveryNthDude = function(n, armySize) {
  var currentNode;

  for (var m = 1; m <= armySize; m++) {
    this.addToEnd(m);
  }

  currentNode = this.head;
  for (var j = 0; j < armySize - 2; j++) {
    for (var i = 0; i < n - 2; i++) {
      currentNode = currentNode.getNextNode();
    }

    if (currentNode.getNextNode() == this.head) {
      this.head = this.head.getNextNode();
    }
    currentNode.setNextNode(currentNode.getNextNode().getNextNode());
    currentNode = currentNode.getNextNode();
  }
};

ll.deleteEveryNthDude(3, 41);

ll.printList();

