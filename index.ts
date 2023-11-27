import { kthSmallest } from "./solutions/kthSmallest";
import { execute } from "./helpers/performance";
import { TreeNode, fromArrayToTree } from "./helpers/treeNode";


execute(() => kthSmallest(fromArrayToTree([3,1,4,null,2]), 1))
