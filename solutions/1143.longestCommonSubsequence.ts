
// https://leetcode.com/problems/longest-common-subsequence/

export function longestCommonSubsequence(text1: string, text2: string): number {

  if(text1 === text2){
    return text1.length
  }

  const m = text1.length;
  const n = text2.length;

  const dp: number[][] = new Array(m);

  for(let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(-1);
  }

  const solve = (m: number, n: number): number => {
    if ( m === 0 || n === 0){
      return 0
    }

    if(dp[m-1][n-1] !== -1){
      return dp[m-1][n-1]
    }

    if(text1[m-1] === text2[n-1]){
      return dp[m-1][n-1] = 1 + solve(m-1, n-1)
    }

    return dp[m-1][n-1] = Math.max(solve(m-1, n), solve(m, n-1))
  }

  return solve(text1.length, text2.length);
}