
// https://leetcode.com/problems/find-pivot-index/

export function pivotIndex(nums: number[]): number {

  const totalSum = nums.reduce((acc, item) => acc += item, 0)

  for (let i = 0; i < nums.length; i++){
    const left = nums.slice(0, i).reduce((acc, item) => acc += item, 0)

    if(totalSum - left - nums[i] === left){
      return i
    }
  }

  return -1
};