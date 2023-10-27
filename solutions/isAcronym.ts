
// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

export function isAcronym(words: string[], s: string): boolean {
  if(words.length !== s.length){
    return false
  }

  let abbr = ''

  for (const word of words){
    abbr += word[0]
  }

  return abbr === s
};