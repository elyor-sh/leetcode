
// https://leetcode.com/problems/find-the-duplicate-number/description/

export function findDuplicate(nums: number[]): number {
  let orderedIndex=0;
 
 while(orderedIndex<nums.length){
     
     if(nums[orderedIndex]!==orderedIndex+1){
         let unorderedIndex=nums[orderedIndex]-1;
         
         if(nums[orderedIndex]!==nums[unorderedIndex]){
             [nums[orderedIndex],nums[unorderedIndex]]=[nums[unorderedIndex],nums[orderedIndex]]
         }else{
             return nums[orderedIndex]
         }
         
     }else{
         orderedIndex++;
     }
 }
 return -1
}