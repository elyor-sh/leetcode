
// https://leetcode.com/problems/three-divisors/submissions/

export function isThree(n: number): boolean {
  let divisors = 2

  for (let i = 2; i < n; i++){
    if(n % i === 0){
      divisors++
    }
  }

  return divisors === 3
};