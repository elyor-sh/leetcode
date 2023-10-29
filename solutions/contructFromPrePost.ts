import {TreeNode} from "../helpers/treeNode";

// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/

export function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {

    let preIndex = 0;
    let postIndex = 0;

    const buildTree = (): TreeNode | null => {
        if (preIndex >= preorder.length || postIndex >= postorder.length) {
            return null;
        }

        const root = new TreeNode(preorder[preIndex]);
        preIndex++;

        if (root.val !== postorder[postIndex]) {
            root.left = buildTree();
        }

        if (root.val !== postorder[postIndex]) {
            root.right = buildTree();
        }

        postIndex++;
        return root;
    };

    return buildTree()
}