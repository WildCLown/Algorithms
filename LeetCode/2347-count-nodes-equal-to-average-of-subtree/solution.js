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
//2n+1 || 2n+2
var answer = 0;
var averageOfSubtree = function(root) {
    let answerx = 0;
    if(root == null) return 0;
    doFon(root);
    answerx = answer;
    answer = 0;
    return answerx;
};
function doFon(root){
    let total = 0;
    let qtt = 0;
    let aux;
    if(root.left != null){
        aux = doFon(root.left);
        total+= aux[0];
        qtt+= aux[1];
    }
    if(root.right != null){
        aux = doFon(root.right);
        total+= aux[0];
        qtt+= aux[1];
    }
    total+=root.val;
    qtt++;
    if(Math.floor(total/qtt) == root.val) answer++;
    // console.log("Total " + total + " qtt " + qtt + " root " + root.val);
    // console.log("answer " + answer);
    // console.log("FON");
    return [total,qtt];
    
}

/*
[4,8,5,0,1,null,6]
0 1 2 3 4 5 6

*/
