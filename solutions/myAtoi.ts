
// https://leetcode.com/problems/string-to-integer-atoi/description/

export function myAtoi(s: string): number {

  let parsed = parseInt(s)

  const MIN = -2147483648
  const MAX = 2147483647

  if(!parsed){
    return 0
  }

  if(parsed < MIN){
    return MIN
  }

  if(parsed > MAX){
    return MAX
  }

  return parsed 
};