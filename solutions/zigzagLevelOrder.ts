
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

import { TreeNode } from "../helpers/treeNode"

type Direction = 'left' | 'right'

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = []

    function traverse (root: TreeNode | null, deep: number, direction: Direction) {
      if(!root){
        return
      }
  
      if(!result[deep]){
        result[deep] = []
      }

      if(direction === 'left'){
        result[deep].unshift(root.val)
      }else {
        result[deep].push(root.val)
      }

      traverse(root.left, deep + 1, direction === 'left' ? 'right' : 'left')
      traverse(root.right, deep + 1, direction === 'left' ? 'right' : 'left')

    }

    traverse(root, 0, 'right')

    return result
}