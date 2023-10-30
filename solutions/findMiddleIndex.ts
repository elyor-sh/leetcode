
// https://leetcode.com/problems/find-the-middle-index-in-array/description/

export function findMiddleIndex(nums: number[]): number {
  const totalSum = nums.reduce((acc, item) => acc += item, 0)
 
   for (let i = 0; i < nums.length; i++){
     const left = nums.slice(0, i).reduce((acc, item) => acc += item, 0)
 
     if(totalSum - left - nums[i] === left){
       return i
     }
   }
 
   return -1
 };