
// https://leetcode.com/problems/max-area-of-island/


const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1]
]

export function maxAreaOfIsland(grid: number[][]): number {

    const visited = new Set<string>()

    function dfs (m: number, n: number): number {
      if(m < 0 || m >= grid.length || n < 0 || n >= grid[m].length){
        return 0
      }

      const key = `${m}-${n}`

      if(visited.has(key)){
        return 0
      }

      visited.add(key)

      if(grid[m][n] === 0){
        return 0
      }

      let val = 1

      for (const [x, y] of dirs){
        val += dfs(m + x, n + y)
      } 

      return val
    }

    let maxArea = 0

    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
        if(grid[i][j] === 1 && !visited.has(`${i}-${j}`)){
          maxArea = Math.max(maxArea, dfs(i, j))
        }
      }
    }

    return maxArea
}