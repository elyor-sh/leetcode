import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/binary-tree-right-side-view/description/

export function rightSideView(root: TreeNode | null): number[] {

    const result: number[] = []

    const dfs = (root: TreeNode | null, depth: number) => {
        if(!root){
            return
        }

        result[depth] = root.val

        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }

    dfs(root, 0)

    return result
}