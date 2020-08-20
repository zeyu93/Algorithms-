// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if(!root) return []
  let result = [];
  let queue = [root, 'stopper']
  let counter = 0
  while(queue.length>1){
    let currentNode = queue.shift();
    if (currentNode === 'stopper'){
      result.push(counter)
      queue.push('stopper')
      counter = 0
    } else {
      queue.push(...currentNode.children)
      counter++
    }
  }
  return result


}

module.exports = levelWidth;
