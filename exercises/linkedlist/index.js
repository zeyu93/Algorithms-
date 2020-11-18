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

  forEach(fn) {
    let counter = 0;
    let node = this.head;
    while (node) {
      fn(node, counter);
      counter++;
      node = node.next;
    }
  }
}

// let l = new LinkedList();
// l.insertFirst(4);
// l.insertFirst(3);
// l.insertFirst(2);
// l.insertFirst(1);

let node = new Node("a");
let node1 = new Node("b");
let node2 = new Node("c");
let node3 = new Node("d");

node.next = node1;
node1.next = node2;
node2.next = node3;



const cloneList= (head) =>{
  const dummy = new Node(-1)
  let current = dummy
  
  while(head){
    let newNode = new Node(head.data + 'cloned')
    current.next = newNode
    head = head.next
    current = current.next
  }

  console.log(dummy.next)
  return dummy.next
}

cloneList(node)
console.log(node)

const swapInPairs = head => {
  let dummy = new Node(-1);
  let holder = dummy;
  while (head) {
    console.log(head)

    let node1 = head;
    let node2 = node1 ? head.next : null 
    let node3 = node2 ? node2.next : null

    if (!node1.next) {
      dummy.next = node1;
    } else {
      dummy.next = node2;
      node2.next = node1;
      node1.next = node3
    }
    dummy = dummy.next.next;
    head = head.next.next;
    console.log(head)
  }
  return holder.next;
};


module.exports = { Node, LinkedList };
