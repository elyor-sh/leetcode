
// https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/

import {TreeNode} from "../helpers/treeNode";


type Result = {
    node: TreeNode | null
    depth: number
}

export function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {

    const dfs = (root: TreeNode | null): Result => {
        if(!root){
            return result(null, 0)
        }

        const l = dfs(root.left)
        const r = dfs(root.right)

        if(l.depth > r.depth) {
            return result(l.node, l.depth + 1)
        }

        if(l.depth < r.depth){
            return result(r.node, r.depth + 1)
        }

        return result(root, l.depth + 1)
    }

    return dfs(root).node

}

function result (node: TreeNode | null, depth: number): Result {
    return {node, depth}
}