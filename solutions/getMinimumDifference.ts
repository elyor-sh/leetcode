import { TreeNode } from "../helpers/treeNode";

// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/

export function getMinimumDifference(root: TreeNode | null): number {

  const result: number[] = [];

	const inorderTraversal = (root: TreeNode | null): void => {
		if(!root){
      return
    }

    inorderTraversal(root.left);
		result.push(root.val);
		inorderTraversal(root.right);
	}
  
	inorderTraversal(root);

	let minDifference = Infinity;

	for (let i = 1; i < result.length; i++){
    minDifference = Math.min(minDifference, result[i] - result[i - 1]);
  }

	return minDifference;
};