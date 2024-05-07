/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    let reversedList = reverseList(head, null);

    let reversedMultiplied = multiplyReversedList(reversedList, false, reversedList);

    return reverseList(reversedMultiplied, null);
};

function reverseList(mainNode, reversedNode){
    reversedNode = new ListNode(mainNode.val,reversedNode)
    if(mainNode.next == null){
        return reversedNode
    }

    return reverseList(mainNode.next, reversedNode)
}

function multiplyReversedList(list, plusOne, listHead){
    let nextOne = false;
    let thisVal = list.val*2 + plusOne;
    if(list.val >= 5){
        nextOne = true;
        list.val = thisVal%10;
        if(list.next == null){
            list.next = new ListNode(1,null);
            return listHead;
        }
    }else{
        list.val = thisVal;
    }

    if(list.next == null){
        return listHead;
    }

    return multiplyReversedList(list.next, nextOne, listHead)
}

