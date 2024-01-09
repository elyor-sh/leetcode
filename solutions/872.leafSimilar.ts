
// https://leetcode.com/problems/leaf-similar-trees/

import {TreeNode} from "../helpers/treeNode";

export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return dfs(root1) === dfs(root2)
}

function dfs (root: TreeNode | null): string {
    if(!root){
        return ''
    }

    if(!root.left && !root.right){
        return root.val.toString() + '+'
    }

    const left = dfs(root.left)
    const right = dfs(root.right)

    return left + right
}