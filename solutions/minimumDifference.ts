
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/

export function minimumDifference(nums: number[], k: number): number {
  nums.sort((a,b)=>a-b)

  if(k===1) return 0

  const len = nums.length
  let result = Infinity

  for(let i = 0; i<= len-k; i++)
  {
      result = Math.min(result, nums[i+k-1]-nums[i])
  }
  return result
};