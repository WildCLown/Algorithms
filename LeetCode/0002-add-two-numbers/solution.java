/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode answer = new ListNode(0);
        ListNode listaux = answer;
        int aux = 0;
        while(l1 != null || l2 != null || carry == 1){
            if(l1 == null && l2 != null){
                if(carry == 1){
                    aux = l2.val + carry;
                    l2 = l2.next;
                    if(aux == 10){
                        aux = 0;
                    }else{
                        carry = 0;
                    }
                }else{
                    aux = l2.val;
                    l2 = l2.next;
                }
            }
            else if(l1 != null && l2 == null){
                if(carry == 1){
                    aux = l1.val +1;
                    l1 = l1.next;
                    if(aux == 10){
                        aux = 0;
                    }else{
                        carry = 0;
                    }
                }else{
                    aux = l1.val;
                    l1 = l1.next;
                }
            }else if(l1 == null && l2 == null){
                aux = 1;
                carry = 0;
            }else{
                aux = l1.val + l2.val + carry;
                l1 = l1.next;
                l2 = l2.next;
                if(aux>=10){
                    carry = 1;
                    aux = aux - 10;
                }else{
                    carry = 0;
                }
            }
            //iserir aux
                listaux.next = new ListNode(aux);
                listaux = listaux.next;
        }
        return answer.next;    
    }
}
