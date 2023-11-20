
// https://leetcode.com/problems/longest-consecutive-sequence/description/

export function longestConsecutive(nums: number[]): number {

  nums.sort((a,b) => a - b);
  let maxCount: number = 0;
  let count: number = 0;
  let unique: Set<number> = new Set<number>();
  let maxCountArray: number[] = [];

  if(nums.length === 0) return 0;

  for(let j = 0 ; j < nums.length ; j++){
      unique.add(nums[j]);
  }

  let uniqueArray: number[] = Array.from(unique);

  for(let i = 1 ; i < uniqueArray.length ; i++){
      if( uniqueArray[i - 1] + 1 === uniqueArray[i]){
          count++;
      }else if(uniqueArray[i - 1] + 1 !== uniqueArray[i]){
        maxCountArray.push(count);
        count = 0;
      }

      if(i === uniqueArray.length - 1){
        maxCountArray.push(count);
      }
  }



 for(let i = 0 ; i < maxCountArray.length ; i++){
   maxCount = Math.max(maxCount, maxCountArray[i]);
 }


 return maxCount + 1;
};