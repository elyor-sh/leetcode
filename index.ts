import { execute } from "./helpers/performance";
import { TreeNode, fromArrayToTree } from "./helpers/treeNode";
import { getMinimumDifference } from "./solutions/getMinimumDifference";


// function diameterOfBinaryTree(root: TreeNode | null): number {

// };


execute(() => getMinimumDifference(fromArrayToTree([4,2,6,1,3])))
