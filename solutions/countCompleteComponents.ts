
// https://leetcode.com/problems/count-the-number-of-complete-components/description/

export function countCompleteComponents(n: number, edges: number[][]): number {
    const graph: number[][] = new Array(n).fill(null).map(() => []);
    edges.forEach(([from, to]) => {
        graph[from].push(to);
        graph[to].push(from);
    });
    const visited = new Array(n).fill(false);

    const dfs = (node: number, components: Set<number>) => {
        components.add(node)
        graph[node].forEach((nd) => {
            if (!visited[nd]) {
                visited[nd] = true
                dfs(nd, components)
            }
        });
    };

    let count = 0

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const components = new Set<number>()
            visited[i] = true
            dfs(i, components)
            if (Array.from(components).every((c) => components.size - 1 === graph[c].length)){
                count++
            }
        }
    }

    return count;
}