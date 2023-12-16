
// https://leetcode.com/problems/special-positions-in-a-binary-matrix/

export function numSpecial(mat: number[][]): number {

  if(!mat.length){
    return 0
  }

  let count = 0

  const m = mat.length
  const n = mat[0].length

  const rowCount = new Array(m).fill(0)
  const colCount = new Array(n).fill(0)
  
  for (let i = 0; i < m; i++){
    for (let j = 0; j < n; j++){
      if(mat[i][j] === 1){
        rowCount[i]++
        colCount[j]++
      }
    }
  }

  for (let i = 0; i < m; i++){
    for (let j = 0; j < n; j++){
      if(mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1){
        count++
      }
    }
  }

  return count
}