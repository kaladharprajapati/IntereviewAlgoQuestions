// Implement a function to check if a tree is balanced 
// For the purposes of this question, 
// a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one

const BST = require("./DataStructures/BST/BinarySearchTree");


const root = new BST();
root.add(10);
root.add(13);
root.add(8);
root.add(9);
root.add(6);
root.add(14);
root.add(12);
root.add(16);
root.add(18);


const leafsLvl = {};
let isBalanced = true;

function isTreeBalanced(root, lvl = 0) {

    if (!root.left && !root.right)  {
        if (!leafsLvl[lvl]) {
            leafsLvl[lvl] = lvl;

            for (const key in leafsLvl) {
                if (Math.abs(lvl - leafsLvl[key]) > 1) {
                    isBalanced = false;
                    break;
                }                 
            }
        } 
    }
    if (isBalanced) {
        if (root.left) isTreeBalanced(root.left , lvl + 1);
        if (root.right) isTreeBalanced(root.right, lvl + 1);
    }

    
}

isTreeBalanced(root);
console.log(isBalanced);