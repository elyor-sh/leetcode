
// https://leetcode.com/problems/powx-n/description/

export function myPow(x: number, n: number): number {

  if(x === 1){
    return x
  }

  if(x === -1){
    return n % 2 === 0 ? -x : x
  }

  let result = 1

  for (let i = 1; i <= Math.abs(n); i++){
    result = result * x
  }

  if( n < 0){
    result = (1 / result)
  }

  return result
};