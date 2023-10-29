import {ListNode} from "../helpers/listNode";

// https://leetcode.com/problems/swap-nodes-in-pairs/description/

export function swapPairs(head: ListNode | null): ListNode | null {

    const recursive = (list: ListNode | null) => {
        if(!list || !list.next){
            return
        }

        const tmp = list.next.val
        list.next.val = list.val
        list.val = tmp
        recursive(list.next.next)
    }

    recursive(head)

    return head
}

// execute(() => arrayFromLinkedList(swapPairs(linkedListGenerator([1, 2, 3, 4]))))