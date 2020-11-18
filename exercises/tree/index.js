// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(child => {
      return child.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let queue = [this.root];

    while (queue.length) {
      let currentNode = queue.shift();
      fn(currentNode)
      queue.push(...currentNode.children);
    }
  }

  traverseDFS(fn){
    let stack = [this.root];
    while(stack.length){
      let currentNode = stack.shift(); 
      fn(currentNode)
      stack.unshift(...currentNode.children)
    }
  }
}

const t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("c");
t.root.add("d");
t.root.children[0].add("g");
t.root.children[1].add("h");
t.traverseBF(node => (node.data += 10));

module.exports = { Tree, Node };
