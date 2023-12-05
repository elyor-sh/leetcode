import { ListNode } from "../helpers/listNode"

// https://leetcode.com/problems/reverse-linked-list-ii/description/

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    
  if(!head || !head.next||left===right){
    return head
  }

    let current: ListNode | null = head
    let prev:ListNode | null = null
    let targetTail:ListNode | null = null
    let targetHeadPrev:ListNode | null = null
    let next: ListNode | null=null

    let withinTarget:boolean=false

    for(let i=1;i<=right;i++){

      if(!current){
        break
      }

        next=current.next

        if(i===left){
            withinTarget=true
        }
        
        if(withinTarget){
           
            current.next = prev
            prev = current
            if(i===right){
                targetTail=current
                while(targetTail.next){
                    targetTail=targetTail.next
                }
            }else{
                current=next
            }
        }else{
            if(i + 1 === left) {
                targetHeadPrev = current
                targetHeadPrev.next=null
            }
        }
    
        current=next
    }
    
    if(left===1){
        head=prev
        targetTail!.next=next
    }else{
        targetHeadPrev!.next = prev
        targetTail!.next=next
    }
    
    return head
}