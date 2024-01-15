
// https://leetcode.com/problems/minimum-height-trees/description/

export function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n < 3) return n === 1 ? [0] : [0, 1];

    const nodes = new Map<number, number[]>();

    for (let i = 0; i < edges.length; i++) {
        const [node1, node2] = edges[i];
        if (nodes.has(node1)) {
            nodes.get(node1)!.push(node2);
        } else nodes.set(node1, [node2]);
        if (nodes.has(node2)) {
            nodes.get(node2)!.push(node1);
        } else nodes.set(node2, [node1]);
    }

    const leaves = [...nodes.entries()].filter(([nodeNum, edges]) => {
        return edges.length === 1;
    });

    while (nodes.size > 2) {
        const curLeaves = [...leaves];
        leaves.length = 0;
        for (let i = 0; i < curLeaves.length; i++) {
            const [nodeNum, [parentNodeNum]] = curLeaves[i];
            nodes.delete(nodeNum);
            const parentEdges = nodes.get(parentNodeNum)!;
            parentEdges.splice(parentEdges.indexOf(nodeNum), 1);
            if (parentEdges.length === 1) leaves.push([parentNodeNum, parentEdges]);
        }
    }

    return leaves.map(([nodeNum]) => nodeNum);
}