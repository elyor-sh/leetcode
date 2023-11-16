import { TreeNode } from "../helpers/treeNode"

// https://leetcode.com/problems/most-frequent-subtree-sum/description/


type TotalSum = {
  [key: string]: number
}

function helper(root: TreeNode | null, res: TotalSum) {
  if (root === null) {
      return 0
  }

  let sum: number = root.val
  sum += helper(root.left, res)
  sum += helper(root.right, res)

  if (sum in res) {
      res[sum] += 1
  } else {
      res[sum] = 1
  }
  return sum
}

export function findFrequentTreeSum(root: TreeNode | null): number[] {
  const res: TotalSum = {}
  helper(root, res)
  const values : number[] = Object.keys(res).map((k) => res[k])
  const maximumCount = Math.max(...values)
  const output: number[] = []
  for(const num in res) {
      if(res[num] === maximumCount) {
          output.push(JSON.parse(num))
      }
  }
  return output
};