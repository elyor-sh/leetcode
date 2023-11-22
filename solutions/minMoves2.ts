
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/

export function minMoves2(nums: number[]): number {

  nums.sort((a, b) => a - b)

  let result = 0

  const mid = nums[Math.floor(nums.length / 2)]

  for (const num of nums){
    result += Math.abs(num - mid)
  }

  return result
}