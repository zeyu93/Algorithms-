var isSymmetric = function(root) {
  if(!root) return true
  const isValid =(node1, node2)=>{
      if(!node1 && !node2) return true
      if(!node1 || !node2 || node1.val !== node2.val) return false
      return isValid(node1.left, node2.right) && isValid(node1.right, node2.left)
  }

  return isValid(root.left, root.right)
  
  
};