import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/maximum-binary-tree/description/

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    const recursive = (nums: number[]): TreeNode | null => {
        if(!nums.length){
            return null
        }

        let idx = 0
        let max = nums[0]
        for (let i = 0; i < nums.length; i++){
            if(max < nums[i]){
                idx = i
                max = nums[i]
            }
        }

        const left = nums.slice(0, idx)
        const right = nums.slice(idx + 1)

        return new TreeNode(max, recursive(left), recursive(right))
    }

    return recursive(nums)
}