
// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

import {TreeNode} from "../helpers/treeNode";

export function pseudoPalindromicPaths (root: TreeNode | null): number {

  let res = {count: 0}
  let counter: number[] = new Array(10).fill(0);

  const dfs = (root: TreeNode | null) => {
    if (!root) return;

    counter[root.val]++;

    if (!root.left && !root.right) {
      if (isValid(counter)) res.count += 1;
      return res;
    }

    dfs(root.left);
    root.left && counter[root.left.val]--;

    dfs(root.right);
    root.right && counter[root.right.val]--;

  }

  dfs(root);
  return res.count
}

function  isValid (nums: number[]) {
  let odd = 0;
  for (let n of nums) {
    if (n > 0 && n % 2 === 1)
      odd++;
  }
  return odd < 2;
}