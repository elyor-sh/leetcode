
// https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/

export function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  return arr.sort((a, b) => a - b).reduce((m, n) => Math.min(m + 1, n), 0);
};