const inorderSuccessor = (root, int) =>{
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
  
  const parentMap = populateMap(root, null, map)

  const traverseInorder = (node, marker=false) =>{
    if(!node){
      return false
    }
   
    if(traverseInorder(node.left)){
      return node
    }
    //do something  
    if(node.val === int){
      return true
    }
    if(traverseInorder(node.right)){
      return node
    }

    return

  }
  return traverseInorder(root)
}