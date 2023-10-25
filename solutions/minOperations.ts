
// https://leetcode.com/problems/minimum-operations-to-collect-elements/description/

export function minOperations(nums: number[], k: number): number {
  let count = 0

  const hash = new Set<number>()

  for (let i = nums.length - 1; i >=0; i--){

    count++

    if(nums[i] <= k){
      hash.add(nums[i])
    }

    if(k === hash.size){
      break
    }

  }

  return count
};