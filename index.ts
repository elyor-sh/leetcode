import { fromArrayToTree } from "./helpers/treeNode";
import { execute } from "./helpers/performance";
import { pseudoPalindromicPaths } from "./solutions/1457.pseudoPalindromicPaths";

execute(() => pseudoPalindromicPaths(fromArrayToTree([2,3,1,3,1,null,1])));