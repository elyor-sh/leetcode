import { execute } from "./helpers/performance";
import {fromArrayToTree} from "./helpers/treeNode";
import {rangeSumBST} from "./solutions/938.rangeSumBST";


execute(() => rangeSumBST(fromArrayToTree([10,5,15,3,7,null,18]), 7, 15));