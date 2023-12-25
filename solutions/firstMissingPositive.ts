
// https://leetcode.com/problems/first-missing-positive/description/

export function firstMissingPositive(nums: number[]): number {

  let n = nums.length
    
 
  for (let i = 0; i < n; i++) {

      if (nums[i] <= 0 || nums[i] > n) {
          nums[i] = n + 1
      }

  }

  for (let i = 0; i < n; i++) {

      let num = Math.abs(nums[i])
      
      if (num > n) {
          continue;
      }

      num--

      if (nums[num] > 0) { 
          nums[num] = -1 * nums[num]
      }
  }
  
  
  for (let i = 0; i < n; i++) {

      if (nums[i] >= 0) {
          return i + 1
      }

  }
  
  
  return n + 1;
};