
// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/

export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {

  let count = 0

  for (const num1 of arr1){
    let isFound = false
    for (const num2 of arr2){
      if(Math.abs(num1 - num2) <= d){
        isFound = true
        break
      }
    }

    if(!isFound){
      count++
    }
  }

  return count
};