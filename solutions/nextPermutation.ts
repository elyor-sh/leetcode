
// https://leetcode.com/problems/next-permutation/description/

export function nextPermutation(nums: number[]): void {

  let i = nums.length - 2

  while(nums[i] >= nums[i + 1]){
    i--
  }

  if(i >= 0){
    let j = nums.length - 1

    while(nums[i] >= nums[j]) {
      j--
    }

    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let left = i + 1
  let right = nums.length -1

  while(left < right){
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
  
}