import express from "express";
const app = express();
const PORT = 8000;

class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
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

  add(data) {
    /*
    Adds new Node containing data at head of the list
    Takes O(1) time
    */

    let newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.length += 1;
    return newNode;
  }

  search(key) {
    /*
   Search for the first node containing data that matches the key
   Return the node or 'Null' if not found
   Takes O(n)
  */

    let curr = this.head;
    while (curr) {
      if (curr.data === key) {
        return curr.data;
      } else {
        curr = curr.nextNode;
      }
    }
    return null;
  }

  append(data) {
    /*
    Append a new Node at the tail 
    Appending takes O(n) time
    */
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) current = current.nextNode;
      current.nextNode = newNode;
    }
    this.length += 1;
    return newNode;
  }

  insert(data, index) {
    /* 
  Inserts a new Node containing at index position 
  Insertion takes O(1) time but finding the node at the 
  insertion point takes O(n) time
  */

    if (index < 0) throw new RangeError("Index must be >= 0"); //Defensive check

    if (index === 0) return this.add(data); // If index === 0, Insert at head

    if (index >= this.length) return this.append(data); //If index >= length, Append at tail

    let current = this.head;
    // Move index -1 steps forward
    for (let i = 0; i < index -1; i++) {
      current = current.nextNode;
    }
    // console.log(current);

    const newNode = new Node(data);
    const next = current.nextNode; // node currently at 'index'
    current.nextNode = newNode;
    newNode.nextNode = next;
  }

  toArray() {
    //Returns an array of node for easy printing

    const out = [];
    let current = this.head;
    while (current) {
      if (current === this.head) {
        out.push(`Head: ${current.data}`);
      } else if (current.nextNode === null) {
        out.push(`Tail: ${current.data}`);
      } else {
        out.push(current.data);
      }
      current = current.nextNode;
    }
    return out.join(" -> ");
  }
}

let l = new LinkedList();
l.add(10);
l.add(20);
l.add(30);
l.add(40);
// l.append(10);
// l.append(20);
// l.append(30);
// l.append(20);
// l.append(30);
// l.insert(12, 5);

// console.log(l.size());
console.log(l.toArray());
console.log(l.insert(12, 1));
console.log(l);

// console.log(l.search(10));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
