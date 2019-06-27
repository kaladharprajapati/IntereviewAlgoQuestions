const LinkedList = require("../LinkedList/LinkedList");

class Queue extends LinkedList {
  go() {
    const q = this.value;
    if (this.next) {
      this.value = this.next.value;
      this.next = this.next.next;
    } else {
      this.next = null;
      this.value = null;
    }
    return q;
  }
}

module.exports = Queue;
