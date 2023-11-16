
// https://leetcode.com/problems/find-unique-binary-string/

export function findDifferentBinaryString(nums: string[]): string {
  let str = ''

  for (let i = 0; i < nums.length; i++){

    str += nums[i][i] === '0' ? '1' : '0'
  }

  return str
};