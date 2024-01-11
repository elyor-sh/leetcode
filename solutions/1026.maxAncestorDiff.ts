
// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

import {TreeNode} from "../helpers/treeNode";

export function maxAncestorDiff(root: TreeNode | null): number {

    if(!root){
        return 0
    }

    let diff = -Infinity;

    function traverse(node: TreeNode | null, max: number, min: number): void {
        if (!node) {
            const newDiff = max - min;

            if (diff < newDiff) diff = newDiff;

            return;
        }

        if (node.val > max) {
            max = node.val;
        }

        if (node.val < min) {
            min = node.val;
        }

        traverse(node.left, max, min);
        traverse(node.right, max, min);
    }

    traverse(root, root.val, root.val);

    return diff;
}