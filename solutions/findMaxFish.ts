
// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/

export function findMaxFish(grid: number[][]): number {
    const visited = new Set<string>()

    let result = 0

    const dfs = (r: number, c: number): number => {
        if(r < 0 || r >= grid.length || c < 0 || c >= grid[r].length){
            return 0
        }

        if(grid[r][c] === 0){
            return 0
        }

        const key = `${r}+${c}`

        if(visited.has(key)){
            return 0
        }

        visited.add(key)

        return grid[r][c] + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
    }

    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[r].length; c++){
            visited.clear()
            result = Math.max(result, dfs(r, c))
        }
    }

    return result
}