import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/binary-tree-inorder-traversal

export function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    function inOrder (node: TreeNode | null) {
        if(!node){
            return
        }

        inOrder(node.left)
        result.push(node.val)
        inOrder(node.right)
    }

    inOrder(root)

    return result
}