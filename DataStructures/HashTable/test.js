const HashTable = require("./hashTable");

const map = new HashTable();

console.log(map.set("hello", "world"));
console.log(map.set("hello", "people"));
console.log(map.set("hell", "people"));
console.log(map.get("hello"));
console.log(map.get("hell"));
console.log(map.get("hel"));
console.log(map.set("world", "yey"));
map;
