
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

export function removeDuplicates(nums: number[]): number {
  let i = 0

  nums.forEach(ele => {
      if (i=== 0  || i === 1 || nums[i-2] !== ele) {
          nums[i] = ele
          i += 1   
      }
  })

  return i
}

// function removeDuplicates(nums: number[]): number {
  
//   let j = 2;

//   for (let i = 2; i < nums.length; i++) {
//     if (nums[i] !== nums[j - 2]) {
//       nums[j++] = nums[i];
//     }
//   }
  
//   return j;

// }