
// https://leetcode.com/problems/number-of-common-factors/

export function commonFactors(a: number, b: number): number {
  const min = Math.min(a, b)

  let count = 1

  for (let i = 2; i <= min; i++){
    if(a % i === 0 && b % i === 0){
      count++
    }
  }

  return count
};