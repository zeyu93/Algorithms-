var isBalanced = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  const traverseTree = (node, height) => {
    if (!node) return height ;
    return Math.max(
      traverseTree(node.left, height+1),
      traverseTree(node.right, height+1)
    );
  };
  let height = 1;
  let heightLeft = traverseTree(root.left, height);
  let heighRight = traverseTree(root.right, height);

  return Math.abs(heightLeft - heighRight) > 1;
};
