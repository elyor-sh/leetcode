import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/invert-binary-tree/description/

export function invertTree(root: TreeNode | null): TreeNode | null {
  
  if(!root){
    return null
  }

  const node = new TreeNode(root.val, invertTree(root.right), invertTree(root.left))

  return node
};