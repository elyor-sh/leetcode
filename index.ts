import { getLengthOfOptimalCompression } from "./solutions/getLengthOfOptimalCompression";
import { execute } from "./helpers/performance";
import { pacificAtlantic } from "./solutions/pacificAtlantic";
import { TreeNode, fromArrayToTree } from "./helpers/treeNode";
import { largestValues } from "./solutions/largestValues";



execute(() => largestValues(fromArrayToTree([1, 3, 2, 5, 3, null, 9])));





