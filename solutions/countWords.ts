
// https://leetcode.com/problems/count-common-words-with-one-occurrence/description/

const getHashWordsWithCount = (words: string[]) => {
  const hash: Record<string, number> = {}

  for (const str of words){
    if(!hash[str]){
      hash[str] = 0
    }

    hash[str]++
  }

  return hash
}

export function countWords(words1: string[], words2: string[]): number {
  const hash1 = getHashWordsWithCount(words1)
  const hash2 = getHashWordsWithCount(words2)

  const unique1 = Object.keys(hash1).filter((key) => hash1[key] === 1)
  const unique2 = Object.keys(hash1).filter((key) => hash2[key] === 1)
  const set = new Set(unique2)
  
  let count = 0

  for (const str of unique1){
    if(set.has(str)){
      count++
    }
  }

  return count
};