/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        ArrayList teste = getNums(root1);
        ArrayList teste2 = getNums(root2);
        boolean answer = true;
        if(teste.size() != teste2.size()){
            answer = false;
        }else{
            for(int i = 0; i<teste.size();i++){
                if(teste.get(i) != teste2.get(i)){
                    answer = false;
                    break;
                }
            }
        }
        return answer;
    }
    public ArrayList getNums(TreeNode root1){
        ArrayList aux = new ArrayList();
        Stack<TreeNode> pilha = new Stack();
        pilha.push(root1);
        while(!pilha.empty()){
            TreeNode blim = pilha.pop();
            if(blim.left == null && blim.right == null){
                aux.add(blim.val);
            }else{
                if(blim.right != null){
                    pilha.push(blim.right);
                }
                if(blim.left != null){
                    pilha.push(blim.left);
                }
            }
        }
        return aux;
    }
}
