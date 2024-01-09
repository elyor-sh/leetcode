import { execute } from "./helpers/performance";
import {fromArrayToTree} from "./helpers/treeNode";
import {leafSimilar} from "./solutions/872.leafSimilar";



execute(() => leafSimilar(fromArrayToTree([1,2,null,3]), fromArrayToTree([1,3])));