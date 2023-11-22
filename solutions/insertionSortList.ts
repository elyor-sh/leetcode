import { ListNode } from "../helpers/listNode"

// https://leetcode.com/problems/insertion-sort-list/description/

export function insertionSortList(head: ListNode | null): ListNode | null {

    let tmpList = new ListNode()
    let current = head

    while (current){
      let prev = tmpList

      while(prev.next && prev.next.val <= current.val){
        prev = prev.next
      }

      let next = current.next

      current.next = prev.next
      prev.next = current

      current = next
    }


    return tmpList.next
};