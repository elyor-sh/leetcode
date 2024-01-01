
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

import {TreeNode} from "../helpers/treeNode";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null)
        return null;

    if (root === p || root === q)
        return root;

    const left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
    const right: TreeNode | null = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null)
        return root;

    return left || right;
}