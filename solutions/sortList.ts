import { ListNode } from "../helpers/listNode"


// Merge sort
export function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next?.next;
  }

  const rightSub = sortList(slow.next);
  slow.next = null;
  const leftSub = sortList(head);

  return mergeList(leftSub, rightSub);
};

function mergeList(leftSub: ListNode | null, rightSub: ListNode | null): ListNode | null {
  const root = new ListNode();
  let prevNode = root;

  while (prevNode) {
      if (!rightSub || leftSub?.val! < rightSub.val) {
          prevNode.next = leftSub;
          prevNode = leftSub!;

          leftSub = leftSub?.next!;
      } else {
          prevNode.next = rightSub;
          prevNode = rightSub;

          rightSub = rightSub?.next;
      }
  }

  return root.next;
}


// 
// export function sortList(head: ListNode | null): ListNode | null {

//    let arr: number[] = [];

//     function get(node: ListNode | null) {
//         if (!node) return;

//         arr.push(node.val)
//         get(node.next)

//     }

//     get(head);

//     arr.sort((a,b)=> b-a);

//     function set(node: ListNode | null) {
//         if (!node) return;

//         node.val = arr.pop()!
//         set(node.next)

//     }

//     set(head);

//     return head;
// }



// // TLE
// export function sortList(head: ListNode | null): ListNode | null {

//   let tmp = head

//   while (tmp !== null) {

//     let next = tmp.next

//     while (next !== null){
//       if(tmp.val > next.val){
//         let t = tmp.val
//         tmp.val = next.val
//         next.val = t
//       }
//       next = next.next
//     }

//     tmp = tmp.next

//   }
    
//   return head
// };