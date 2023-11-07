
// https://leetcode.com/problems/build-array-from-permutation/description/

export function buildArray(nums: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < nums.length; i++){
    result[i] = nums[nums[i]]
  }

  return result
};