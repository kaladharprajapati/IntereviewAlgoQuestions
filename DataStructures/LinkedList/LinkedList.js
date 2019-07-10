class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  removeNode(value) {
    let current = this.head;
    let prev = current;
    while (current) {
      if (current.value === value) {
        if (current === this.tail) {
          this.tail = prev;
        }

        prev.next = current.next;

        return current;
      }
      prev = current;
      current = current.next;
    }

    return null;
  }

  getAllNodes() {
    const holder = [];
    let current = this.head;

    while (current) {
      holder.push(current.value);
      current = current.next;
    }

    return holder;
  }

  has(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}

module.exports = LinkedList;
