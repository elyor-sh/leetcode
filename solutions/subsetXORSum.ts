

// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

export function subsetXORSum(nums: number[]): number {

  let sum: number = 0;
  
  const dfs = (val: number, i: number) => {
      if (i < nums.length) {
          dfs(val^nums[i], i + 1);
          dfs(val, i + 1);
      }
      if (i == nums.length) {
          sum += val;
      };
  }
  
  dfs(0, 0);

  return sum;
};