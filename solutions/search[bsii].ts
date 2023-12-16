
// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

export function search(nums: number[], target: number): boolean {

  let low = 0, high = nums.length - 1
 
  while(low <= high) {
    const mid = Math.floor((low + high) / 2)
    const num = nums[mid]
    

    if(num === target) return true

    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
      continue;
    }
 
   
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
 
  return false
}