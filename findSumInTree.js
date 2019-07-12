// You are given a binary tree in which each node contains a value. Design an algorithm
// to print all paths which sum up to that value. Note that it can be any path in the tree
// - it does not have to start at the root.

const BST = require("./DataStructures/BST/BinarySearchTree");

let root = new BST(); /*?*/
root.add(4);
root.add(3);
root.add(1);
root.add(10);
root.add(2);
root.add(6);
root.add(7);
root.add(5);

function traverse(root, desireSum, paths = []) {
  findSumInTree(root, desireSum, [], 0, paths);

  if (root.left) {
    traverse(root.left, desireSum, paths);
  }

  if (root.right) {
    traverse(root.right, desireSum, paths);
  }
  return paths;
}

function findSumInTree(root, desireSum, tempPaths, currentSum, paths) {
  if (currentSum + root.value === desireSum) {
    tempPaths.push(root.value);
    return paths.push(tempPaths);
  }

  if (currentSum + root.value > desireSum) {
    return;
  }

  if (root.left) {
    findSumInTree(
      root.left,
      desireSum,
      [root.value, ...tempPaths],
      currentSum + root.value,
      paths
    );
  }

  if (root.right) {
    findSumInTree(
      root.right,
      desireSum,
      [root.value, ...tempPaths],
      currentSum + root.value,
      paths
    );
  }
}

console.log(traverse(root, 3));
