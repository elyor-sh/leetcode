import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/description/

export class FindElements {

    hash: Set<number>
    constructor(root: TreeNode | null) {
        this.hash = new Set()
        this.fromTreeToHash(root, 0)
    }

    find(target: number): boolean {
        return this.hash.has(target)
    }

    private fromTreeToHash (root: TreeNode | null, val: number) {
        if(!root){
            return
        }

        this.hash.add(val)

        this.fromTreeToHash(root.left, 2 * val + 1)
        this.fromTreeToHash(root.right, 2 * val + 2)
    }
}