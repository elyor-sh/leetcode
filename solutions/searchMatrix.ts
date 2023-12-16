
// https://leetcode.com/problems/search-a-2d-matrix/

export function searchMatrix(matrix: number[][], target: number): boolean {

  if(!matrix.length){
    return false
  }

  const row = matrix.length
  const col = matrix[0].length

  let low = 0
  let high = row * col - 1

  while(low <= high){

    const middle = Math.floor((low + high) / 2)

    const current = matrix[Math.floor(middle / col)][middle % col]

    if(current === target){
      return true
    }else if (current > target){
      high = middle - 1
    }else {
      low = middle + 1
    }

  }

  return false
}