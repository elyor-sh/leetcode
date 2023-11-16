import { fromArrayToTree } from "./helpers/treeNode";
import { execute } from "./helpers/performance";
import { findFrequentTreeSum } from "./solutions/findFrequentTreeSum";


execute(() => findFrequentTreeSum(fromArrayToTree([5,2,-3])))