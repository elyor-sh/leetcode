
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

export function searchRange(nums: number[], target: number): number[] {

  const left = binarySearch(nums, target - 0.1)
  const right = binarySearch(nums, target + 0.1)
  

  if(left[0] !== right[0]){
    return [left[0], right[1]]
  }

  return [-1, -1]
};

function binarySearch (nums: number[], target: number) {
let left = 0
let right = nums.length - 1

while (left <= right){
  const middle = Math.floor((right + left) / 2)

  if(nums[middle] < target){
    left = middle + 1
  }else {
    right = middle - 1
  }
}

return [left, right]
}