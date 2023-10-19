
// https://leetcode.com/problems/find-the-pivot-integer/

export function pivotInteger(n: number): number {

  if (n===1) return 1

  for(let i = 0; i < n; i++){

      if((1 + i)*(i)/2 === (i + n)*(n - i + 1)/2){
          return i;
      }

  }
  
  return -1;
};