
// https://leetcode.com/problems/convert-bst-to-greater-tree/description/

import {TreeNode} from "../helpers/treeNode";

export function convertBST(root: TreeNode | null): TreeNode | null {
    const dfs = (root: TreeNode | null, value: number): number => {
        if(!root){
            return 0
        }

        const right = dfs(root.right, value)
        const left = dfs(root.left, right + root.val + value)
        const temp = root.val
        root.val += right + value

        return left + right + temp;

    }

    dfs(root, 0)
    return root
}