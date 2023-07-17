/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = [];
    let s2 = [];

    while(l1 != undefined){
        s1.unshift(l1.val);
        l1 = l1.next;
    }

    while(l2 != undefined){
        s2.unshift(l2.val);
        l2 = l2.next;
    }

    while(s1.length > s2.length){
        s2.push(0);
    }
    while(s2.length > s1.length){
        s1.push(0);
    }
    let answer = new ListNode();
    let aux = 0;
    for(let i = 0; i<s1.length; i++){
        let sum = s1[i] + s2[i] + aux
        answer.val = (sum)%10
        aux = Math.floor(sum/10)
        if(i == s1.length -1){
            if(aux == 1){
                answer = new ListNode(aux,answer)
            }
        }else{
            answer = new ListNode(0,answer);
        }
    }
    return answer;
};
