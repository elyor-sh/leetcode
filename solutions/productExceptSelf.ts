
// https://leetcode.com/problems/product-of-array-except-self/

export function productExceptSelf(nums: number[]): number[] {

  let res: number[] = []

  let left = 1

  for(let i = 0; i < nums.length; i++){
      res[i] = left
      left = left * nums[i]
  }

  let right = 1

  for(let i = nums.length-1; i >= 0; i--){
      res[i] = right * res[i]
      right = right * nums[i]
  }

  return res
    
}