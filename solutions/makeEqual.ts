
// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/

export function makeEqual(words: string[]): boolean {
  const hash: Record<string, number> = {}

  const word = words.join('')

  for (const w of word){
    if(hash[w]){
      hash[w] = hash[w] + 1
    }else {
      hash[w] = 1
    }
  }

  for (const letter in hash) {
        if (hash.hasOwnProperty(letter)) {
            if (hash[letter] % words.length !== 0) {
                return false;
            }
        }
    }

  return true;
};