import { execute } from "./helpers/performance";
import {fromArrayToTree} from "./helpers/treeNode";
import {maxAncestorDiff} from "./solutions/1026.maxAncestorDiff";

execute(() => maxAncestorDiff(fromArrayToTree([8,3,10,1,6,null,14,null,null,4,7,13])));