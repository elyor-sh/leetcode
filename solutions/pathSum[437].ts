
// https://leetcode.com/problems/path-sum-iii/description/

import {TreeNode} from "../helpers/treeNode";


export function pathSum(root: TreeNode | null, targetSum: number): number {
    const dfs = (root: TreeNode | null, path: number[]): number => {
        if(!root){
            return 0
        }

        let count = 0;
        let sum = targetSum

        path.push(root.val)

        for(let i = path.length - 1; i>= 0; i--) {
            sum -= path[i];
            if(sum !== 0) continue;
            count++;
        }

        count += dfs(root.left, path);
        count += dfs(root.right, path)

        path.pop();
        return count
    }

    return dfs(root, [])
}