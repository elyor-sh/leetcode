
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

// export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
//   return word1.join('') === word2.join('')
// }

export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let word1Pointer = 0
  let word2Pointer = 0
  let string1Pointer = 0
  let string2Pointer = 0

  while(word1Pointer < word1.length && word2Pointer < word2.length){

    if(word1[word1Pointer].charAt(string1Pointer++) !== word2[word2Pointer].charAt(string2Pointer++)){
      return false
    }

    if(string1Pointer === word1[word1Pointer].length){
      word1Pointer++
      string1Pointer = 0
    }

    if(string2Pointer === word2[word2Pointer].length){
      word2Pointer++
      string2Pointer = 0
    }

  }

  return word1Pointer === word1.length && word2Pointer === word2.length
}