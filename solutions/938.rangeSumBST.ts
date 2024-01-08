
// https://leetcode.com/problems/range-sum-of-bst/

import {TreeNode} from "../helpers/treeNode";

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0

    const stack = [root]

    while (stack.length > 0){
        const node = stack.pop()

        if(!node){
            return sum
        }

        if(node.val >= low && node.val <= high){
            sum += node.val
        }
        if(node.left){
            stack.push(node.left)
        }

        if(node.right){
            stack.push(node.right)
        }
    }

    return sum
}