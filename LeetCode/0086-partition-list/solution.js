/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let before = new ListNode(0);
    let after = new ListNode(0);
    let tailB4 = before;
    let tailAfter = after;
    while(head != undefined){
        if(head.val >= x){
            tailAfter.next = head;
            tailAfter = tailAfter.next;
        }else{
            tailB4.next = head;
            tailB4 = tailB4.next;
        }
        head = head.next;
    }
    tailAfter.next = null;
    tailB4.next = after.next;
    return before.next;
};
