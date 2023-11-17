
// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description

export function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let ans = -Infinity

  while (left < right) {
      ans = Math.max(ans, nums[left] + nums[right])
      left++
      right--
  }

  return ans
};