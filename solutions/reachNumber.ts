
// https://leetcode.com/problems/reach-a-number/description/

export function reachNumber(target: number): number {
  target = Math.abs(target);
  let k = 0;

  while (target > 0){
      target -= ++k;
  }
  
  return target % 2 == 0 ? k : k + 1 + k%2;

}