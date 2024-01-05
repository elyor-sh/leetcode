import { execute } from "./helpers/performance";
import {fromArrayToTree, TreeNode} from "./helpers/treeNode";
import {replaceValueInTree} from "./solutions/replaceValueInTree";

execute(() => replaceValueInTree(fromArrayToTree([5,4,9,1,10,null,7])));