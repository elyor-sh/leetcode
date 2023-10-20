
// https://leetcode.com/problems/arranging-coins/description/

export function arrangeCoins(n: number): number {

  let rows = 0

  while (n - rows >= 1){
    rows++
    n = n - rows
  }

  return rows
};