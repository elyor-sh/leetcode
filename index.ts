import { execute } from "./helpers/performance";
import { fromArrayToTree } from "./helpers/treeNode";
import { findDuplicateSubtrees } from "./solutions/findDuplicateSubtrees";


execute(() => findDuplicateSubtrees(fromArrayToTree([1,2,3,4,null,2,4,null,null,4])));
