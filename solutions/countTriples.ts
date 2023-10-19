
// https://leetcode.com/problems/count-square-sum-triples/submissions/

export function countTriples(n: number): number {
  let count = 0

  for (let i = 1; i <= n - 2; i++){
    for (let j = i + 1; j <= n - 1; j++){
      for (let k = j + 1; k <= n; k++){   
        if(i**2 + j**2 === k**2){
          count += 2
        }
      }
    }
  }

  return count
};