import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

export function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  

  const preorder = (node: TreeNode | null) => {

    if(!node){
      return
    }    

    result.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }

  preorder(root)

  return result
};