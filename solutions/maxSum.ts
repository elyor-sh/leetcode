
// https://leetcode.com/problems/max-pair-sum-in-an-array/description/

const largestDigit = (num: number): number => {
  const str = num.toString()

  let largest = Number(str[0])

  for (const s of str){
    largest = Math.max(Number(s), largest)
  }

  return largest
}

export function maxSum(nums: number[]): number {

  let max = -1

  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      if(largestDigit(nums[i]) === largestDigit(nums[j])){
        max = Math.max(nums[i] + nums[j], max)
      }
    }
  }

  return max
};