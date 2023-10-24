
// https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/

export function maxLengthBetweenEqualCharacters(s: string): number {
  const map = new Map<string, number[]>()
  let result = -1

  for (let i = 0; i < s.length; i++){
    const charIndex = map.get(s[i]) || []
    
    if(charIndex.length >= 1){
      result = Math.max(i - charIndex[0], result)
    }

    charIndex.push(i + 1)

    map.set(s[i], charIndex)
  }

  return result
};