
// https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

export function countDigits(num: number): number {
  let count = 0

  const str = num.toString()
  

  for (const s of str){
    if(num % Number(s) === 0){
      count++
    }
  }

  return count
};