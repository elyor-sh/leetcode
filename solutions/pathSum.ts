import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/path-sum-ii/description/

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = []

    const dfs = (node: TreeNode | null, remainSum: number, paths: number[]) => {
        if(!node){
            return
        }

        paths.push(node.val)

        if(remainSum === node.val && !node.left && !node.right){
            result.push(paths.slice())
        }else {
            dfs(node.left, remainSum - node.val, paths)
            dfs(node.right, remainSum - node.val, paths)
        }

        paths.pop()
    }

    dfs(root, targetSum, [])

    return result
};