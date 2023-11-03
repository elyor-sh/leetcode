import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/diameter-of-binary-tree/description/

export function diameterOfBinaryTree(root: TreeNode | null): number {

  let maxDistance = 0

  const dfs = (root: TreeNode | null): number => {
    if(!root){
      return 0
    }

    const lDepth = dfs(root.left)
    const rDepth = dfs(root.right)

    maxDistance = Math.max(maxDistance, lDepth + rDepth)

    const max = Math.max(lDepth, rDepth)

    return max + 1
  }

  dfs(root)
  

  return maxDistance
};