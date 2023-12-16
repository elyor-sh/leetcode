
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

export function maxProduct(nums: number[]): number {
  nums.sort((a, b) => b - a)

  return (nums[1] - 1) * (nums[0] - 1)
}