import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

export function findTarget(root: TreeNode | null, k: number): boolean {

    const map = new Map<number, number>()

    const bfs = (root: TreeNode | null): boolean => {
        if(!root){
            return false
        }

        const mappedVal = map.get(k - root.val) || 0

        if(mappedVal){
            return true
        }else {
            map.set(root.val, 1);
        }

        return bfs(root.left) || bfs(root.right)
    }

    return bfs(root)
}