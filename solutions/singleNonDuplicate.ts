
// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

export function singleNonDuplicate(nums: number[]): number {
    
  let low = 0
  let high = nums.length - 1

  while(low < high){
    let mid = Math.floor((low + high) / 2)

    if(mid % 2 == 1) mid--;

    if(nums[mid] != nums[mid + 1]){
        high = mid
    }else{
        low = mid + 2
    }
}
   
  return nums[low];
}