
// https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/

export function averageValue(nums: number[]): number {

  let result = 0
  let count = 0

  for (const num of nums){
    if(num % 2 === 0 && num % 3 === 0){
      result += num
      count++
    }
  }

  return Math.floor(result / (count || 1))

};