
// https://leetcode.com/problems/find-peak-element/

export function findPeakElement(nums: number[]): number {
    
  let low = 0
  let high = nums.length - 1

  while (low <= high){

    const middle = Math.floor((low + high) / 2)

    if(nums[middle + 1] > nums[middle]){
      low = middle + 1
    }else {
      high = middle - 1
    }

  }

  return low
}

// export function findPeakElement(nums: number[]): number {
    
//   let low = 0
//   let high = nums.length - 1

//   while (low <= high){

//     const middle = Math.floor((low + high) / 2)

//     if((nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1]) || (nums[middle] > nums[middle - 1] && middle + 1 === nums.length)){
//       return middle
//     }

//     if(nums[middle + 1] > nums[middle]){
//       low = middle + 1
//     }else {
//       high = middle - 1
//     }

//   }

//   return 0
// }