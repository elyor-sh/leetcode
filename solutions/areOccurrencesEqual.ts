
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

export function areOccurrencesEqual(s: string): boolean {

  const hash: Record<string, number> = {}

  for (const letter of s){
    if(!hash[letter]){
      hash[letter] = 0
    }

    hash[letter]++
  }


  return new Set(Object.values(hash)).size === 1

};