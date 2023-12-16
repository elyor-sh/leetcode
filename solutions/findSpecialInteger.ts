
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

export function findSpecialInteger(arr: number[]): number {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i + Math.floor(arr.length / 4)]) return arr[i]
  }


  return -1
}