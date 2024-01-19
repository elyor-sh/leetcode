
// https://leetcode.com/problems/minimum-falling-path-sum/description/

export function minFallingPathSum(matrix: number[][]): number {
  const N: number = matrix.length;

  let prevRow: number[] = matrix[0].slice();

  for (let r: number = 1; r < N; r++) {
    const currRow: number[] = new Array(N).fill(0);
    for (let c: number = 0; c < N; c++) {
      const curr: number = matrix[r][c];
      const top: number = curr + prevRow[c];
      const topL: number = curr + (prevRow[c - 1] || Infinity);
      const topR: number = curr + (prevRow[c + 1] || Infinity);
      currRow[c] = Math.min(top, topL, topR);
    }
    prevRow = [...currRow];
  }

  return Math.min(...prevRow);
}