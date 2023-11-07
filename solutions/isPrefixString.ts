
// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/

export function isPrefixString(s: string, words: string[]): boolean {

  let idx = 0
  
    while(s.length){
  
      const word = words[idx]
  
      if(!word){
        return false
      }
  
      if(word === s.slice(0, word.length)){
        s = s.slice(word.length)
        idx++
      }else {
        return false
      }
  
    }
      
    return true
  };