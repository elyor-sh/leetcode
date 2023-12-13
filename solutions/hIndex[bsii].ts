
// https://leetcode.com/problems/h-index-ii/

export function hIndex(citations: number[]): number {
  let len = citations.length;
  let left = 0;
  let right = len - 1;

  while(left <= right){
      let mid = Math.floor((left + right) / 2);
      let h = len - mid;

      if(citations[mid] === h) return h;

      if(citations[mid] < h){
          left = mid + 1;
      }else{
          right = mid - 1;            
      }
  }

  return len - left;
};