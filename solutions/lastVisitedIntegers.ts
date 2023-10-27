
// https://leetcode.com/problems/last-visited-integers/description/

export function lastVisitedIntegers(words: string[]): number[] {

  let k = 0
  const reverseNum: number[] = []
  const result: number[] = []

  for (let i = 0; i < words.length; i++) {
    const num = Number(words[i])

    if(isNaN(num)){
      k++
      
      if(k > reverseNum.length){
        result.push(-1)
      }else {
        result.push(reverseNum[k - 1])
      }

    }else {
      k = 0
      reverseNum.unshift(num)
    }

    console.log('reverse ', reverseNum, ' k ', k);
  }
    
  return result
};