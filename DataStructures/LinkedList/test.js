const LinkedList = require("./LinkedList");
console.log(module.exports);
const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log(list);
console.log(list.has(10));
console.log(list.has(3));
console.log(list.getHead().value);
console.log(list.removeNode(3));
console.log(list.getAllNodes());
