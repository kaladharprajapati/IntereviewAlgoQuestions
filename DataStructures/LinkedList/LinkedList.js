export default class LinkedList {
  constructor(head) {
    this.head = head;
    this.next = null;
  }

  add(item) {
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
      if (currentNode.head === item) {
        return currentNode;
      }
    }

    return null;
  }
}
