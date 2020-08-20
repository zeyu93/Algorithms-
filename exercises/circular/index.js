// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node

function circular(list) {
  let hash = {};
  let node = list.head;
  while (node){
    if(hash[node.data]){
      return true
    }
    hash[node.data] = node
    node = node.next  
    console.log(node)
  }
  return false
}
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  // c.next = b;
  circular(l)

module.exports = circular;
