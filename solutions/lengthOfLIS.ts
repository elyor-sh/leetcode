
// https://leetcode.com/problems/longest-increasing-subsequence/

export function lengthOfLIS(nums: number[]): number {

  let values: number[] = [];
  let result = -1;
  for(let i = 0; i < nums.length; i++) {
      values[i] = 1;
      for(let j = 0; j < i; j++) {
          if(nums[i] > nums[j]){
              values[i] = Math.max(values[i], values[j]+1);
          }
      }
      result = Math.max(result, values[i]);
  }

  return result
}
