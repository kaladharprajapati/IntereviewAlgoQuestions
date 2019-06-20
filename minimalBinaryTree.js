const BST = require("./DataStructures/BST/BinarySearchTree");

// Given a sorted (increasing order) array, write an algorithm to create a binary tree with
// minimal height.

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const tree = new BST();

function createTree(arr) {
  if (arr.length <= 2) {
    return arr.forEach(i => tree.add(i));
  }

  const middle = Math.floor(arr.length / 2);
  tree.add(arr[middle]);
  arr = [...arr.slice(0, middle), ...arr.slice(middle + 1)];
  const leftArr = arr.slice(0, middle); /*?*/
  const rightArr = arr.slice(middle); /*?*/

  createTree(leftArr);
  createTree(rightArr);
}

createTree(arr);
console.log(tree);
