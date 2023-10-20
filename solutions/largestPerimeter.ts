
// https://leetcode.com/problems/largest-perimeter-triangle/description/

export function largestPerimeter(nums: number[]): number {

  let perimetr = 0

  nums.sort((a, b) => a - b)

  for (let i = nums.length - 1; i >= 2; i--){
    const a = nums[i]
    const b = nums[i - 1]
    const c = nums[i - 2]

    if(a < b + c){
      return a + b + c
    }
  }

  return perimetr
};