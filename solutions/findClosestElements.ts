
// https://leetcode.com/problems/find-k-closest-elements/description/

export function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - k;

  while(left < right){
      let mid = Math.floor((left + right) / 2);

      if(arr[mid] - x < x - arr[mid + k]){
          left = mid + 1;
      }else{
          right = mid;
      }
  }

  return arr.slice(left, left + k);
}