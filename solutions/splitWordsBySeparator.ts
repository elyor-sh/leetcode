
// https://leetcode.com/problems/split-strings-by-separator/description/

export function splitWordsBySeparator(words: string[], separator: string): string[] {
  const result: string[] = []

  for (const word of words){
    result.push(...word.split(separator).filter(str => !!str))
  }

  return result
};