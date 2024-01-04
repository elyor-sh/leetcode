
// https://leetcode.com/problems/find-duplicate-subtrees/

import { TreeNode } from "../helpers/treeNode";

export function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];
  const visited: Map<string, number> = new Map();
  traverse(root, visited, result);
  return result;
};

function traverse(node: TreeNode | null, visited: Map<string, number>, result: Array<TreeNode | null>): string {
  if (node === null) return '#';

  const left = traverse(node.left, visited, result);
  const right = traverse(node.right, visited, result);

  const key = `${node.val},${left},${right}`;
  if (visited.has(key)) {
      if (visited.get(key) === 1) {
        result.push(node)
      };
      visited.set(key, visited.get(key)! + 1);
  } else {
      visited.set(key, 1);
  }

  return key;
}