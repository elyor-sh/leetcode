
// https://leetcode.com/problems/wiggle-sort-ii/

export function wiggleSort(nums: number[]): void {
    
  const tmp = nums.slice().sort((a, b) => a - b)

  let len = nums.length
  let mid = Math.floor((len + 1) / 2)

  for (let i = 0; i < nums.length; i++){

    if(i % 2 === 0){
      mid--
      nums[i] = tmp[mid]
    }else {
      len--
      nums[i] = tmp[len]
    }

  }
  
}