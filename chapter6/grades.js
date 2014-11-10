//test single linked list
var LL = require('./LinkedList.js');
var grades = new LL();

grades.addToStart({name: 'Linda', grade: '95'});
grades.addToStart({name: 'Sam', grade: '80'});
grades.addToStart({name: 'Fred', grade: '70'});
grades.addToStart({name: 'Elsa', grade: '100'});
grades.printList();

//test doubly linked list
var DLL = require('./DoubleLinkedList.js');
var grades = new LL();

grades.addToStart({name: 'Linda', grade: '95'});
grades.addToStart({name: 'Sam', grade: '80'});
grades.addToStart({name: 'Fred', grade: '70'});
grades.addToStart({name: 'Elsa', grade: '100'});
grades.printList();
