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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    return removeLeaves(root, target)
};

function removeLeaves(root, target) {
    if(root == null) return null;

    root.left = removeLeaves(root.left, target);
    root.right = removeLeaves(root.right, target);

    if(root.val == target && root.left == root.right){
        return null;
    }

    return root;
} 
