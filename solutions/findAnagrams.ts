
// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

export function findAnagrams(s: string, p: string, arr: number[] = [], k = p.length, hash1 = 0, hash2 = 0): number[] {
  const prime = [2, 6, 15, 28, 55, 78, 119, 152, 207, 290, 341, 444, 533, 602, 705, 848, 1003, 1098, 1273, 1420, 1533, 1738, 1909, 2136, 2425, 2626]
  for ( let i = 0; i < k; i++ ) {
    hash1 += prime[s.charCodeAt(i) - 97]
    hash2 += prime[p.charCodeAt(i) - 97]
  }
  if ( hash1 === hash2 ) {
    arr.push(0)
  }
  for ( let i = 0; i < s.length - k; i++ ) {
    hash1 += prime[s.charCodeAt(i + k) - 97] - prime[s.charCodeAt(i) - 97]
    if ( hash1 === hash2 ) {
      arr.push(i + 1)
    }
  }
  return arr
}