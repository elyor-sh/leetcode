
// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

const deepEqual = (arr1: number[], arr2: number[]): boolean => {
  
  if(arr1.length !== arr2.length){
    return false
  }

  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    }
  }

  return true
}

export function canBeEqual(target: number[], arr: number[]): boolean {

  target.sort((a, b) => a - b)
  arr.sort((a, b) => a - b)
  
  return deepEqual(target, arr)
};