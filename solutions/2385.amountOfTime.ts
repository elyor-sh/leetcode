
// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected

import {TreeNode} from "../helpers/treeNode";

export function amountOfTime(root: TreeNode | null, start: number): number {
    const graph = new Graph(root)
    return graph.maxDistanceFrom(start)
}

class Graph {
    adj: Record<number, number[]>

    constructor(root: TreeNode | null) {
        this.adj = {}
        this.init(root)
    }

    maxDistanceFrom (start: number): number {
        const visited = new Set<number>()

        return this.traverse(start, 0, visited)
    }

    traverse (start: number, depth: number, visited: Set<number>) {
        if(!this.adj[start]){
            return depth
        }

        if(visited.has(start)){
            return depth
        }

        visited.add(start)

        let max = depth

        for (const point of this.adj[start]){
            if(!visited.has(point)){
                max = Math.max(max, this.traverse(point, depth + 1, visited))
            }
        }

        return max
    }

    init (root: TreeNode | null) {
        if(!root){
            return
        }

        if(!this.adj[root.val]){
            this.adj[root.val] = []
        }

        if(root.left?.val){
            this.adj[root.val].push(root.left?.val)
            if(!this.adj[root.left.val]){
                this.adj[root.left.val] = []
            }

            this.adj[root.left.val].push(root.val)
        }

        if(root.right?.val){
            this.adj[root.val].push(root.right.val)
            if(!this.adj[root.right.val]){
                this.adj[root.right.val] = []
            }

            this.adj[root.right.val].push(root.val)
        }

        this.init(root.left)
        this.init(root.right)
    }
}