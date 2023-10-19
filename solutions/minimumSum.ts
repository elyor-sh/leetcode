
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/

export function minimumSum(num: number): number {
  const arr = num.toString().split('').map(Number).sort();
  return arr[0]*10+arr[2]+arr[1]*10+arr[3];
};