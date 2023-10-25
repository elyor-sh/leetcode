
// https://leetcode.com/problems/check-if-array-is-good/description/

export function isGood(nums: number[]): boolean {

  nums.sort((a, b) => a - b)

  const len = nums.length

  const preLast = nums[len - 1]
  const last = nums[len - 2]

  if(preLast !== last){
    return false
  }

  return last + 1 === len && new Set(nums).size + 1 === len
};