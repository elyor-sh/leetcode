
// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

export function countConsistentStrings(allowed: string, words: string[]): number {

  const hash = new Set<string>()

  for (const al of allowed){
    hash.add(al)
  }

  let count = 0

  for (const word of words){
    let isOk = true

    for (const letter of word){
      if(!hash.has(letter)){
        isOk = false
      }
    }

    if(isOk){
      count++
    }
  }

  return count
};