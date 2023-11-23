
// https://leetcode.com/problems/maximum-gap/description/

export function maximumGap(nums: number[]): number {
  if (nums.length < 2){
    return 0
  }

  nums.sort((a, b) => a - b)

  let result = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length -1; i++){
    const current = nums[i]
    const next = nums[i + 1]

    result = Math.max(result, next - current)
  }

  return result
}