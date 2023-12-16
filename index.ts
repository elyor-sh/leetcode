import { execute } from "./helpers/performance";
import {fromArrayToTree, TreeNode} from "./helpers/treeNode";
import {inorderTraversal} from "./solutions/inorderTraversal";

execute(() => inorderTraversal(fromArrayToTree([1,null,2,3])))

