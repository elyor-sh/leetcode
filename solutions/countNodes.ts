import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/count-complete-tree-nodes/description/

export function countNodes(root: TreeNode | null): number {

  if(!root){
    return 0
  }

  let count = 0

  const recursive = (tree: TreeNode | null) => {
    if(!tree){
      return
    }

    count++

    recursive(tree.left)
    recursive(tree.right)
  }

  recursive(root)

  return count
};