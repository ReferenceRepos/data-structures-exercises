var Node = require('./nodeRepeated.js');
var Counter = require('./counter.js');
var fs = require('fs');
var S = require('string');
var _ = require('underscore');

function wordCount(filename) {
  this.head = null;
  this.array = readFile(filename);

  for (var i = 0; i < this.array.length; i++) {
    addToTree(this.array[i]);
  }

  return {wordArray: getValuesAsArray(),
  numWords: countWords()};
}

function readFile(filename) {
  array = [];
  var pageAsString = fs.readFileSync(filename).toString();
  var noPunct = S(pageAsString).stripPunctuation().s;
  var noWhiteSpace = S(noPunct).collapseWhitespace().s;
  var wordArray = noWhiteSpace.split(' ');
  wordArray = _.map(wordArray, function(num) {
    return num.toLowerCase();
  });
  return wordArray;
}

function addToTree(value) {
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
  }
  else {
    this.head.addToTree(node);
  }
}

function getValuesAsArray() {
  var array = [];
  this.head.pushTree(array);
  return array;
}

function countWords() {
  var count = new Counter();
  this.head.countValues(count);
}

//console.log(wordCount('./chapter10/testDocument.txt').wordArray);
module.exports = wordCount;
