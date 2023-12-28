
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/

import { TreeNode } from "../helpers/treeNode"

export function largestValues(root: TreeNode | null): number[] {

  if (!root) {
    return []
  }
  const result: number[] = []

  const queue: TreeNode[] = [root]

  while (queue.length > 0) {
    const len = queue.length
    let max = -Infinity

    for (let i = 0; i < len; i++) {
      const n = queue.shift()!
      max = Math.max(max, n.val)

      if (n.left) {
        queue.push(n.left)
      }

      if (n.right) {
        queue.push(n.right)
      }
    }

    result.push(max)
  }

  return result
}

// export function largestValues(root: TreeNode | null): number[] {

//   const result: number[] = []

//   const dfs = (root: TreeNode | null, depth: number) => {
//     if(!root){
//       return 
//     }

//     result[depth] = Math.max(result[depth] === undefined ? -Infinity: result[depth], root.val)
//     dfs(root.left, depth + 1)
//     dfs(root.right, depth + 1)
//   }

//   dfs(root, 0)

//   return result
// }