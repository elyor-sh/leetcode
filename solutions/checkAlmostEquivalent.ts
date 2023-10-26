
// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/

const getHashLettersWithCount = (word: string) => {
  const hash: Record<string, number> = {}

  for (const str of word){
    if(!hash[str]){
      hash[str] = 0
    }

    hash[str]++
  }

  return hash
}

export function checkAlmostEquivalent(word1: string, word2: string): boolean {


  const hash1 = getHashLettersWithCount(word1)
  const hash2 = getHashLettersWithCount(word2)

  const keys1 = Object.keys(hash1)
  const keys2 = Object.keys(hash2)

  for (const key of keys1){
    const v1 = hash1[key] || 0
    const v2 = hash2[key] || 0

    if(Math.abs(v1 - v2) > 3){
      return false
    }
  }

  for (const key of keys2){
    const v1 = hash1[key] || 0
    const v2 = hash2[key] || 0

    if(Math.abs(v1 - v2) > 3){
      return false
    }
  }

  return true

};