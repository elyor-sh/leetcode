
// https://leetcode.com/problems/kth-missing-positive-number/description/

export function findKthPositive(arr: number[], k: number): number {

  if(arr[0] > k){
    return k
  }

  let missed = 0
  let index = 0
  let num = 1
  let len = arr.length

  while (missed < k) {
    if (index >= len || arr[index] !== num) {
      missed++;
    } else ++index;
    ++num;
  }
  
  return num - 1;
};