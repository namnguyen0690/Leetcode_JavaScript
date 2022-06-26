/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return helper(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    postorder.length - 1
  );
};

var helper = function (inorder, postorder, inStart, inEnd, postIndex) {
  if (inStart > inEnd || postIndex < 0) return null;

  var index = 0;
  var root = new TreeNode(postorder[postIndex]);

  for (var i = inStart; i <= inEnd; i++) {
    if (inorder[i] === root.val) {
      index = i;
      break;
    }
  }

  root.right = helper(inorder, postorder, index + 1, inEnd, postIndex - 1);
  root.left = helper(
    inorder,
    postorder,
    inStart,
    index - 1,
    postIndex - 1 - (inEnd - index)
  );

  return root;
};
