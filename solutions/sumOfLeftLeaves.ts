import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/sum-of-left-leaves/description/

export function sumOfLeftLeaves(root: TreeNode | null): number {

  if (!root) {
    return 0
  }

  if (root && root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }

  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};