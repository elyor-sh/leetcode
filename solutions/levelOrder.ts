
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

import { TreeNode } from "../helpers/treeNode"

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []

  function traverse (root: TreeNode | null, deep = 0) {
    if(!root){
      return
    }

    if(!result[deep]){
      result[deep] = []
    }

    result[deep].push(root.val)

    traverse(root.left, deep + 1)
    traverse(root.right, deep + 1)
  }

  traverse(root, 0)

  return result
}