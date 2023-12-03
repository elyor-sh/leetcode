
// https://leetcode.com/problems/number-of-islands/

export function numIslands(grid: string[][]): number {
    let count = 0

    const dfs = (m: number, n: number) => {
        if(m < 0 || m >= grid.length){
            return
        }

        if(n < 0 || n >= grid[m].length){
            return
        }

        if(grid[m][n] === '0'){
            return
        }

        grid[m][n] = '0'

        dfs(m - 1, n)
        dfs(m + 1, n)
        dfs(m, n - 1)
        dfs(m, n+ 1)
    }

    for (let m = 0; m < grid.length; m++){
        for (let n = 0; n < grid[m].length; n++){
            const current = grid[m][n]

            if(current === '1'){
                count++
                dfs(m, n)
            }
        }
    }

    return count
}