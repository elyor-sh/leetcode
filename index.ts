import { recoverTree } from "./solutions/recoverTree";
import { execute } from "./helpers/performance";
import { fromArrayToTree } from "./helpers/treeNode";


execute(() => recoverTree(fromArrayToTree([3,1,4,null,null,2])))
