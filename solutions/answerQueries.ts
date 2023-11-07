
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

export function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);
  const ans: number[] = [];

  function binarySearch(target: number): number {
      let left = 0, right = nums.length - 1;

      while (left < right) {
          const mid = Math.floor((left + right) / 2);
          
          if (nums[mid] === target)
              return mid + 1;
          else if (nums[mid] < target)
              left = mid + 1;
          else
              right = mid - 1;
      }

      return nums[left] > target ? left : left + 1;
  }

  for (let i = 1, n = nums.length; i < n; i++)
      nums[i] = nums[i - 1] + nums[i];

  for (let i = 0, n = queries.length; i < n; i++) {
      const idx = binarySearch(queries[i]);
      ans.push(idx);
  }

  return ans;
};