import { execute } from "./helpers/performance";
import {fromArrayToTree, TreeNode} from "./helpers/treeNode";
import {rightSideView} from "./solutions/rightSideView";

execute(() => rightSideView(fromArrayToTree([1,2,3,null,5,null,4])))
