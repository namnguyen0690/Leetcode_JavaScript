/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return helper(root, 0) >= 0;
};

var helper = function (root, depth) {
  if (!root) return depth;
  var left = helper(root.left, depth + 1);
  var right = helper(root.right, depth + 1);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right);
};
