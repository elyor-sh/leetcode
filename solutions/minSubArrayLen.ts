
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

export function minSubArrayLen(target: number, nums: number[]): number {

  let result = Number.MAX_SAFE_INTEGER

  let start = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++){
    sum += nums[i]

    while(sum >= target){
      result = Math.min(result, i + 1 - start)
      sum -= nums[start++]
    }
  }
  

  return result !== Number.MAX_SAFE_INTEGER ? result : 0
}