
// https://leetcode.com/problems/search-a-2d-matrix-ii/

export function searchMatrix(matrix: number[][], target: number): boolean {

  if(!matrix.length){
    return false
  }

  let row = 0
  let col = matrix[0].length - 1

  while (row < matrix.length && col < matrix[0].length){
    const current = matrix[row][col]

    if(current === target){
      return true
    } else if (current > target){
      col--
    }else {
      row++
    }
  }


  return false
}


// export function searchMatrix(matrix: number[][], target: number): boolean {

//   if(!matrix.length){
//     return false
//   }

//   const row = matrix.length

//   for (let i = 0; i < row; i++){
//     if(bs(matrix[i], target)){
//       return true
//     }
//   }


//   return false
// }

// function bs (nums: number[], target: number) {
//   let low = 0
//   let high = nums.length

//   while(low <= high){

//     const middle = Math.floor((low + high) / 2)

//     const current = nums[middle]

//     if(current === target){
//       return true
//     }else if (current > target){
//       high = middle - 1
//     }else {
//       low = middle + 1
//     }

//   }

//   return false
// }