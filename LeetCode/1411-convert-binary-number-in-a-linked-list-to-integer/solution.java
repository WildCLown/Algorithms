/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public int getDecimalValue(ListNode head) {
        int answer = 0;
        while(head != null){
            int aux = head.val;
            answer *= 2;
            answer += aux;
            head = head.next;
        }
        return answer;
    }
}
