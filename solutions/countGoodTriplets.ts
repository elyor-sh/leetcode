
// https://leetcode.com/problems/count-good-triplets/description/

export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {

  let count = 0

  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      for (let k = j + 1; k < arr.length; k++){
        const iN = arr[i]
        const jN = arr[j]
        const kN = arr[k]

        if(Math.abs(iN - jN) <= a && Math.abs(jN - kN) <= b && Math.abs(iN - kN) <= c){
          count++
        }
      }
    }
  }

  return count

};