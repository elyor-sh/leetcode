
// https://leetcode.com/problems/house-robber-iii/description/

import {TreeNode} from "../helpers/treeNode";

export function rob(root: TreeNode | null): number {

    const cache = new Map<TreeNode, number>()
    const dfs = (root: TreeNode | null): number => {
        if (!root) {
            return 0
        }

        if(cache.has(root)) {
            return cache.get(root)!
        }

        const answer = (
            Math.max(
                root.val + dfs(root?.left?.left!) + dfs(root?.left?.right!) + dfs(root?.right?.left!) + dfs(root?.right?.right!),
                dfs(root?.left) + dfs(root?.right)
            )
        )

        cache.set(root, answer)
        return answer
    }

    return dfs(root)
}
