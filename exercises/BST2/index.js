class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(5);
root.right.left = new Node(3);
root.right.right = new Node(7);

const map = new Map()

const populateMap = (node, parent, map)=>{
  if(!node){
    return
  }
  map.set(node, parent);
  populateMap(node.left, node, map)
  populateMap(node.right, node, map)
  return
}

populateMap(root, null, map)
console.log(map)

class BST {
  constructor(root) {
    this.root = root;
  }

  insert(val) {
    if (this.findNode(val)) {
      console.log("node already exist");
      return;
    }
    let newNode = new Node(val);
    let current = this.root;

    while (current) {
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = newNode;
          return
        } else {
          current = current.left;
        }
      }
    }
    return
  }

  delete(val) {
    let nodeToBeDeleted = findNode(val);
    

  }

  preOrderPrint() {
    const traversePreOrder = node => {
      if (!node) {
        return;
      }
      console.log(node.val);
      traversePreOrder(node.left);
      traversePreOrder(node.right);
    };

    return traversePreOrder(this.root);
  }

  findNode(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) {
        console.log(current);
        return current;
      } else if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return null;
  }
}

let testBst = new BST(root);

testBst.preOrderPrint();

testBst.findNode(7)
