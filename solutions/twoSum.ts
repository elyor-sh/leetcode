
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description

export function twoSum(numbers: number[], target: number): number[] {
  
  let start = 0
  let end = numbers.length

  while (start <= end){

    const s = numbers[start]
    const e = numbers[end]

    if(s + e === target){
      return [start + 1, end + 1]
    }else if(s + e < target){
      start++
    }else {
      end--
    }

  }

  return []

}