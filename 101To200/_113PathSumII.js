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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  var res = [];
  helper(root, sum, [], res);
  return res;
};

var helper = function (root, sum, now, res) {
  if (!root) return;

  now.push(root.val);

  if (root.val === sum && !root.left && !root.right) res.push(now);

  helper(root.left, sum - root.val, Array.from(now), res);
  helper(root.right, sum - root.val, Array.from(now), res);
};
