/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let answer = null;
    let dfs = [];
    if(cloned.val == target.val){
        answer = cloned;
    }else{
        let control = true;
        let subtree;
        if(cloned.left != undefined){
            dfs.push(cloned.left)
        }
        if(cloned.right != undefined){
            dfs.push(cloned.right)
        }
        while(control){
            subtree = dfs.pop();
            if(subtree.val == target.val){
               answer = subtree;
                control = false;
            }else{
                if(subtree.left != undefined){
                    dfs.push(subtree.left)
                }
                if(subtree.right != undefined){
                    dfs.push(subtree.right)
                }   
            }
        }
    }
    return answer;
};

