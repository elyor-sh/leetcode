
// https://leetcode.com/problems/number-of-1-bits/description

export function hammingWeight(n: number): number {
  let count = 0

  for(let i = 0; i < 32; i++){
      if((n & 1) === 1){
          count++
      }
      n >>= 1
  }

  return count
}