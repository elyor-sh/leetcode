
// https://leetcode.com/problems/top-k-frequent-elements/description/

export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()

   for (const num of nums){
       const found = map.get(num) || 0
       map.set(num, found + 1)
   }

   const sorted = Array.from(map).sort((a, b) => b[1] - a[1]).map(i => i[0])

   return sorted.slice(0, k)
};