
// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

export function differenceOfSum(nums: number[]): number {
  let sum = 0
  let sumOfDigits = 0

  const getSumOfDigits = (n: number) => {
    let res = 0

    const str = n.toString()

    for (const s of str){
      res += Number(s)
    }

    return res
  }

  for (const num of nums){
    sum += num
    sumOfDigits += getSumOfDigits(num)
  }

  return Math.abs(sum - sumOfDigits)
};