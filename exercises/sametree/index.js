function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q || q.val !== p.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

isSameTree(p, q);
