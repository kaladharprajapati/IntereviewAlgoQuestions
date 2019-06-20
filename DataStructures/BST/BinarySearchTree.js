export default class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.parent = null;
  }

  add(value) {
    const Node = new BinarySearchTree(value);

    let currentNode = this;

    while (
      (Node.value <= currentNode.value && currentNode.right !== null) ||
      (Node.value > currentNode.value && currentNode.left !== null)
    ) {
      if (Node.value <= currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    if (Node.value <= currentNode.value) {
      Node.parent = currentNode;
      currentNode.right = Node;
    } else {
      Node.parent = currentNode;
      currentNode.left = Node;
    }
  }

  delete(value) {
    function findInOrderSuccessor(node) {
      const leftChild = node.left;
      let currentNode = leftChild;
      while (currentNode.right) {
        currentNode = currentNode.right;
      }
      return currentNode;
    }

    const nodeToRemove = this.search(value);

    if (!nodeToRemove) {
      return null;
    }

    const nodeToRemoveParent = nodeToRemove.parent;

    // if the node to delete is a leaf
    if (!nodeToRemove.left && !nodeToRemove.right) {
      // assign the parent with null on the proper branch
      // and by doing so remove the linked node
      if (nodeToRemove.value >= nodeToRemoveParent.left.value) {
        nodeToRemoveParent.left = null;
      } else {
        nodeToRemoveParent.right = null;
      }

      // if the node to delete has exactly one child
    } else if (!nodeToRemove.left && nodeToRemove.right) {
      // check if this is the root
      if (!nodeToRemoveParent) {
        nodeToRemove.right = nodeToRemove.right;
        nodeToRemove.value = nodeToRemove.value;
        nodeToRemove.parent = null;
      }
      // check if the node to remove is the right node
      else if (nodeToRemoveParent.right === nodeToRemove) {
        // if so, assign the parent with the child of the node to delete
        // by doing so, we preserved all its children but we romoved itself
        nodeToRemoveParent.right = nodeToRemove.right;

        // check if the node to remove is the left node
      } else {
        // if so, assign the parent with the child of the node to delete
        // by doing so, we preserved all its children but we romoved itself
        nodeToRemoveParent.left = nodeToRemove.right;
      }

      // same process as on top only for the scenario
      // where there is left child and or right child
    } else if (!nodeToRemove.right && nodeToRemove.left) {
      if (!nodeToRemoveParent) {
        nodeToRemove.left = nodeToRemove.left;
        nodeToRemove.value = nodeToRemove.value;
        nodeToRemove.parent = null;
      } else if (nodeToRemoveParent.right === nodeToRemove) {
        nodeToRemoveParent.right = nodeToRemove.left;
      } else {
        nodeToRemoveParent.left = nodeToRemove.left;
      }
    } else {
      // if there is two childer for the node to remove
      // find the in-order successor and assign its value
      // to the nodeToRemove value, and its left childer

      const inOrderSuccessor = findInOrderSuccessor(nodeToRemove);

      // assiging the nodeToRemove.value to the
      nodeToRemove.value = inOrderSuccessor.value;

      // because the inOrderSuccessor might have children
      // we will assign it to the right child of the inOrderSuccessor parent
      inOrderSuccessor.parent.right = inOrderSuccessor.left;
    }

    return this;
  }

  traverse(node) {
    let holder = [];

    if (!node) {
      return this.traverse(this);
    }

    if (node.right) {
      holder = holder.concat(this.traverse(node.right));
    }

    holder.push(node.value);

    if (node.left) {
      holder = holder.concat(this.traverse(node.left));
    }

    return holder;
  }

  search(value, node) {
    if (!node) {
      return this.search(value, this);
    }

    if (node.value === value) {
      return node;
    }

    if (node.value !== value && !node.right && !node.left) {
      return null;
    }

    if (value > node.value && node.left) {
      return this.search(value, node.left);
    }

    if (value < node.value && node.right) {
      return this.search(value, node.right);
    }
  }
}

const root = new BinarySearchTree(10); /*?*/

root.add(13);
root.add(10.5);
root.add(10.75);

const path = root.traverse();
console.log(path);
console.log(root.search(13));
console.log(root.delete(10));
console.log(root.traverse());
