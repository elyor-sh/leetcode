
// https://leetcode.com/problems/sort-colors/description/

export function sortColors(nums: number[]): void {

  let left = 0
  let mid = 0
  let right = nums.length - 1

  while(mid <= right){

    const tmp = nums[mid]

    if(tmp === 0){
      nums[mid] = nums[left]
      nums[left] = tmp
      left++
      mid++
    }

    if(tmp === 1){
      mid++
    }

    if(tmp === 2){
      nums[mid] = nums[right]
      nums[right] = tmp
      right--
    }
  }
  
};