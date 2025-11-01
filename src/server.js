import express from "express";
const app = express();
const PORT = 8000;

class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
  }
}

// let N1 = new Node(10);
// let N2 = new Node(20);
// N1.next_node = N2;
// console.log(N1);

class LinkedList {
  // Singly linked list

  constructor() {
    this.head = null;
    this.length = 0; // track size in O(1)
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    // Returns the number of nodes in O(1) time
    return this.length;
  }

  //Adds new Node containing data at head of the list
  //Takes O(1) time
  add(data) {
    let new_node = new Node(data);
    new_node.next_node = this.head;
    this.head = new_node;
    this.length += 1;
  }

  /*
   Search for the first node containing data that matches the key
   Return the node or 'Null' if not found
   Takes O(n)
  */

  search(key) {
    let curr = this.head;
    while (curr) {
      if (curr.data === key) {
        return curr.data;
      } else {
        curr = curr.next_node;
      }
    }
    return null;
  }

  //Returns an array of node for easy printing
  toArray() {
    const out = [];
    let current = this.head;
    while (current) {
      if (current === this.head) {
        out.push(`Head: ${current.data}`);
      } else if (current.next_node === null) {
        out.push(`Tail: ${current.data}`);
      } else {
        out.push(current.data);
      }
      current = current.next_node;
    }
    return out.join(" -> ");
  }
}

let l = new LinkedList();
l.add(10);
l.add(20);
l.add(30);
l.add(40);
// console.log(l.size());
// console.log(l.toArray());
// console.log(l);
console.log(l.search(10));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
