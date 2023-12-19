
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

export function maxProductDifference(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  return (nums[len - 1] * nums[len - 2]) - (nums[0] * nums[1])
}