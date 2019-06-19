import BST from "./BinarySearchTree";

const root = new BST(10); /*?*/

root.add(8);
root.add(9);
root.add(11);
root.add(12);
root.add(13);
root.add(10.5);
root.add(10.75);

const path = root.traverse();
console.log(path);
console.log(root.search(13));
console.log(root.delete(10));
console.log(root.traverse());
