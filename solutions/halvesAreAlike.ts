
// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

export function halvesAreAlike(s: string): boolean {

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  const len = s.length

  const a = s.slice(0, len / 2)
  const b = s.slice(len / 2)

  let aCount = 0
  let bCount = 0

  for (let i = 0; i < len / 2; i++){
    const aCur = a[i]
    const bCur = b[i]

    if(vowels.has(aCur)){
      aCount++
    }

    if(vowels.has(bCur)){
      bCount++
    }
  }

  return aCount === bCount
};