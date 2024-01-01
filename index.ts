import { execute } from "./helpers/performance";
import { minDifficulty } from "./solutions/minDifficulty";
import {TreeNode} from "./helpers/treeNode"

function lexicalOrder(n: number): number[] {
    const arr: number[] = []

    for (let i = 1; i <= n; i++){
        arr.push(i)
    }

    return arr.sort()
};

execute(() => lexicalOrder(13));





