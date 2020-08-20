// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(node) {
    this.head = new Node(node, this.head);
  }
  size() {
    let current = this.head;
    let counter = 0;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log("getLast", current);
    return current;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    let placeholder = this.head.next;
    this.head = placeholder;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let next = current.next;
    while (next.next) {
      current = next;
      next = next.next;
    }
    current.next = null;
    return;
  }

  insertLast(n) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(n);
      return;
    } else {
      this.head = new Node(n);
    }
  }

  getAt(n) {
    if (n < 0) return null;
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === n) {
        return node;
      }
      node = node.next;
      counter++;
    }
    console.log(node);
    return node;
  }

  removeAt(n) {
    if (!this.head) return;
    if (n === 0) {
      this.removeFirst();
      return;
    }
    let prev = this.getAt(n - 1);
    let next = this.getAt(n + 1);
    prev.next = next;
    return;
  }

  insertAt(n, index) {
    if (!this.head || index === 0) {
      this.insertFirst(n);
      return;
    }

    let prevNode = this.getAt(index - 1) || this.getLast();
    let nextNode = this.getAt(index);
    console.log("prev node:", prevNode, "nextNode:", nextNode);
    let newNode = new Node(n, nextNode);
  
    prevNode.next = newNode;
    return;
  }

  forEach(fn){
    let counter = 0
    let node = this.head;
    while(node){
      fn(node, counter);
      counter++;
      node = node.next;
    }
  }
}

let l = new LinkedList();
l.insertFirst(4);
l.insertFirst(3);
l.insertFirst(2);
l.insertFirst(1);

console.log(l)
module.exports = { Node, LinkedList };
