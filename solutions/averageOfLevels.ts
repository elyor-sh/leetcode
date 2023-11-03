import { TreeNode } from "../helpers/treeNode";

// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

export function averageOfLevels(root: TreeNode | null): number[] {
  const res: number[][] = [];

  function dfs(root: TreeNode | null, i: number) {
      if (!root) return;

      if (res[i] === undefined) {
          res[i] = [root.val, 1]
      } else {
          res[i][0] += root.val;
          res[i][1] += 1;
      }

      if (root.left) dfs(root.left, i+1)
      if (root.right) dfs(root.right, i+1)

  }

  dfs(root, 0)

  const result: number[] = []

  for (let i = 0 ; i < res.length; i++) {
      result[i] = res[i][0] / res[i][1]

  }


  return result
};