
// https://leetcode.com/problems/string-compression-ii/description/

export function getLengthOfOptimalCompression(s: string, k: number): number {
    
  const memo: Record<string, number> = {}
  const len = s.length

  const dfs = (cur: number, k: number, last?: string, same: number = 0): number => {
      if (k < 0) return 101
      else if(len - cur === k) return 0
      const key = `${cur}_${k}_${last}_${same}`
      if(memo[key]) return memo[key]
      if(s[cur] === last){
          const carry = [1, 9, 99].includes(same) ?  1 : 0
          memo[key] = carry + dfs(cur+1, k, last, same+1)
          return memo[key]
      }
      const remain = 1 + dfs(cur+1, k, s[cur], 1)
      const deleted = dfs(cur+1, k-1, last, same)
      memo[key] = Math.min(remain, deleted)
      return memo[key]
  }

  return dfs(0, k, undefined, 0)
}