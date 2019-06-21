const LinkedList = require("../LinkedList/LinkedList");

class HashTable {
  constructor() {
    this.map = [];
  }

  hash(string) {
    return (
      Math.abs(
        string.split("").reduce((a, b) => (a << 5) + a + b.charCodeAt(0), 5381)
      ) % 1024
    );
  }

  set(prop, value) {
    const idx = this.hash(prop); /*?*/
    // if no item in the index
    if (!this.map[idx]) {
      this.map[idx] = new LinkedList([prop, value]);
      return this.map[idx];
    }
    // if there is item
    // we need to check if the given prop exist
    if (!!this.map[idx]) {
      let current = this.map[idx];
      // searching if the prop passed exist
      // if so we overide it with the new value
      // if not we chain it at the end
      if (!current.next && current.value[0] === prop) {
        current.value[0] === prop;
        return current;
      }

      // when we have multiple nodes
      // search the prop in them
      // if it found update the value
      // if it didnt found, link new node
      while (current.next) {
        current = current.next;
        if (current.value[0] === prop) {
          current.value = [prop, value];
          return current;
        }
      }
      current.next = new LinkedList([prop, value]);
      return current.next;
    }
    return this.map[idx];
  }

  get(prop) {
    const idx = this.hash(prop);

    // if no item in the index
    if (!this.map[idx]) {
      return null;
    }

    // if there is only one node in the index
    if (!this.map[idx].next) {
      return this.map[idx].value[1];

      // if there is multiple nodes in the index
    } else {
      let current = this.map[idx];
      while (current.next) {
        current = current.next;
        // search for the right prop name and return its value
        if (current.value[0] === prop) {
          return current.value[1];
        }
      }
      // if no prop has found return null
      return null;
    }
  }
}

module.exports = HashTable;
