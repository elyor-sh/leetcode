
// https://leetcode.com/problems/kth-distinct-string-in-an-array/description/

export function kthDistinct(arr: string[], k: number): string {

  const hash: Record<string, number> = {}

  for (const str of arr){
    if(!hash[str]){
      hash[str] = 0
    }

    hash[str]++
  }

  const unique = Object.keys(hash).filter((key) => hash[key] === 1)

  return unique[k - 1] || ''
};