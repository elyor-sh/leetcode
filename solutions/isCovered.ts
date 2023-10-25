
// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/description/

export function isCovered(ranges: number[][], left: number, right: number): boolean {
  for (let i = left; i <= right; i++){
 
     let tmp = false
 
     for (const range of ranges){
       const x = range[0]
       const y = range[1]
   
       if(i >= x && i <= y){
         tmp = true
         break;
       }
 
     }
 
     if(!tmp) {
       return false 
     }
   }
 
   return true
 };