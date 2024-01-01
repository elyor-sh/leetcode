
// https://leetcode.com/problems/number-of-provinces/description/

export function findCircleNum(isConnected: number[][]): number {
    let count = 0
    const visited: boolean[] = []

    const dfs = (idx: number) => {
        visited[idx] = true;
        for (let i = 0; i < isConnected.length; i++) {
            if (isConnected[idx][i] == 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < isConnected.length; i++){
        if(!visited[i]){
            count++
            dfs(i)
        }
    }

    return count
}
