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
 * @return {number}
 */
var sumNumbers = function(root) {
    let answer = 0;
    if(root.val == null){
        return answer;
    }

    return dfsSumUp(root, 0, '');

};

function dfsSumUp(root, totalValue, temporaryValue){

    let answer = totalValue;
    let thisTemporary = temporaryValue + '' + root.val;

    if(root.right == null && root.left == null){
        return parseInt(thisTemporary)
    }

    if(root.left != null){
        let sumupL = dfsSumUp(root.left, 0, thisTemporary);
        answer += sumupL;
    }

    if(root.right != null){
        let sumupR = dfsSumUp(root.right, 0, thisTemporary);
        answer += sumupR;
    }

    return answer;
}
