
// https://leetcode.com/problems/largest-divisible-subset/

export function largestDivisibleSubset(nums: number[]): number[] {

  if(nums.length === 1) {
    return nums;
  }

  nums.sort((a, b) => a - b)

  let result: number[] = []

  const dp: number[][] = []

  for(let i = nums.length - 1; i >= 0; i--){
    let currentSub: number[] = []
    dp[i] = []

    for (let j = i + 1; j < nums.length; j++){
      if(nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0 && dp[j].length >= currentSub.length){
        currentSub = [...dp[j]];
      }
    }

    dp[i] = [nums[i], ...currentSub]

    if(result.length < dp[i].length){
      result = dp[i]
    }
  }

  return result
};