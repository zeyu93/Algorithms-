class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


let node3 = new Node(3)
let node2 = new Node(2, node3)
let node1 = new Node(1, node2)

//iterative
const reverseLinkedList = (node) =>{
  //pass head in
  let prev = null;
  let current = node
  while(current){
    let next = current.next;
    current.next = prev;
    prev = current
    current = next
  }
  console.log(prev)
  return prev
}

//recursive
const reverseLinkedListRecursive = (node)=>{

  const processNode = (node, prev=null) =>{
    if(!node ){
      console.log(prev)
      return prev
    }
    const temp = node.next ;

    node.next = prev
    processNode(temp, node)
  }

  return processNode(node)

}


reverseLinkedListRecursive(node1)
