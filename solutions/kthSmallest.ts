import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

export function kthSmallest(root: TreeNode | null, k: number): number {
  const nodes: number[] = []

  const tv = (root: TreeNode | null) => {
    if(!root || nodes.length > k - 1){
      return
    }

    tv(root.left)
    nodes.push(root.val)
    tv(root.right)
  }

  tv(root)
  
  return nodes[k - 1]
}