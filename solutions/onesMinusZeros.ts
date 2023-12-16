
// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/

export function onesMinusZeros(grid: number[][]): number[][] {

  const m = grid.length
  const n = grid[0].length

  const rowCount = new Array(m).fill(0)
  const colCount = new Array(n).fill(0)
  
  for (let i = 0; i < m; i++){
    for (let j = 0; j < n; j++){
      if(grid[i][j] === 1){
        rowCount[i]++
        colCount[j]++
      }
    }
  }

  for (let i = 0; i < m; i++){
    for (let j = 0; j < n; j++){

      const diff = rowCount[i] + colCount[j] - (m - rowCount[i]) - (n - colCount[j])

      grid[i][j] = diff
    }
  }

  return grid
}