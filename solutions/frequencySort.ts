
// https://leetcode.com/problems/sort-characters-by-frequency/description/

export function frequencySort(s: string): string {
  const hash: Record<string, number> = {}

  for (const str of s){
    hash[str] = hash[str] || 0
    hash[str]++
  }

  return Object.entries(hash).sort((a, b) => b[1] - a[1]).reduce((acc, item) => acc += item[0].repeat(item[1]), '')
  
}