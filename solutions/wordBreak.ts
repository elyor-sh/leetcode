
// https://leetcode.com/problems/word-break/description/

export function wordBreak(s: string, wordDict: string[], cache: Record<string, boolean> = {}): boolean {
  if (s in cache) return cache[s]
  if (!s.length) return cache[s] = true

  for (let word of wordDict) {
    const length = word.length
    const ix = s.indexOf(word)
    if (ix === 0) {
      const str = s.slice(ix + length, s.length)
      const ans = wordBreak(str, wordDict, cache)
      if (ans) return cache[s] = true
    }
  }
  return cache[s] = false
};