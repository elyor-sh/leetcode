
// https://leetcode.com/problems/arithmetic-subarrays/description

export function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const result: boolean[] = new Array(l.length).fill(true);

  for (let i = 0; i < l.length; i++) {

      let left = l[i];
      let right = r[i];

      const checkArray: number[] = nums.slice(left, right + 1).sort((a,b) => a - b);
      let differences: number = checkArray[1] - checkArray[0];
  
      for (let j = 1; j < checkArray.length - 1; j++) {
          let k = j + 1;

          if ((checkArray[k] - checkArray[j]) !== differences) {
              result[i] = false;
              continue;
          }        
      }
  }

  return result;
}