export class ListNode {
  val: number
  next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }
}


export function linkedListGenerator(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

export const arrayFormLinkedList = (list: ListNode | null): number[] => {

  if(!list) return []

  const res: number[] = []

  const recursive = (l: ListNode) => {
    if(l.val){
      res.push(l.val)
    }

    if(l.next){
      recursive(l.next)
    }
  }

  recursive(list)

  return res
}

export const getLengthLinkedList = (head: ListNode) => {
  let length = 0

  let h: ListNode | null = head

  while(h) {
      length++
      h = h.next
  }

  return length
}