
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

import { TreeNode } from "../helpers/treeNode"

export function levelOrderBottom(root: TreeNode | null): number[][] {
  return levelOrder(root).reverse()
};

function levelOrder(root: TreeNode | null): number[][] {
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