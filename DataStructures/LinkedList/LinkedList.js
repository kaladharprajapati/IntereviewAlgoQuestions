class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(item) {
    if (!this.value) {
      this.value = item;
      return;
    }
    let currentNode = this;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    const node = new LinkedList(item);
    currentNode.next = node;
  }

  has(item) {
    let currentNode = this;

    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === item) {
        return currentNode;
      }
    }

    return null;
  }
}

module.exports = LinkedList;
