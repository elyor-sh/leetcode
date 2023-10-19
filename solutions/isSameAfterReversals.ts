
// https://leetcode.com/problems/a-number-after-a-double-reversal/description/

export function isSameAfterReversals(num: number): boolean {

  if(num === 0){
    return true
  }

  return !(num % 2 === 0 && num % 5 === 0) // agar son 5 ga ham 2 ga ham qoldiqsiz bo'linsa unda 0 bilan tugaydi
};