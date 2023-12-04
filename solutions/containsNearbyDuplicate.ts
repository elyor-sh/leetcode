
// https://leetcode.com/problems/contains-duplicate-ii/

export function containsNearbyDuplicate(nums: number[], k: number): boolean {

  const hash = new Set<number>()
    
  for (let i = 0; i < nums.length; i++){
    if(hash.has(nums[i])){
      return true
    }

    hash.add(nums[i])

    if(hash.size > k){
      hash.delete(nums[i - k])
    }
  }

  return false
}