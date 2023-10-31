
// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

export function maximizeSum(nums: number[], k: number): number {

  nums.sort((a, b) => b - a)

  let sum = 0

  for (let i = 0; i < k; i++){
    sum += nums[0]
    nums[0] = nums[0] + 1
  }

  return sum
};