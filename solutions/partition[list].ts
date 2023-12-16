import {ListNode} from "../helpers/listNode";

// https://leetcode.com/problems/partition-list/

export function partition(head: ListNode | null, x: number): ListNode | null {

    const smallerHead = new ListNode()
    let lastSmallerNode = smallerHead;
    const pointerHead = new ListNode(0, head);
    let pointer = pointerHead;

    while(pointer.next){
        if(pointer.next.val < x){
            lastSmallerNode.next = pointer.next;

            lastSmallerNode = pointer.next;

            pointer.next = pointer.next.next

        }else{
            lastSmallerNode.next = null;
            pointer = pointer.next;
        }
    }

    lastSmallerNode.next = pointerHead.next

    return smallerHead.next

}