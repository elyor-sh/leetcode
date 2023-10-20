
// https://leetcode.com/problems/sign-of-the-product-of-an-array/description/

export function arraySign(nums: number[]): number {
  
  let negative = 0

  for (const num of nums){
    
    if(num === 0){
      return 0
    }

    if(num < 0){
      negative++
    }
  }
  

  return negative % 2 === 0 ? 1 : -1

};