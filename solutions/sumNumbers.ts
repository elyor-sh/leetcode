import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

export function sumNumbers(root: TreeNode | null, num: string = ''): number {

    if(!root){
        return 0
    }

    num += root.val.toString()

    if(!root.left && !root.right){
        return Number(num)
    }

    return sumNumbers(root.left, num) + sumNumbers(root.right, num)
}