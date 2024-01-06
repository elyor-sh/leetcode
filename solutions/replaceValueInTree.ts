
// https://leetcode.com/problems/cousins-in-binary-tree-ii/description/

import {TreeNode} from "../helpers/treeNode";

export function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null

    const sums: Record<number, number> = {};
    const dfs = (node: TreeNode | null, depth: number): void => {
        if (!node){
            return
        }
        sums[depth] = (sums[depth] || 0) + node.val;

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);

    const cousinTree = (node: TreeNode | null, depth: number, cousinVal: number): TreeNode | null => {
        if (!node){
            return null
        }

        const val = sums[depth + 1] - (node.left?.val || 0) - (node.right?.val || 0);

        return new TreeNode(cousinVal, cousinTree(node.left, depth + 1, val), cousinTree(node.right, depth + 1, val))
    }

    return cousinTree(root, 0, 0);
}