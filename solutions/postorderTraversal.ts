import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

export function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  

  const postorder = (node: TreeNode | null) => {

    if(!node){
      return
    }    

    postorder(node.left)
    postorder(node.right)
    result.push(node.val)
  }

  postorder(root)

  return result
};