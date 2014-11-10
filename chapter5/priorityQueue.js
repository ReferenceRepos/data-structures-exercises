// code from textbook
function Queue() {
  this.dataStore = [];
}

//modification of code from confirmed errata page on manufacturer's website
Queue.prototype.dequeue = function() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code > this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
};

function Data(value, code) {
  this.value = value;
  this.code = code;
}

var queue = new Queue();

queue.dataStore.push(new Data("Linda", 8));
queue.dataStore.push(new Data("Fred", 3));
queue.dataStore.push(new Data("Joe", 4));
queue.dataStore.push(new Data("John", 1));
queue.dataStore.push(new Data("Sally", 2));

console.log(queue.dequeue());
