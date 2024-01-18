
// https://leetcode.com/problems/range-sum-query-2d-immutable/description/


export class NumMatrix {

  private matrix: number[][]

  constructor(matrix: number[][]) {
    this.matrix = this.createPrefixMatrix(matrix)
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.matrix[row2+1][col2+1] - this.matrix[row2+1][col1] - this.matrix[row1][col2+1] +
      this.matrix[row1][col1]
  }

  private createPrefixMatrix(matrix: number[][]): number[][] {
    const prefixMatrix: number[][] = new Array(matrix.length + 1);
    for( let i = 0; i <= matrix.length; i++ ) {
      prefixMatrix[i] = new Array(matrix[0].length + 1)
    }

    for( let i = 0; i < prefixMatrix.length; i++ ) {
      for ( let j = 0; j < prefixMatrix[i].length; j++)  {
        if( j === 0 || i === 0) prefixMatrix[i][j] = 0
        else prefixMatrix[i][j] = matrix[i-1][j-1]
      }
    }

    for ( let i = 1; i < prefixMatrix.length; i++ ) {
      for ( let j = 1; j < prefixMatrix[i].length; j++ )
        prefixMatrix[i][j] =  ( prefixMatrix[i-1][j] + prefixMatrix[i][j-1] ) - prefixMatrix
          [i-1][j-1] + matrix[i-1][j-1]
    }
    return prefixMatrix;
  }
}