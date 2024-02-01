
// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/

export function divideArray(nums: number[], k: number): number[][] {

  nums.sort((a, b)=> a - b)

  let answer: number[][] = []

  for (let i = 0; i < nums.length; i += 3){

    if (Math.abs(nums[i] - nums[i + 2]) <= k){
      answer.push(nums.slice(i, i + 3))
    }

    else return []

  }

  return answer
}