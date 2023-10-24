
// https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

export function checkIfExist(arr: number[]): boolean {

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){

      if(i === j){
        continue
      }

      if(arr[i] === 2 * arr[j]){
        return true
      }
    }
  }

  return false
};