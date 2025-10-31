import express from "express";
const app = express();
const PORT = 8000;

class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
  }
}

let N1 = new Node(10);
// let N2 = new Node(20);
// N1.next_node = N2;
// console.log(N1);

class LinkedList {
  // Singly linked list

  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  size() {
    // Returns the number of nodes in O(n) time
    let current = this.head;
    let count = 0;
    while (current) {
      count += 1;
      current = current.next_node;
    }
    return count;
  }

  //Adds new Node containing data at head of the list
  //Takes O(1) time

  add(data) {
    let new_node = new Node(data);
    new_node.next_node = this.head;
    this.head = new_node;
  }
}

let l = new LinkedList();
  l.add(1);
  l.add(2);
  l.add(3);
  l.add(4)
console.log(l.size());
console.log(l);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
