
// https://leetcode.com/problems/smallest-even-multiple/description/

export function smallestEvenMultiple(n: number): number {

  if(n % 2 === 0){
    return n
  }

  return n * 2

};