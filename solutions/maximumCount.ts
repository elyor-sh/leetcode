
// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

export function maximumCount(nums: number[]): number {

  if(nums[0] > 0){
    return nums.length
  }

  
  let posIdx = 0
  let negIdx = 0

  for (let i = 0; i < nums.length; i++){
    if(nums[i] < 0){
      negIdx = i + 1
    }

    if(nums[i] > 0){
      posIdx = i
      break
    }
  }

  if(posIdx === 0 && negIdx === 0){
    return 0
  }

  if(posIdx === 0) return negIdx
  if(negIdx === 0) return posIdx
  
  

  return Math.max(nums.length - posIdx, negIdx)
}