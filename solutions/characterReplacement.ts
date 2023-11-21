
// https://leetcode.com/problems/longest-repeating-character-replacement/description/

export function characterReplacement(s: string, k: number): number {
  let maxRepeatChar = 0;
  let startIndex = 0;
  let endIndex = 0;
  let max = 0;

  const characterHashMap: Map<string, number> = new Map();

  while (endIndex < s.length) {
      let char = s[endIndex];
      characterHashMap.set(char, (characterHashMap.get(char) || 0) + 1);

      maxRepeatChar = Math.max(maxRepeatChar, characterHashMap.get(char)!);


      while (endIndex - startIndex + 1 - maxRepeatChar > k) {
          char = s[startIndex];
          characterHashMap.set(char, (characterHashMap.get(char) || 0) - 1);
          startIndex++;
      }
      max = Math.max(max, endIndex - startIndex + 1);
      endIndex++;
  }

  return max;
}