
// https://leetcode.com/problems/set-matrix-zeroes/description/

export function setZeroes(matrix: number[][]): void {

  const rows = matrix.length, cols = matrix[0].length;

  let rowZero = false;


  for (let row = 0; row < rows; row ++) {
      for (let col = 0; col < cols; col++) {
          if (matrix[row][col] == 0) {

              matrix[0][col] = 0;

       
              if (row > 0) 
                  matrix[row][0] = 0;
              else
                  rowZero = true;
          }
      }
  }

  for (let row = 1; row < rows; row ++)
      for (let col = 1; col < cols; col++)
          if (matrix[0][col] == 0 || matrix[row][0] == 0)
              matrix[row][col] = 0;


  if (matrix[0][0] == 0)
      for (let row = 0; row < rows; row ++)
          matrix[row][0] = 0;


  if (rowZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }
};