import BST from "./BinarySearchTree";

const root = new BST(); /*?*/
root.add(10);
root.add(13);
root.add(8);
root.add(9);
root.add(6);
root.add(14);
root.add(12);

root;
const path = root.dfsInOrder();
const pathPre = root.dfsPreOrder();
const pathPost = root.dfsPostOrder();
const pathBFS = root.bfs();
console.log(path);
console.log(pathPre);
console.log(pathPost);
console.log(pathBFS);
console.log(root.search(13));
console.log(root.delete(10));
