
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

export function findMin(nums: number[]): number {
  let min = nums[0]

  let low = 0
  let high = nums.length - 1

  while(low <= high){
    const middle = Math.floor((low + high) / 2)

    if(nums[middle + 1] < nums[middle]){
      return nums[middle + 1]
    }

    if(nums[middle - 1] > nums[middle]){
      return nums[middle]
    }

    if(nums[high] > nums[middle]){
      high = middle - 1
    }else {
      low = middle + 1
    }
  }


  return min
}