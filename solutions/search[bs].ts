
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

export function search(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1
 
  while(low <= high) {
    const mid = Math.floor((low + high) / 2)
    const num = nums[mid]
 
    if(num === target) return mid
 
   
    if(nums[low] <= num) {

      if(nums[low] <= target && target <= num) {
         high = mid - 1 
      }else {
          low = mid + 1
      } 
    } else {
      if(num <= target && target <= nums[high]) {
          low = mid + 1
      }else {
          high = mid - 1
      }
    }  
  } 
 
  return -1
 }