import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/recover-binary-search-tree/description/

export function recoverTree(root: TreeNode | null): void {
    
  let small: TreeNode | null = null
  let big: TreeNode | null = null

  let prev: TreeNode | null = null

  const inorder = (r: TreeNode | null) => {
     if(!r){
       return null
     }

     inorder(r.left)

     if(prev && prev.val > r.val){
       small = r
       if(big) return
       big = prev
     }

     prev = r
     inorder(r.right)
     return
  }

  inorder(root);

  [small!.val, big!.val] = [big!.val, small!.val]

  console.log(root);
  
}