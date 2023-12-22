
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

export function maxScore(s: string): number {
  
  let ones = 0

  for (const char of s){
    if(char === '1'){
      ones++
    }
  }

  let result = 0

  let zeros = 0

  for (let i = 0; i < s.length - 1; i++){

    const char = s[i]

    if(char === '1'){
      ones--
    }else {
      zeros++
    }

    result = Math.max(result, zeros + ones)
  }


  return result
};