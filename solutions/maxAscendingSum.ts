
// https://leetcode.com/problems/maximum-ascending-subarray-sum/description/

export function maxAscendingSum(nums: number[]): number {

  if (nums.length < 2) {
       return nums[0];
   }

   let globalMaxSum = nums[0];
   let runningSum = nums[0];
   for (let j = 1; j < nums.length; j++) {
       if (nums[j-1] >= nums[j]) {
           globalMaxSum = Math.max(globalMaxSum, runningSum);
           runningSum = 0;
       }
       runningSum += nums[j];
   }

   globalMaxSum = Math.max(globalMaxSum, runningSum);
   return globalMaxSum;
};