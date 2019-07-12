// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Given a binary tree, return all paths from the root to leaves.
// For example, given the tree:

//    1
//   / \
//  2   3
//     / \
//    4   5
// Return [[1, 2], [1, 3, 4], [1, 3, 5]].

const BST = require("./DataStructures/BST/BinarySearchTree");

let root = new BST();
root.add(4);
root.add(3);
root.add(1);
root.add(10);
root.add(2);
root.add(6);
root.add(7);
root.add(5);

function pathToLeafs(root, path = [], paths = []) {
  if (!root.left && !root.right) {
    paths.push([...path, root.value]);
  } else {
    if (root.left) {
      pathToLeafs(root.left, [...path, root.value], paths);
    }

    if (root.right) {
      pathToLeafs(root.right, [...path, root.value], paths);
    }
  }

  return paths;
}

console.log(pathToLeafs(root));
