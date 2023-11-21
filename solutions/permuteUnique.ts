
// https://leetcode.com/problems/permutations-ii/description/

export function permuteUnique(nums: number[]): number[][] {

  if(nums.length === 0) return [[]]

  const result: number[][] = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++){
    if(i > 0 && nums[i] === nums[i - 1]){
      continue
    }

    const currentNum = nums[i]
    const remainingNums = nums.slice(0, i).concat(nums.slice(i+1))

    const permutations = permuteUnique(remainingNums)

    for (let j = 0; j < permutations.length; j++){
      result.push([currentNum].concat(permutations[j]))
    }
  }

  return result
}