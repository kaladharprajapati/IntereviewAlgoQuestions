// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// Invert a binary tree.
// For example, given the following tree:

//     a
//    / \
//   b   c
//  / \ /
// d  e f
// should become:

//   a
//  / \
//  c  b
// \  / \
// f e  d

const BST = require("./DataStructures/BST/BinarySearchTree");

let root = new BST();
root.add(10);
root.add(12);
root.add(11);
root.add(13);
root.add(8);
root.add(9);
root.add(7);

function invertTree(root) {
  if (root.left || root.right) {
    const tempLeft = root.left;
    const tempRight = root.right;
    [root.left, root.right] = [tempRight, tempLeft];

    if (root.left) {
      invertTree(root.left);
    }

    if (root.right) {
      invertTree(root.right);
    }
  }
  return root;
}

console.log(invertTree(root).dfsInOrder());
