
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters

export function countCharacters(words: string[], chars: string): number {

  let result = 0

  const getCharCount = (str: string) => {
    const charsMap = new Map<string, number>()

    for (const char of str){
      const val = charsMap.get(char) || 0
      charsMap.set(char, val + 1)
    }

    return charsMap
  }

  const charsMap = getCharCount(chars)


  outer: for (const word of words){
    const copy = getCharCount(word)
    for (const char of word){
      const val = copy.get(char)!
      const charCnt = charsMap.get(char) || 0

      if(val > charCnt){
        continue outer
      }

    }

    result += word.length
  }    

  return result
}