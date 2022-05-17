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
var deepestLeavesSum = function(root) {
    var answer = [];
    answer.push(root.val);
    if(root.left != undefined){
        pseudoBfs(root.left,1,answer);   
    }
    if(root.right != undefined){
       pseudoBfs(root.right,1,answer);
    }
    return answer[answer.length-1];
    
};

function pseudoBfs(root, deep,answer){
    if(answer[deep] == null){
        answer.push(root.val);
    }else{
        answer[deep]+= root.val
    }
    deep++;
    if(root.left != undefined){
        pseudoBfs(root.left,deep,answer);   
    }
    if(root.right != undefined){
       pseudoBfs(root.right,deep,answer);
    }
}
