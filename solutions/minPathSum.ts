
// https://leetcode.com/problems/minimum-path-sum/description/

export function minPathSum(grid: number[][]): number {
  const M = grid.length;
  const N = grid[0].length;
  const memo = new Array(M).fill(0).map(() => new Array(N));

  const dp = (x: number, y: number): number => {
      if (x === M - 1 && y === N - 1) {
          memo[x][y] = grid[x][y];
          return grid[x][y];
      } 

      if (memo[x][y] !== undefined) return memo[x][y];

      if (x === M - 1) {
          memo[x][y] = grid[x][y] + dp(x, y + 1);
          return memo[x][y];
      }

      if (y === N - 1) {
          memo[x][y] = grid[x][y] + dp(x + 1, y);
          return memo[x][y];
      }

      memo[x][y] = grid[x][y] + Math.min(dp(x + 1, y), dp(x, y + 1));
      return memo[x][y];
  }

  return dp(0,0);
};