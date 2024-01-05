import { execute } from "./helpers/performance";
import {findMatrix} from "./solutions/findMatrix";
import {fromArrayToTree, TreeNode} from "./helpers/treeNode";

type Dir = 'left' | 'right'
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1){
        return root2
    }

    if(!root2){
        return root1
    }

    const dfs = (root1: TreeNode | null, root2: TreeNode | null) => {
        if(!root1 || !root2){
            return
        }

        root1.val += root2.val

        dfs(root1.left, root2.left)
        dfs(root1.right, root2.right)
    }

    dfs(root1, root2)

    return root1

}

execute(() => mergeTrees(fromArrayToTree([1,3,2,5]), fromArrayToTree([2,1,3,null,4,null,7])));





