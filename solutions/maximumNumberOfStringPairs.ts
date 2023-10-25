
// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

const reverseStr = (str: string) => {
  let reversed = ''

  for (const s of str){
    reversed = s + reversed
  }

  return reversed
}

export function maximumNumberOfStringPairs(words: string[]): number {

  let count = 0

  for (let i = 0; i < words.length; i++){
    for (let j = i + 1; j < words.length; j++){
      if(words[i] === reverseStr(words[j])){
        count++
      }
    }
  }

  return count
};