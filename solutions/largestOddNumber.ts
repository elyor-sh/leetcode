
// https://leetcode.com/problems/largest-odd-number-in-string/

export function largestOddNumber(num: string): string {
  let end: number | undefined = undefined

  for (let i = num.length - 1; i >= 0; i--){
    if(parseInt(num[i]) % 2 !== 0){
      end = i + 1
      break
    }
  }

  if(!end){
    return ''
  }

  return num.slice(0, end)
};